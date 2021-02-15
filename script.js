Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      html: "Howdy!"
    });
  }
});