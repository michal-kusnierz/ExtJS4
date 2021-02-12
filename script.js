Ext.define('MyApp.Session', {
  config: {
    title: '',
    description: '',
    level: 'beginner'
  },
  
  applyTitle: function(title){
    if (title === undefined) {
      alert('title undefined');
    }
    return title;
  },

  constructor: function(config) {
    this.initConfig(config);
  }
});

let session = Ext.create('MyApp.Session', {

});

let x;
session.setTitle(x);

console.log(session.getTitle());