Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: {
        type: 'border'
      },
      items: [
        {
          region: 'west',
          xtype: 'panel',
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          flex: 1,
          split: true,
          items: [
            {
              xtype: 'panel',
              html: 'Sessions Panel',
              flex: 2
            },
            {
              xtype: 'splitter',
              width: 1
            },
            {
              xtype: 'panel',
              html: 'Speakers Panel',
              flex: 1
            }
          ]
        },
        {
          region: 'center',
          xtype: 'panel',
          html: 'Details Panel',
          flex: 1,
          title: 'Details Panel',
          collapsible: true,
          collapsed: true,
          collapseDirection: 'right'
        }
      ]
    });
  }
});