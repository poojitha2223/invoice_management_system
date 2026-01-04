const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./invoice.db");
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoiceNumber TEXT UNIQUE,
    clientName TEXT,
    date TEXT,
    amount REAL,
    status TEXT
  )`);
});
module.exports = db;