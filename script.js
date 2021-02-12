Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        {
          xtype: 'component',
          html: 'My First ExtJS Application',
          padding: 20
        }
      ]
    });
  }
});