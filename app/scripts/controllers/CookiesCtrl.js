(function(){
    function CookiesCtrl($cookies,$uibModal){
        var currentUser = $cookies.get('ChatterGatorCurrentUser')
        if (!currentUser || currentUser === ''){
            
            $uibModal.open({
                
                animation: $uibModal.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
            
            })
                
            }
            
        }
    
    
    angular
        .module('chatterGator')
        .run(['$cookies', '$uibModal', CookiesCtrl]);
})();