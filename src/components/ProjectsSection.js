// src/lib/googleSheets.js
import { google } from 'googleapis';

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
      range: 'Sheet1!A2:F',
    });
    const rows = response.data.values || [];
    return rows.map(row => ({
      slug: row[0] || '',
      title: row[1] || '',
      description: row[2] || '',
      imageUrl: row[3] || '',
      projectUrl: row[4] || '',
      category: row[5] || 'Uncategorized',
    }));
  } catch (error) {
    console.error('Unable to retrieve projects data:', error);
    return [];
  }
}

export async function getAboutData() {
  // ... (โค้ดส่วนนี้ถูกต้องแล้ว ไม่ต้องแก้ไข) ...
}

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
      range: 'ProjectDetails!A2:D',
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