Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        {
          xtype: 'component',
          html: '<p>If you click on me, I will disappear.</p>',
          listeners: {
            click: {
              element: 'el',
              fn: function() {
                this.hide();
              }
            }
          }
        },
        {
          xtype: 'component',
          html: '<p>Click me away!</p>',
          listeners: {
            click: {
              element: 'el',
              fn: function() {
                this.hide();
              }
            }
          }
        },
        {
          xtype: 'component',
          html: '<p>Click me too!</p>',
          listeners: {
            click: {
              element: 'el',
              fn: function() {
                this.hide();
              }
            }
          }
        }
      ]
    })
  }
});