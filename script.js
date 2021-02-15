Ext.define('SessionModel', {
  extend: 'Ext.data.Model',
  fields: ['id','title','sessionLevel','approved']
});

let mySession1 = Ext.create('SessionModel', {
  title: 'C++',
  sessionLevel: 2
});
let mySession2 = Ext.create('SessionModel', {
  title: 'C#',
  sessionLevel: 3
});