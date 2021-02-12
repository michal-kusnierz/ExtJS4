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

})