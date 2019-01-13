# easy-links-homepage
Shows a simple homepage containing your favorite links, read from a simple JSON file

[![Build Status](https://travis-ci.org/armand-janssen/easy-links-homepage.svg?branch=master)](https://travis-ci.org/armand-janssen/easy-links-homepage)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-green.svg)](https://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-green.svg)](https://github.com/armand-janssen/easy-links-homepage/graphs/commit-activity)

**This project is a simple project to toy around with nodejs, express, ejs, github and docker. Code quality is not the major concern here :)**

#docker-compose
version: '2'

```docker-compose
easy-links-homepage:
  jackett:
    image: "armandjanssen/easy-links-homepage"
    container_name: "easy-links-homepage"
    ports:
      - "3000:3000"
    restart: always
```

More info on: https://github.com/armand-janssen/easy-links-homepage
