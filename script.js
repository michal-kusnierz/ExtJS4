var myComp1 = Ext.create('Ext.Component', {
  html: 'component1'
});
var myComp2 = Ext.create('Ext.Component', {
  html: 'component2'
});
var myComp3 = Ext.create('Ext.Component', {
  html: 'component3'
});

var myContainer = Ext.create('Ext.container.Container', {
  items: [myComp1, myComp2, myComp3],
  layout: 'vbox'
});

Ext.application({
  name: 'MyApp',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      items: [
        myContainer
      ]
    });
  }
});