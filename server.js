if(Meteor.isServer) {

  Meteor.methods({
    'search': function (query) {
      var posts = Posts.find(query).fetch();
      Meteor._debug("Posts found in the server side:");
      Meteor._debug(posts);
      return posts;
    }
  });

  Posts.remove({});

  //new Post({
  //  title: "hello world",
  //  content: 'lorem ipsum'
  //}).save();
  Posts.insert({
    title: "hello world",
    content: 'lorem ipsum'
  });

}
