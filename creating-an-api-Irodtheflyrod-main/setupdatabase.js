const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Error opening database:', err.message);
});

const setupSQL = `
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
`;

db.serialize(() => {
    db.run(setupSQL, (err) => {
        if (err) console.error('Error executing setup SQL:', err.message);
    });
});

db.close((err) => {
    if (err) console.error('Error closing the database:', err.message);
});