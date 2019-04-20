"use strict";
angular.module('mediaApp.service.ipcRenderer', [])
.factory('ipcRenderer', [
    '$window',
    function($window){
        let ipcRenderer;
        try{
            ipcRenderer = $window.require('electron').ipcRenderer;

        } catch(error){
            throw('ipcRenderer: Could not load Electron!');
        }

        return ipcRenderer;
    }
]);