import pg from 'pg';
import 'dotenv/config';
pg.types.setTypeParser(1082, (val) => val);
export const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
});
//Connection Tests
// pool.query('SELECT * FROM project;')
//     .then((response) => {
//         console.log(response.rows);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// pool.query('SELECT * FROM project_task;')
//     .then((response) => {
//         console.log(response.rows);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
