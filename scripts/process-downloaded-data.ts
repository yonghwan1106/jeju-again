import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface DomesticRecord {
  년월: string;
  구분: string;
  내_외국인: string;
  카테고리: string;
  '입도객 수': number;
}

interface ForeignRecord {
  년월: string;
  지역: string;
  국가: string;
  제주_한국: string;
  '입도객 수': number;
}

async function processDomesticData() {
  const csvPath = path.join(process.cwd(), 'data', 'real', 'downloaded', '제주내국인-입도통계-202508.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');

  const records: DomesticRecord[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    cast: (value, context) => {
      if (context.column === '입도객 수') {
        return parseInt(value, 10);
      }
      return value;
    }
  });

  // Aggregate data by category
  const purposeData: { [key: string]: number } = {};
  const typeData: { [key: string]: number } = {};

  records.forEach(record => {
    if (record.구분 === '목적') {
      purposeData[record.카테고리] = (purposeData[record.카테고리] || 0) + record['입도객 수'];
    } else if (record.구분 === '형태') {
      typeData[record.카테고리] = (typeData[record.카테고리] || 0) + record['입도객 수'];
    }
  });

  // Calculate total domestic tourists
  const totalDomestic = Object.values(purposeData).reduce((sum, val) => sum + val, 0);

  return {
    yearMonth: '202508',
    total: totalDomestic,
    byPurpose: purposeData,
    byType: typeData
  };
}

async function processForeignData() {
  const csvPath = path.join(process.cwd(), 'data', 'real', 'downloaded', '제주외국인-입도통계-202508.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');

  const records: ForeignRecord[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    cast: (value, context) => {
      if (context.column === '입도객 수') {
        return parseInt(value, 10);
      }
      return value;
    }
  });

  // Aggregate data by country and destination
  const byCountry: { [key: string]: number } = {};
  const byRegion: { [key: string]: number } = {};
  let jejuDirect = 0;
  let viaKorea = 0;

  records.forEach(record => {
    // By country
    byCountry[record.국가] = (byCountry[record.국가] || 0) + record['입도객 수'];

    // By region
    byRegion[record.지역] = (byRegion[record.지역] || 0) + record['입도객 수'];

    // By destination type
    if (record.제주_한국 === '제주') {
      jejuDirect += record['입도객 수'];
    } else {
      viaKorea += record['입도객 수'];
    }
  });

  // Calculate total foreign tourists
  const totalForeign = Object.values(byCountry).reduce((sum, val) => sum + val, 0);

  // Convert to array and sort
  const topCountries = Object.entries(byCountry)
    .map(([country, visitors]) => ({
      country,
      visitors,
      percentage: parseFloat(((visitors / totalForeign) * 100).toFixed(1))
    }))
    .sort((a, b) => b.visitors - a.visitors);

  return {
    yearMonth: '202508',
    total: totalForeign,
    jejuDirect,
    viaKorea,
    byCountry,
    byRegion,
    topCountries: topCountries.slice(0, 10)
  };
}

async function main() {
  console.log('Processing downloaded real data from data.ijto.or.kr...\n');

  const domesticData = await processDomesticData();
  const foreignData = await processForeignData();

  console.log('=== Domestic Tourist Statistics (August 2025) ===');
  console.log(`Total: ${domesticData.total.toLocaleString()} visitors`);
  console.log('\nBy Purpose:');
  Object.entries(domesticData.byPurpose).forEach(([purpose, count]) => {
    console.log(`  ${purpose}: ${count.toLocaleString()}`);
  });
  console.log('\nBy Type:');
  Object.entries(domesticData.byType).forEach(([type, count]) => {
    console.log(`  ${type}: ${count.toLocaleString()}`);
  });

  console.log('\n=== Foreign Tourist Statistics (August 2025) ===');
  console.log(`Total: ${foreignData.total.toLocaleString()} visitors`);
  console.log(`Direct to Jeju: ${foreignData.jejuDirect.toLocaleString()}`);
  console.log(`Via Korea: ${foreignData.viaKorea.toLocaleString()}`);
  console.log('\nTop 10 Countries:');
  foreignData.topCountries.forEach((country, index) => {
    console.log(`  ${index + 1}. ${country.country}: ${country.visitors.toLocaleString()} (${country.percentage}%)`);
  });

  // Save combined data to JSON
  const outputData = {
    lastUpdated: '2025-08-31',
    source: '제주관광빅데이터 플랫폼 (data.ijto.or.kr)',
    month: '2025-08',
    domestic: domesticData,
    foreign: foreignData
  };

  const outputPath = path.join(process.cwd(), 'data', 'real', 'touristStatistics202508.json');
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');

  console.log(`\n✅ Processed data saved to: ${outputPath}`);
}

main().catch(console.error);
