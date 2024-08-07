const client = require('./client.js');

const createTables = async() => {
  try{
    await client.query(`
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(30) NOT NULL UNIQUE,
      password VARCHAR(30) NOT NULL
      );
      `);
  } catch(err){
    console.log(err);

  }
  
}

const syncAndSeed = async () => {
  await client.connect();
  console.log(`TABLES`);

  createTables();
  console.log( `TABLES!!!`)
}

syncAndSeed();