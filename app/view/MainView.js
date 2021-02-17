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