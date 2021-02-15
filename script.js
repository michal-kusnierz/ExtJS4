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
  ],
  proxy: {
    type: 'rest',
    url: '/api/session',
    reader: {
      type: 'json'
    }
  }
});

let mySession1 = Ext.create('SessionModel', {
  title: 'C',
  sessionLevel: 4,
  approved: true
});

mySession1.save({
  success: function(session) {
    console.log(session.getData());
  }
});

// debugger;
// if (!mySession1.isValid()) {
//   let errors = mySession1.validate();
//   errors.each(function(rec) {
//     console.log(rec);
//   });
// } else {
//   debugger;
// }

// let mySession2 = Ext.create('SessionModel', {
//   title: 'C#',
//   sessionLevel: 3
// });