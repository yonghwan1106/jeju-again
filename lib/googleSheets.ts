import { google } from 'googleapis';
import { Itinerary } from '@/types';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function getGoogleSheetsClient() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

async function getSheetName(sheets: any, spreadsheetId: string): Promise<string> {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  return spreadsheet.data.sheets?.[0]?.properties?.title || 'Sheet1';
}

export async function saveItinerary(itinerary: Itinerary): Promise<string> {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('Google Sheet ID not configured');
  }

  const sheetName = await getSheetName(sheets, spreadsheetId);

  // Generate unique ID
  const id = `ITN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Prepare data for sheet
  const values = [
    [
      id,
      itinerary.profile,
      itinerary.date,
      itinerary.duration.toString(),
      itinerary.startLocation,
      JSON.stringify(itinerary.stops),
      new Date().toISOString(),
    ],
  ];

  // Append to sheet
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: 'RAW',
    requestBody: {
      values,
    },
  });

  return id;
}

export async function loadItinerary(id: string): Promise<Itinerary | null> {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('Google Sheet ID not configured');
  }

  const sheetName = await getSheetName(sheets, spreadsheetId);

  // Get all data
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:G`,
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    return null;
  }

  // Find row with matching ID
  const row = rows.find((r) => r[0] === id);
  if (!row) {
    return null;
  }

  // Parse row data
  const itinerary: Itinerary = {
    id: row[0],
    profile: row[1] as any,
    date: row[2],
    duration: parseInt(row[3]),
    startLocation: row[4],
    stops: JSON.parse(row[5]),
    createdAt: row[6],
  };

  return itinerary;
}

export async function getAllItineraries(): Promise<Itinerary[]> {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('Google Sheet ID not configured');
  }

  const sheetName = await getSheetName(sheets, spreadsheetId);

  // Get all data
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A:G`,
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    return [];
  }

  // Skip header row if exists
  const dataRows = rows[0][0] === 'ID' ? rows.slice(1) : rows;

  // Parse all rows
  const itineraries: Itinerary[] = dataRows.map((row) => ({
    id: row[0],
    profile: row[1] as any,
    date: row[2],
    duration: parseInt(row[3]),
    startLocation: row[4],
    stops: JSON.parse(row[5]),
    createdAt: row[6],
  }));

  // Sort by creation date (newest first)
  return itineraries.sort(
    (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
  );
}
