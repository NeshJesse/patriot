import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

// Define the path to the SQLite database
const dbPath = path.join(process.cwd(), 'db', 'events.db');

// Check if the database file exists; if not, create it
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, ''); // Create an empty file
}

// Initialize SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

export async function POST(request) {
  const { eventData, routeData, participants, justificationData } = await request.json();

  return new Promise((resolve) => {
    db.run(
      `INSERT INTO events (eventData, routeData, participants, justificationData) VALUES (?, ?, ?, ?)`,
      [JSON.stringify(eventData), JSON.stringify(routeData), JSON.stringify(participants), JSON.stringify(justificationData)],
      function (err) {
        if (err) {
          resolve(NextResponse.json({ message: 'Error saving data' }, { status: 500 }));
        } else {
          resolve(NextResponse.json({ message: 'Data saved successfully!' }, { status: 200 }));
        }
      }
    );
  });
}
