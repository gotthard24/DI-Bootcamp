const postgress = require('postgres')

const sql = postgress({
    host: 'localhost',
    database: 'w8class',
    username: 'postgres',
    port:5432,
    password: '474747kk'
});

async function getVersion() {
    const result = await sql `select * from products`;
    console.log(result);
}

getVersion()