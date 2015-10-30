// Meteor.publishComposite('postsByUser', function(userId, limit) {
//     return {
//         find: function() {
//             // Find posts made by user. Note arguments for callback function
//             // being used in query.
//             return Posts.find({ authorId: userId }, { limit: limit });
//         },
//         children: [
//             // This section will be similar to that of the previous example.
//         ]
//     }
// });