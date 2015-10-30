

// if (Meteor.isClient) {
//   Meteor.subscribe("userinfo");
//   console.log(Meteor.user());
//   Template.setup.derp = function() {
//     if (Meteor.user() && !Meteor.loggingIn()) {
//       var url = "https://www.googleapis.com/youtube/v3/channels";
//       var params = {
//         access_token: Meteor.user().services.google.accessToken,
//         part: "snippet",
//         mine: "true"
//       };
//       Meteor.http.get(url, {params: params}, function (err, result) {
//           console.log(result.statusCode, result.data);
//           var retdata =  result.data;
//           Session.set("myItems", retdata.items);
//       });
//     }
//   };
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     Meteor.publish("userinfo", function () {
//       return Meteor.users.find({_id: this.userId}, {fields: {profile: 1, services: 1}});
//     });
//   });
// }
