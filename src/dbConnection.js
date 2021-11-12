import mysql from 'mysql';

let all;

// connection
const mySQLConnection = mysql.createConnection({
    host: 'localhost'
    , user: 'root'
    , password: ''
    , database: 'news_portal'
});

const connecting = () => {
    mySQLConnection.connect(err => {
        if(err) throw err;
        console.log('connected');
    });
}

const addNew = (title, description) => {
    const sql = `INSERT INTO news (id_new, title, description) VALUES (${null}, "${title}", "${description}")`;
    mySQLConnection.query(sql, function(err, result, filed) {
        if(err) throw err;
        console.log(result);
    });
}

const getNew = () => {
    const sql = 'SELECT * FROM news';
    //return new Promise((resolve, reject) => {
    //    mySQLConnection.query(sql, (err, res) => (err ? reject(err) : resolve(res)));
    //});
   
   // mySQLConnection.query(sql, function(err, result, field){
    //    //console.log('pepe',result[0])
     //       return result[0];
    //});

    mySQLConnection.query(sql, (err, rows) => {
        //console.log('pepe',rows);
        return rows;
    });
}

const deleteNews = id => {
    const sql = `DELETE FROM news WHERE id_new=${id}`;
    mySQLConnection.query(sql);
}

export {connecting, addNew, getNew, deleteNews};