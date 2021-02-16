Ext.application({
  name: 'App',
  launch: function() {

    Ext.define('SessionForm', {
      extend: 'Ext.window.Window',
      alias: 'widget.sessionform',
      padding: 5,
      width: 600,
      title: 'Edit Sessions',
      model: 'true',
      items: [
        {
          xtype: 'form',
          bodyPadding: 10,
          title: '',
          defaults: {
            labelWidth: 90,
            margin: '0 0 10 0',
            anchor: '90%'
          },
          items: [
            {
              xtype: 'textfield',
              name: 'title',
              fieldLabel: 'Title'
            },
            {
              xtype: 'checkbox',
              name: 'approved',
              fieldLabel: 'Approved'
            }
          ]
        }
      ]
    });

    Ext.define('SessionGridPanel', {
      extend: 'Ext.grid.Panel',
      alias: 'widget.sessiongridpanel',
      listeners: {
        itemdblclick: function(gridpanel,record,item,e) {
          let formWindow = Ext.create('SessionForm');
          formWindow.show();
        }
      },
      store: {
        fields: [
          'id',
          {
            name: 'title',
            sortType: 'asUCText'
          },
          'approved',
          {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
          },
          {
            convert: function(v, rec) {
              let convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a');
              let pretty = convertIt(rec.get('sessionTimeDateTime'));
              return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
          }
        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
          type: 'rest',
          url: './data/Ext/sessions.json',
          reader: {
            type: 'json',
            root: 'data'
          }
        },
        sorters: [
          { property: 'approved' },
          { property: 'title' }
        ],
        groupField: 'sessionTimeDateTime'
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
        },
        { 
          xtype: 'gridcolumn',
          dataIndex: 'sessionTimePretty',
          text: 'Session Start Time',
          width: 150
        }
      ],
      features: [
        {
          ftype: 'grouping',
          groupHeaderTpl: [
            '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})'
          ]
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