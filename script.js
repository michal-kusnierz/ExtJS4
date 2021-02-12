let myComponent = Ext.create('Ext.Component', {
  html: 'My First ExtJS Application'
});

Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        myComponent
      ]
    });
  }
});