(function(){
    function CookiesCtrl($cookies,$uibModal){
        var currentUser = ''; $cookies.get('ChatterGatorCurrentUser')
        if (!currentUser || currentUser === ''){
            
            $uibModal.open({
                
                animation: $uibModal.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/userNameModal.html',
                controller: 'NewUserModalCtrl',
                controllerAs: 'newusermodal',
            
            })
        }
                
    }
        
       
    
    
    angular
        .module('chatterGator')
        .run(['$cookies', '$uibModal', CookiesCtrl]);
})();