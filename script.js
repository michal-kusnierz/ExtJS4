let sessionsPanel = Ext.create('Ext.Panel', {
  html: 'Sessions Panel'
}),
detailsPanel = Ext.create('Ext.Panel', {
  html: 'Details Panel'
}),
speakersPanel = Ext.create('Ext.Panel', {
  html: 'Speakers Panel'
});

Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      html: "Howdy!",
      items: [sessionsPanel,detailsPanel,speakersPanel]
    });
  }
});