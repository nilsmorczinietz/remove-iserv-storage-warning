(function() {
    'use strict';
    RemoveStorageWarning()
    
    function RemoveStorageWarning(){
        var warning3 = document.getElementsByClassName('panel panel-dashboard panel-warning')[0];
        warning3.remove();
    }
})();
