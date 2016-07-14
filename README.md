# Meteor unirio-login

Modulo provê integração com login LDAP e o template reativo ```{{> UnirioLogin}}``. Configurações podem ser sobrescritas no servidor através de `LDAP_DEFAULTS.url` e `LDAP_DEFAULTS.dsn`. 

## Instalação

```
meteor add diogommartins:unirio-login
```

Registre um helper `displayName` que servirá como resolvedor de nome a ser exibido para usuário logado. Caso contrário, `username` será exibido.

```
Meteor.users.helpers({
    displayName: function(){
        return "John Doe";
    }
})
```


## Dependencias
* jquery
* accounts-base
* accounts-password
* typ:accounts-ldap@1.0.0

