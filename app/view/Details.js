Ext.define('SE.view.Details', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.detailspanel',

  autoScroll: true,
  bodyPadding: 10,

  tpl: [
    '<br>Title: {title}',
    '<br>Description: {description}',
    '<br>',
    '<tpl for="presenters">',   // this tpl functionality iterates over an attribute 
    ' <br>Presenter: {firstName} {lastName}',
    ' <br><img class="leaderPhoto" src="http://www.siliconvalley-codecamp.com/{imageUrl}?width=150">',
    '</tpl>'
  ]

});