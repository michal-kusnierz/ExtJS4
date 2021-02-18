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
      minWidth: 150
    },
    { 
      xtype: 'checkcolumn',
      dataIndex: 'approved',
      text: 'Approved'
    },
    { 
      xtype: 'gridcolumn',
      dataIndex: 'sessionTimePretty',
      text: 'Session Time',
      width: 200
    }
  ],
  features: [
    {
      ftype: 'grouping',
      startCollapsed: false,
      groupHeaderTpl: [
        '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})'
      ]
    }
  ]
});