Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  name: 'SE',
  
  requires: [
    'SE.view.MainView'
  ],

  launch: function() {
    Ext.create('SE.view.MainView');
  }
});
