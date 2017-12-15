(function() {
    function NewUserModalCtrl($cookies,$uibModalInstance, $uibModal) {
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel')
        };
        
        
        this.submitName = function(){
           
           if(this.newUserName){
              
               $cookies.put('ChatterGatorCurrentUser', this.newUserName);
               this.cancel();
               
            
           }else{
               
              
               alert("Please type a user name.");
           }
        }
            
        }
        
    

    angular
        .module('chatterGator')
        .controller('NewUserModalCtrl', [ '$cookies', '$uibModalInstance', '$uibModal', NewUserModalCtrl]);
})();