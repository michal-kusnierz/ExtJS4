Ext.define('SE.model.Session', {
  extend: 'Ext.data.Model',
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
  proxy: {
    type: 'rest',
    url: './data/Ext/sessions.json',
    reader: {
      type: 'json',
      root: 'data'
    }
  },
});