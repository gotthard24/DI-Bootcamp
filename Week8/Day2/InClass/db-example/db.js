const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'w8class',
        password: '474747kk'
    }
});

const dbNeon = knex({
    client: 'pg',
    connection: {
        host: 'ep-little-snowflake-a5x6jr3d.us-east-2.aws.neon.tech',
        port: 5432,
        user: 'testdb_owner',
        database: 'testdb',
        password: 'Lk0CA4XylUHh',
        ssl: {rejectUnauthorized: false},
    }
});

// # Do not expose your Neon credentials to the browser

// PGHOST='ep-little-snowflake-a5x6jr3d.us-east-2.aws.neon.tech'
// PGDATABASE='testdb'
// PGUSER='testdb_owner'
// PGPASSWORD='Lk0CA4XylUHh'

// const test = async() =>{
//     try {
//         const trx = await db.transaction();

//         const product1 = await db('products')
//         .insert({name: 'aaa', price: 111}, ['*'])
//         .transacting(trx);

//         console.log(product1);

//         const product2 = await db('products')
//         .insert({name: 'bbb', price: 222}, ['*'])
//         .transacting(trx);

//         console.log(product2);

//         await trx.commit()
//     } catch (error) {
//         console.log(error);
//         await trx.rollback()
//     }
// }

// test()

async function getVersion() {
    const result = await dbNeon.raw(`SELECT version()`)
    console.log(result.rows);
}

getVersion()

// db('products')
// .where({id:4})
// .del()
// .returning('*')
// // .update
// // .where
// // .insert(
// //     [
// //     {name: "Samsung s23", price: 555},
// //     {name: "Samsung s24", price: 777},
// //     ],
// //     ['id', 'name', 'price']
// // )
// // .orderBy('name')
// // .select('id', 'name')
// // .where({id:3})
// .then(data=> {
//     console.log(data);
// })
// .catch(e => console.log(e))