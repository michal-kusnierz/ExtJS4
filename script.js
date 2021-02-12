Ext.define('MyApp.Session', {
  config: {
    title: '',
    description: '',
    level: 'beginner'
  },
  constructor: function(config) {
    this.initConfig(config);
  }
});

let session = Ext.create('MyApp.Session', {

});

session.setTitle("Peter's awesome session");

console.log(session.getTitle());