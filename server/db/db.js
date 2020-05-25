const { Pool } = require('pg');
const PG_URI = 'postgres://aykhropt:MKs-VqOhKzD-Lgi5mXvER0gWkZ-3sf2q@drona.db.elephantsql.com:5432/aykhropt';

const pool  = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}