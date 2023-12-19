const oracledb = require('oracledb');
const dbConfig = {
    user: 'username',
    password: 'password',
    connectString: 'hostname:port/sid'
};
oracledb.createPool(dbConfig, (err) => {
    if (err) {
        console.log('连接失败!', err);
        return;
    }
    console.log('连接成功!.我好了!');
});