Ext.define('SE.view.Sessions', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.sessiongridpanel',
  listeners: {
    itemdblclick: function(gridpanel,record,item,e) {
      let formWindow = Ext.create('SE.view.SessionForm');

      let form = formWindow.down('form');
      form.loadRecord(record);

      formWindow.show();
    }
  },
  store: 'Sessions',
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