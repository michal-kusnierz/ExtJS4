let sessionsPanel = Ext.create('Ext.Panel', {
  html: 'Sessions Panel',
  region: 'west',
  flex: 2
}),
detailsPanel = Ext.create('Ext.Panel', {
  html: 'Details Panel',
  region: 'center',
  flex: 3
}),
speakersPanel = Ext.create('Ext.Panel', {
  html: 'Speakers Panel',
  region: 'south',
  flex: 1
});

Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      html: "Howdy!",
      layout: 'border',
      items: [sessionsPanel,detailsPanel,speakersPanel]
    });
  }
});