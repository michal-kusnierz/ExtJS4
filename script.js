Ext.application({
  name: 'App',
  launch: function() {

    let sessionGridPanel = Ext.create('Ext.grid.Panel', {
      store: {
        fields: ['id','title','approved'],
        data: [
          {
            id: 101,
            title: 'JavaScript for dummies',
            approved: true
          },
          {
            id: 102,
            title: 'C# for Smarties',
            approved: false
          },
          {
            id: 103,
            title: 'ExtJS for everyone',
            approved: true
          }
        ]
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
          text: 'Title'
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
                sessionGridPanel,
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