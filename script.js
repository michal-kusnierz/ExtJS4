Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        {
          // xtype: 'component',
          // html: 'My First ExtJS Application',
          padding: 20,
          tpl: 'name: {first} {last}',
          data: {
            first: 'Peter',
            last: 'Kellner'
          },
          listeners: {
            resize: {
              fn: function (component, width, height) {
                console.log('w/h: ' + width + ' ' + height);
              }
            }
          }
        }
      ]
    });
  }
});