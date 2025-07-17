const Pool = require("pg").Pool;

const pool = new Pool({
    user: "proddiddo",
    host: "localhost",
    database: "Inventory",
    port: 5432,
    });

module.exports = pool;

