const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const configDir = "./config"
const filePath = "./config/mylinks.json"
const templateFilePath = "./config-template/mylinks.json"

var fs = require('fs')
if(!fs.existsSync(configDir)) {
    console.log('Config directory does not exist, so creating it...')
    fs.mkdirSync(configDir)
    console.log('Copy config from template directory to real config directory')
    fs.copyFileSync(templateFilePath, filePath)
}

app.set('view engine', 'ejs')
app.get('/', (req, res) => loadPage(res))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Easy Links Homepage is listening on port ${port}!`))

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