"use strict"


////////////////////////////////////////////////////////////////////
// Routing
//

// override with mini-pages navigate method
Meteor.navigateTo = function(path) {
    FlowRouter.go(path)
}


FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("noHeaderLayout", {
            content: "not_found"
        })
    }
}



var staticmainLayoutPages = [{    name: '',
                                  layout: 'mainLayout'
                              },
                              {    name: 'start',
                                  layout: 'mainLayout'
                              }, 
                              // {
                              //     name: 'signin',
                              //     layout: 'noHeaderLayout'
                              // }, 
                              {
                                  name: 'register',
                                  layout: 'noHeaderLayout'
                              }, {
                                  name: 'secrets',
                                  layout: 'noHeaderLayout'
                              }, {
                                  name: 'manageUsers',
                                  layout: 'noHeaderLayout'
                              }, {
                                  name: 'howitworks',
                                  layout: 'noHeaderLayout'
                              }];



_.map(staticmainLayoutPages, function(item, index) {
    FlowRouter.route('/' + item.name, {
        action: function() {
            BlazeLayout.render(item.layout, {
                content: item.name
            })
        }
    });
});


  FlowRouter.route('/signin', {
        action: function() {
            BlazeLayout.render('noHeaderLayout', {
                content: 'signin'
            })
        },
        subscriptions: function(params) {
        console.log("loginServicesConfigured()");
        setTimeout(function(){ 
            Accounts.loginServicesConfigured(); },500); 
      }

    });





// FlowRouter.route('/', {
//   action: function () {
//     BlazeLayout.render('mainLayout', {content: 'start'})
//   }
// })

// FlowRouter.route('/start', {
//   action: function () {
//     BlazeLayout.render('mainLayout', {content: 'start'})
//   }
// })

// FlowRouter.route('/signin', {
//   action: function () {
//     BlazeLayout.render('noHeaderLayout', {content: 'signin'})
//   }
// })

// FlowRouter.route('/register', {
//   action: function () {
//     BlazeLayout.render('noHeaderLayout', {content: 'register'})
//   }
// })

// FlowRouter.route('/secrets', {
//   action: function () {
//     BlazeLayout.render('noHeaderLayout', {content: 'secrets'})
//   }
// })

// FlowRouter.route('/manageUsers', {
//   action: function () {
//     BlazeLayout.render('mainnoHeaderLayoutLayout', {content: 'manageUsers'})
//   }
// })

// FlowRouter.route('/signout', {
//     action: App.signout
// })

// FlowRouter.route('/howitworks', {
//   action: function () {
//     BlazeLayout.render('noHeaderLayout', {content: 'howitworks'})
//   }
// })
