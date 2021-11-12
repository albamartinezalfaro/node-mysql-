import express from "express";
import { connecting, addNew, getNew, deleteNews } from "./src/dbConnection.js";

const app = express();
let all;

// Calva?
app.listen('3000', function(){ // listen in this port and do this
    console.log('initialized port 3000');
});

// config pug
app.set('views', './views');
app.set('views engine', 'pug'); // reenderizar html

// config static files
app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('./css'));

app.get('/', function(req, res){
    //res.send('initialized app');
    all = getNew();
    console.log('alba',all);
    console.log('alba',getNew());
    res.render('index.pug', {title: 'News', news:all});
});

app.get('/add/:title/:description', function(req, res){
    let title = req.params.title;
    let description = req.params.description;
    addNew(title, description);
    res.redirect('/');

    console.log(title, description);
});

app.get('/delete/:id', function(req, res) {
    let id = req.params.id;
    deleteNews(id);
    res.redirect('/');
}); 