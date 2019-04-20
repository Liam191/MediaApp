"use strict";
angular.module('mediaApp.component.appMenuBar', [
    'mediaApp.service.ipcRenderer'
])
.component('appMenuBar', {
    template:
    `<div class="menu">
        <p class="app-name">{{ $ctrl.appName }}</p>
        <div class="menu-buttons">
            <button class="menu-button" type="button" ng-click="$ctrl.min();">
                <span class="glyphicon glyphicon glyphicon-minus" aria-hidden="true"></span>
            </button>
            <button class="menu-button" type="button" ng-click="$ctrl.max();">
                <span class="glyphicon glyphicon glyphicon-unchecked" aria-hidden="true"></span>
            </button>
            <button class="menu-button menu-button-close" type="button" ng-click="$ctrl.close();">
                <span class="glyphicon glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
        </div>
    </div>`,
    controller: [
        'ipcRenderer',
        function(ipcRenderer){
            const appName = 'Anime App';

            return {
                appName: appName,
                min: min,
                max: max,
                close: close
            };
    
            function min(){
                console.log('min()');
                ipcRenderer.send('windowControls-min');
            }
    
            function max(){
                console.log('max()');
                ipcRenderer.send('windowControls-max');
            }
    
            function close(){
                console.log('close()');
                ipcRenderer.send('windowControls-quit');
            }
        }
    ]
});