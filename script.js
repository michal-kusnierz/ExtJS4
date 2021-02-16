Ext.application({
  name: 'App',
  launch: function() {

    Ext.define('SessionGridPanel', {
      extend: 'Ext.grid.Panel',
      alias: 'widget.sessiongridpanel',
      store: {
        fields: ['id','title','approved'],
        autoLoad: true,
        autoSync: true,
        proxy: {
          type: 'rest',
          reader: {
            type: 'json',
            root: 'data'
          }
        }
      },
      columns: [
        { 
          xtype: 'gridcolumn',
          dataIndex: 'id',
          text: 'Id'
        },
        { 
          xtype: 'gridcolumn',
          dataIndex: 'title',
          text: 'Title',
          flex: 1,
          minWidth: 150,
          width: 100
        },
        { 
          xtype: 'gridcolumn',
          dataIndex: 'approved',
          text: 'Approved'
        }
      ]
    });

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
  }
});