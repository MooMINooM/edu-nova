// src/lib/googleSheets.js
import { google } from 'googleapis';
import { unstable_noStore as noStore } from 'next/cache'; // 1. นำเข้า noStore

export async function getProjectsData() {
  noStore(); // 2. เพิ่มบรรทัดนี้เพื่อบอก Next.js ไม่ให้ cache ข้อมูล

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A2:E',
    });

    const rows = response.data.values || [];

    return rows.map(row => ({
      title: row[0],
      description: row[1],
      imageUrl: row[2],
      projectUrl: row[3],
      category: row[4],
    }));

  } catch (error) {
    console.error('Unable to retrieve sheets data:', error);
    return [];
  }
}