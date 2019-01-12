const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const filePath = "./config/mylinks.json"

var fs = require('fs')
app.set('view engine', 'ejs')

app.get('/', (req, res) => loadPage(res))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function loadPage(res) {
    console.log("Function loadPage")
    const data = loadFileSync()

    res.render('index', { categories: data.mylinks.categories });
}

function loadFileSync() {
    console.log("Function loadFileSync")

    var fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    console.log("data 1: " + data)
    return data
}