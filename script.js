let updateConsole = function () {
  console.log(Ext.Date.format(new Date(), 'g:i:s A'));
};

let runner = new Ext.util.TaskRunner(),
  task = runner.start({
    run: updateConsole,
    interval: 1000
  });