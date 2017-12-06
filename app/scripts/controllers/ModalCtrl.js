(function() {
    function ModalCtrl(Room, $uibModalInstance, $uibModal) {
        
        this.cancel = function (){
            $uibModalInstance.dismiss('cancel')
        };
        
       this.submitRoom = function(){
           console.log("step 1 works");
           
           if(this.newRoomName){
               Room.addRoom(this.newRoomName);
               this.cancel();
               
               console.log("step 2 works");
               
           }else{
               
               console.log("step 3 works");
               alert("Please type a name for the room.");
           }
           
       }
        
    }

    angular
        .module('chatterGator')
        .controller('ModalCtrl', ['Room', '$uibModalInstance' , '$uibModal', ModalCtrl]);
})();