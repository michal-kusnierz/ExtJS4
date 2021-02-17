Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  name: 'SE',
  launch: function() {
    Ext.create('SE.view.MainView');
  }
});
