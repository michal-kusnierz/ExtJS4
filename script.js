Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        {
          xtype: 'button',
          text: 'disable',
          handler: function() {
            this.up().down('#myComponent').disable();
          }
        },
        {
          xtype: 'button',
          text: 'enable',
          handler: function() {
            this.up().down('#myComponent').enable();
          }
        },
        {
          xtype: 'button',
          text: 'hide',
          handler: function() {
            this.up().down('#myComponent').hide();
          }
        },
        {
          xtype: 'button',
          text: 'show',
          handler: function() {
            this.up().down('#myComponent').show();
          }
        },
        {
          itemId: 'myComponent',
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