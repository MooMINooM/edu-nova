// src/lib/googleSheets.js
import { google } from 'googleapis';

// --- ฟังก์ชันสำหรับดึงข้อมูล Projects (อัปเดตให้รู้จัก slug) ---
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
      range: 'Sheet1!A2:F', // อัปเดต Range ให้ถึงคอลัมน์ F
    });
    
    const rows = response.data.values || [];

    return rows.map(row => ({
      slug: row[0] || '',       // เพิ่ม slug เข้ามา
      title: row[1] || '',
      description: row[2] || '',
      imageUrl: row[3] || '',
      projectUrl: row[4] || '', // ยังคงดึง projectUrl มาด้วย
      category: row[5] || 'Uncategorized',
    }));

  } catch (error) {
    console.error('Unable to retrieve projects data:', error);
    return [];
  }
}

// --- ฟังก์ชันสำหรับดึงข้อมูล About Me (เหมือนเดิม) ---
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
      range: 'About!A2:B',
    });
    
    const rows = response.data.values || [];

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
    return {};
  }
} 

// --- (ฟังก์ชันใหม่) สำหรับดึงข้อมูลรายละเอียดโปรเจกต์ตาม Slug ---
export async function getProjectBySlug(slug) {
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
      range: 'ProjectDetails!A2:D', // ดึงข้อมูลจากชีต ProjectDetails
    });
    
    const rows = response.data.values || [];
    
    const projectDetails = rows.map(row => ({
      slug: row[0],
      longDescription: row[1],
      imageGallery1: row[2],
      imageGallery2: row[3],
    }));
    
    return projectDetails.find(p => p.slug === slug);
  } catch (error) {
    console.error('Unable to retrieve project details:', error);
    return null;
  }
}