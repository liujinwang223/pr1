const oracledb = require('oracledb');
const router = require('koa-router')();
router.get('/', async (ctx, next) => {
    try {
        const conn = await oracledb.getConnection();
        const result = await conn.execute('SELECT * FROM TABLE_NAME');
        console.log(result.rows);
        await conn.close();
    } catch (err) {
        console.log(err);
    }
});