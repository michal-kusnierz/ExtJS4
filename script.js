let sessionsPanel = Ext.create('Ext.Panel', {
  html: 'Sessions Panel',
  flex: 2
}),
detailsPanel = Ext.create('Ext.Panel', {
  html: 'Details Panel',
  flex: 3
}),
speakersPanel = Ext.create('Ext.Panel', {
  html: 'Speakers Panel',
  flex: 1
}),
combinedSessionSpeaker = Ext.create('Ext.Panel', {
  layout: {
    type: 'vbox'
  },
  items: [sessionsPanel,speakersPanel]
});

Ext.application({
  name: 'App',
  launch: function() {
    Ext.create('Ext.container.Viewport', {
      html: "Howdy!",
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [combinedSessionSpeaker,detailsPanel]
    });
  }
});