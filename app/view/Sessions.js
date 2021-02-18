Ext.define('SE.view.Sessions', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.sessiongridpanel',
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