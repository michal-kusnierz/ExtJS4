Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          xtype: 'panel',
          resizable: false,
          layout: 'border',
          collapsed: false,
          items: [
            {
              xtype: 'container',
              region: 'center',
              layout: {
                type: 'vbox',
                align: 'stretch'
              },
              items: [
                {
                  html: 'Sessions',
                  flex: 6
                },
                {
                  xtype: 'splitter',
                  width: 1
                },
                {
                  html: 'Presenters',
                  flex: 2
                }
              ]
            },
            {
              html: 'Session Details',
              flex: 2,
              region: 'east',
              split: true
            }
          ]
        }
      ]
    });
  }
});