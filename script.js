Ext.define('SessionModel', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'title', type: 'string' },
    { name: 'sessionLevel', type: 'int' },
    { name: 'approved', type: 'bool', defaultValue: false }
  ]
});

let mySession1 = Ext.create('SessionModel', {
  title: 'C++',
  sessionLevel: 2
});
let mySession2 = Ext.create('SessionModel', {
  title: 'C#',
  sessionLevel: 3
});