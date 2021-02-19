Ext.define('SE.controller.SessionController', {
  extend: 'Ext.app.Controller',

  stores: [
    'Sessions', 'Presenters', 'SessionPresenters'
  ],

  refs: [
    {
      ref: 'details',
      selector: 'detailspanel'      // alias of component
    }
  ],

  onItemdblclick: function(gridpanel,record,item,e) {
    let formWindow = Ext.create('SE.view.SessionForm');
    let form = formWindow.down('form');
    form.loadRecord(record);
    formWindow.show();
  },
  
  init: function() {
    this.control({
      'sessiongridpanel': {
        itemdblclick: this.onItemdblclick,

        select: function(rowmodel, record, index, eOpts) {

          Ext.suspendLayouts();

          let sessionId = record.get('id');
          let presenterIds = [];
          let spStore = this.getSessionPresentersStore();
          spStore.each(function (rec) {
            if (rec.get('sessionId') === sessionId) {
              presenterIds.push(rec.get('presenterId'));
            }
          });
          this.getPresentersStore().clearFilter();
          this.getPresentersStore().filterBy(function(rec) {
            let foundMatch = false;
            for (let i = 0; i < presenterIds.length; i++) {
              if (rec.get('id') === presenterIds[i]) {
                foundMatch = true;
              }
            }
            return foundMatch;
          });

          // Fill in details on right side (Panel) for session:
          let detailsPanel= this.getDetails();  // 'details' comes from refs []

          Ext.resumeLayouts();
        }
      }
    });
  }
});