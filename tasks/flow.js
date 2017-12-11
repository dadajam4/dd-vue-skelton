const config        = require('app-root-path').require('/config');
const DDTaskManager = config.path.require('lib/dd-task-manager');
const taskSettings  = config.path.require('config/task/task-settings');



const argv = require('minimist')(process.argv.slice(2));
const flow = argv.f;
if (!flow) throw new Error('flowが指定されていません。 -f [flow] で指定してください。');

const taskManager = new DDTaskManager(taskSettings, {
  rootDir: config.path('tasks'),
  watch  : argv.watch,
  notify : {flow: true, task: true},
});
taskManager.flow(flow);

