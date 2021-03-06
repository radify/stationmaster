[![Build Status](https://travis-ci.org/radify/stationmaster.svg)](https://travis-ci.org/radify/stationmaster)
[![npm version](https://badge.fury.io/js/stationmaster.svg)](https://www.npmjs.com/package/stationmaster)
[![Dependency Status](https://david-dm.org/radify/stationmaster.svg)](https://david-dm.org/radify/stationmaster)
[![devDependency Status](https://david-dm.org/radify/stationmaster/dev-status.svg)](https://david-dm.org/radify/stationmaster#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/radify/stationmaster/badges/gpa.svg)](https://codeclimate.com/github/radify/stationmaster)

stationmaster
=============

Branch status and integration/deployment tools

## What does it do?

StationMaster is suitable for a project that has a dev domain that multiple branches are deployed to, for example:

    foo.dev.company.com
    bar.dev.company.com

StationMaster simply has a page that indexes the dev domains you have. So, you hook StationMaster into your deployment scripts and hey presto! You can keep track of what domains were deployed and when!

## Boundaries

All StationMaster does is:

1. Has a CSV that lists your dev domains
1. Displays a page that reads in the CSV and renders links

So, this means that it's your responsibility to do things like:

* Set up the nginx or apache files to serve StationMaster
* Restart your web server
* Manage your domains, etc

## Requirements

* A dev domain that all your sites are deployed to
* Ability to set up DNS etc to serve StationMaster

## Dependencies

None, all dependencies are bundled. For development, dependencies are installed through NPM (see [CONTRIBUTING.md](CONTRIBUTING.md) for details).

## Instructions

All you need to do is:

1. Host stationmaster somewhere
2. Have some way of updating stationmaster.csv

Here is an example Nginx configuration to serve stationmaster:

```nginx
server {
    listen 80;

    keepalive_timeout 55;

    access_log /var/log/nginx/stationmaster_access.log;
    error_log /var/log/nginx/stationmaster_error.log;

    server_name dev.company.com;
    root /opt/stationmaster/public;
    index index.html;

    location ~* \.(csv)$ {
        expires -1;
    }

    gzip_types text/plain text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json;
}
```

### Updating StationMaster through Ansible Galaxy

If you use Ansible, you can use StationMaster-ansible to manage StationMaster:

[radify/stationmaster-ansible](https://github.com/radify/stationmaster-ansible)

### Once you've configured it...

When it's set up and deploying index.html, you will need to set up your web server to actually serve it. StationMaster takes no part in actually configuring web servers, all it provides is the basic HTML.
