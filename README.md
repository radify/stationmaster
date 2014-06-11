StationMaster
=============

Branch status and integration/deployment tools

## What does it do?

StationMaster is suitable for a project that has a dev domain that multiple branches are deployed to, for example:

    foo.dev.company.com
    bar.dev.company.com

StationMaster simply pushes out a page that indexes the dev domains you have. So, you hook StationMaster into your deployment scripts and hey presto! You can keep track of what domains were deployed and when!

## Requirements

* Ansible 1.3 or above.
* A dev domain that all your sites are deployed to

## Role variables

* `base` - the base path you want to deploy this index to. e.g. '/opt/company/company-ui'
* `devdomain` - the domain that your development workspaces are on.

## Dependencies

None

## Instructions

### Installing StationMaster through Ansible Galaxy

(TODO what will our package name be? this will need to change if we change it. Also we'd need to test this)

```bash
ansible-galaxy install uor.stationmaster
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

When it's set up and deploying devindex.html, you will need to set up your web server to actually serve it. StationMaster takes no part in actually configuring web servers or anything like that, it's simply a status page.