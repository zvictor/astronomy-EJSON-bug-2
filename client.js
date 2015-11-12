if(Meteor.isClient) {

  var posts = Meteor.call('search', {title: 'hello world'}, function (error, posts) {
    Meteor._debug("Posts found in the client side:");
    Meteor._debug(posts);
  });

}
