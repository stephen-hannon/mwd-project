function init($uiRouter) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plutin(Visualizer);
}

angular
    .module('common')
    .run(init);
