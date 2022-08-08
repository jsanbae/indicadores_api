const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

const config = {
    mongodb :{
        database: DB
    }
}

module.exports = config;