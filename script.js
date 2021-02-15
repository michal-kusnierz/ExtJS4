Ext.define('SessionModel', {
  extend: 'Ext.data.Model',
  fields: ['id','title','sessionLevel','approved']
});

let mySession = Ext.create('SessionModel', {
  title: 'C++',
  sessionLevel: 2
});