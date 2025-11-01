import { google } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function initializeGoogleSheet() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID not found in environment variables');
    }

    console.log('Initializing Google Sheet...');
    console.log('Spreadsheet ID:', spreadsheetId);

    // Check sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });
    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || 'Sheet1';
    console.log('Sheet name:', sheetName);

    // Add header row (don't clear, just update)
    console.log('Adding header row...');
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1:G1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            'ID',
            'Profile',
            'Date',
            'Duration',
            'Start Location',
            'Stops (JSON)',
            'Created At',
          ],
        ],
      },
    });

    // Format header row
    console.log('Formatting header row...');
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: {
                    red: 0.2,
                    green: 0.4,
                    blue: 0.8,
                  },
                  textFormat: {
                    foregroundColor: {
                      red: 1,
                      green: 1,
                      blue: 1,
                    },
                    bold: true,
                  },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
          {
            updateSheetProperties: {
              properties: {
                sheetId: 0,
                gridProperties: {
                  frozenRowCount: 1,
                },
              },
              fields: 'gridProperties.frozenRowCount',
            },
          },
        ],
      },
    });

    console.log('✅ Google Sheet initialized successfully!');
    console.log(`📊 View your sheet at: https://docs.google.com/spreadsheets/d/${spreadsheetId}`);
  } catch (error) {
    console.error('❌ Error initializing Google Sheet:', error);
    throw error;
  }
}

initializeGoogleSheet();
