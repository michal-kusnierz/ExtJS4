Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        {
          tpl: 'name: {first} {last}',
          data: {
            first: 'Peter',
            last: 'Kellner'
          },
          padding: 20,
          width: 200,
          height: 200,
          style: {
            border: '2px solid red;'
          },
          resizable: true,
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