# easy-links-homepage
Shows a simple homepage containing your favorite links, read from a simple JSON file

[![Build Status](https://travis-ci.org/armand-janssen/easy-links-homepage.svg?branch=master)](https://travis-ci.org/armand-janssen/easy-links-homepage)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-green.svg)](https://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-green.svg)](https://github.com/armand-janssen/easy-links-homepage/graphs/commit-activity)

**This project is a simple project to toy around with nodejs, express, ejs, github and docker. Code quality is not the major concern here :)**

## docker-compose
```docker-compose
version: '2'

services:
  easy-links-homepage:
    image: "armandjanssen/easy-links-homepage"
    container_name: "easy-links-homepage"
    volumes:
      - <YOUR-LOCAL-DIR-HERE>:/usr/src/app/config
    ports:
      - "3000:3000"
    restart: always


```
## TODO
* Rename config to config.json
* Add tabs, to clean up page
* Create a way to add custom images, while using docker
* Add layout config to config json
* Store links in DB, add API to manage
* Add gui to manage

## Links

* [Github](https://github.com/armand-janssen/easy-links-homepage)
* [Docker hub](https://github.com/armand-janssen/easy-links-homepage)
