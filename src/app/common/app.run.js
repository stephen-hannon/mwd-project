function init($rootScope, $uiRouter) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    var pluginInstance = $uiRouter.plugin(Visualizer);

    $rootScope.isEmpty = function (obj) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }
}

angular
    .module('common')
    .run(init);
