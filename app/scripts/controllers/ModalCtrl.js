(function() {
    function ModalCtrl(Room, $uibModalInstance, $uibModal) {
        
        this.cancel = function (){
            $uibModalInstance.dismiss('cancel')
        };
        
       this.submitRoom = function(){
           
           if(this.newRoomName){
               Room.addRoom(this.newRoomName);
               this.cancel();
               
            
           }else{
               
              
               alert("Please type a name for the room.");
           }
           
       }
        
    }

    angular
        .module('chatterGator')
        .controller('ModalCtrl', ['Room', '$uibModalInstance' , '$uibModal', ModalCtrl]);
})();