var low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");

const db = low(adapter);

db.defaults({ books: [], users: [] , trans: [] }).write();

console.log(db.get('trans').value());

module.exports = db;