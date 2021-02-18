Ext.define('SE.view.MainView', {
  extend: 'Ext.container.Viewport',
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
              xtype: 'sessiongridpanel',
              flex: 3
            },
            {
              xtype: 'splitter'
            },
            {
              // html: 'Presenters',
              xtype: 'presenters',
              flex: 2
            }
          ]
        },
        {
          // html: 'Session Details',
          xtype: 'detailspanel',
          flex: 2,
          region: 'east',
          split: true
        }
      ]
    }
  ]
});