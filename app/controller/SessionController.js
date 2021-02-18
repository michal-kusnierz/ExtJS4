Ext.define('SE.controller.SessionController', {
  extend: 'Ext.app.Controller',
  init: function() {
    this.control({
      'sessiongridpanel': {
        itemdblclick: function(gridpanel,record,item,e) {
          let formWindow = Ext.create('SE.view.SessionForm');
          let form = formWindow.down('form');
          form.loadRecord(record);
          formWindow.show();
        }
      }
    });
  }
});