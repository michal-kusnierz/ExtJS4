Ext.define('SE.view.Sessions', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.sessiongridpanel',
  listeners: {
    itemdblclick: function(gridpanel,record,item,e) {
      let formWindow = Ext.create('SessionForm');

      let form = formWindow.down('form');
      form.loadRecord(record);

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