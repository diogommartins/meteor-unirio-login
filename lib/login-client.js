Template.UnirioLogin.events({
    'submit #login-form': function(event){
        event.preventDefault();
        const form = event.target;
        const username = form.login_username.value;
        const password = form.login_password.value;

        Meteor.loginWithLDAP(username, password, {
            dn: `uid=${username},ou=people,dc=unirio,dc=br`
        }, function(err) {
            if (!err){
                $("#login-modal").modal('hide');
            } else{
                event.target.login_username.value = "";
                event.target.login_password.value = "";
            }
        });
    },
    'click .logout-button': function(){
        Meteor.logout();
    }
});

Template.UnirioLogin.helpers({
    logo: function(){
        return "http://sistemas.unirio.br/projetos_ensino/static/images/layout2/logo_dtic_final.png"
    },
    displayName: function(){
        return Meteor.user().displayName || Meteor.user().username;
    }
});
