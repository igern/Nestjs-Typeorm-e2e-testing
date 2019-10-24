console.log(process.env.DB_PASSWD)
module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME,
    port: 3306,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
}