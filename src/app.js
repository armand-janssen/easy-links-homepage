const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
const filePath = "./config/config.json"
const templateFilePath = "./config-template/config.json"

var fs = require('fs')
if(!fs.existsSync(filePath)) {
    console.log('No config ("config.json") in config dir. Copy config from template directory to real config directory')
    fs.copyFileSync(templateFilePath, filePath)
}

app.set('view engine', 'ejs')
app.get('/', (req, res) => loadPage(res))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Easy Links Homepage is listening on port ${port}!`))

function loadPage(res) {
    var startTime = new Date().getTime();
    const data = loadFileSync()

    res.render('index', { categories: data.mylinks.categories, startTime: startTime });
}

function loadFileSync() {
    var fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data
}

  
  