Package.describe({
    name: 'diogommartins:unirio-login',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Plug and play modal login for UNIRIO LDAP',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/diogommartins/meteor-unirio-login.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use(['meteor-base', 'templating']);
    // Meteor.loginWithLDAP
    api.use('twbs:bootstrap', 'client');
    api.use('jquery', 'client');
    api.use("typ:accounts-ldap@1.0.0");

    api.imply(['accounts-base', 'accounts-password', 'typ:accounts-ldap'], ['client', 'server']);

    api.addFiles([
        'login.html',
        'lib/login-client.js',
        'login.css'
    ], 'client');
    api.addFiles(['lib/login-server.js'], 'server');

    api.export('LDAP_DEFAULTS', 'server');
});

//Npm.depends({
//    'unirio-api': '1.0.2'
//});