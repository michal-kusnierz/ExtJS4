Ext.define('SessionModel', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'title', type: 'string' },
    { name: 'sessionLevel', type: 'int' },
    { name: 'approved', type: 'bool', defaultValue: false }
  ],
  validations: [
    { type: 'length', field: 'title', min: 3 },
    { type: 'inclusion', field: 'sessionLevel', list: [1,2,3] }
  ]
});

let mySession1 = Ext.create('SessionModel', {
  title: 'C++',
  sessionLevel: 2
});

if (!mySession1.isValid()) {
  let errors = mySession1.validate();
  errors.for(function(rec) {
    console.log(rec);
  });
}

let mySession2 = Ext.create('SessionModel', {
  title: 'C#',
  sessionLevel: 3
});