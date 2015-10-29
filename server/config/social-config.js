Meteor.startup(function () {


ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1631529063767025',
    secret: '4433d15dbc6f84c27c74d9e22cf85d89'
});




// Accounts.loginServiceConfiguration.remove({
//     service: "facebook"
// });
// Accounts.loginServiceConfiguration.insert({
//     service: "facebook",
//     appId: "1631529063767025",
//     secret: "4433d15dbc6f84c27c74d9e22cf85d89"
// });

});