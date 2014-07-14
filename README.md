stationmaster
=============

Branch status and integration/deployment tools

## What does it do?

StationMaster is suitable for a project that has a dev domain that multiple branches are deployed to, for example:

    foo.dev.company.com
    bar.dev.company.com

StationMaster simply pushes out a page that indexes the dev domains you have. So, you hook StationMaster into your deployment scripts and hey presto! You can keep track of what domains were deployed and when!

## Requirements

* A dev domain that all your sites are deployed to

## Role variables

* `base` - the base path you want to deploy this index to. e.g. '/opt/company/company-ui'
* `devdomain` - the domain that your development workspaces are on.

## Dependencies

None, all dependencies are bundled. For development, dependencies are installed through NPM (see [CONTRIBUTING.md](CONTRIBUTING.md) for details).

## Instructions

All you need to do is:

1. Host stationmaster somewhere
2. Have some way of updating stationmaster.csv

### Updating StationMaster through Ansible Galaxy

The easiest way to use StationMaster is through Ansible. Through the plugin, you can use it with your existing playbook.

(TODO what will our package name be? this will need to change if we change it. Also we'd need to test this)

```bash
ansible-galaxy install radify.stationmaster
```

### Example Playbook

Then, from within one of your playbooks, you could do something like creating a playbook `stationmaster.yaml`:

```yaml
---
- hosts: all
  roles:
  - stationmaster
    base=/opt/company/company-ui
    devdomain=dev.company.com
```

Then you can do something like:

```bash
ansible-playbook -i path/to/custom-inventory stationmaster.yaml
```

### Including it in your Ansible playbook

If you don't want to use Ansible Galaxy for some reason, you can clone this repository and use an include statement from within a task. See the notes on [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Once you've configured it...

When it's set up and deploying index.html, you will need to set up your web server to actually serve it. StationMaster takes no part in actually configuring web servers, all it provides is the basic HTML.