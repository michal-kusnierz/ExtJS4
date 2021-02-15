Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          xtype: 'panel',
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'panel',
              html: 'Sessions Panel',
              flex: 2
            },
            {
              xtype: 'panel',
              html: 'Speakers Panel',
              flex: 1
            }
          ]
        },
        {
          xtype: 'panel',
          html: 'Details Panel',
          flex: 3
        }
      ]
    });
  }
});