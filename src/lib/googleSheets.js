// src/lib/googleSheets.js
import { google } from 'googleapis';

// --- ฟังก์ชันสำหรับดึงข้อมูล Projects ---
export async function getProjectsData() {
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
      range: 'Sheet1!A2:E', // ดึงข้อมูลจากชีต Sheet1 ตั้งแต่แถวที่ 2 ถึงคอลัมน์ E
    });
    
    const rows = response.data.values || [];

    return rows.map(row => ({
      title: row[0] || '',
      description: row[1] || '',
      imageUrl: row[2] || '',
      projectUrl: row[3] || '',
      category: row[4] || 'Uncategorized',
    }));

  } catch (error) {
    console.error('Unable to retrieve projects data:', error);
    return []; // ส่งค่าว่างกลับไปหากเกิด error
  }
}

// --- ฟังก์ชันสำหรับดึงข้อมูล About Me ---
export async function getAboutData() {
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
      range: 'About!A2:B', // ดึงข้อมูลจากชีต About ตั้งแต่แถวที่ 2 ถึงคอลัมน์ B
    });
    
    const rows = response.data.values || [];

    // แปลงข้อมูล key-value array ให้เป็น object เดียว
    const aboutData = rows.reduce((acc, row) => {
      const [key, value] = row;
      if (key) {
        acc[key] = value;
      }
      return acc;
    }, {});

    return aboutData;

  } catch (error) {
    console.error('Unable to retrieve about data:', error);
    return {}; // ส่ง object ว่างกลับไปหากเกิด error
  }
}