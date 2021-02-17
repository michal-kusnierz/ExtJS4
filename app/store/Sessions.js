Ext.define('SE.store.Sessions', {
  extend: 'Ext.data.Store',
  fields: 
    [
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
});