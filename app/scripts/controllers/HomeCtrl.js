(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        
        this.rooms = Room.all;
        this.currentRoom = '';
        
        $uibModal.animationsEnabled = true; 
        
        
        this.newRoomCreate = function(size){
            
            var modalInstance = $uibModal.open({
                animation: $uibModal.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: size,
            });
            
        };
        
        this.setCurrentRoom = function(room){
            this.messages = Message.getRoomById(room.$id);
            this.currentRoom = room.$id;
            console.log(room.$id);
            
        }
        
        this.sendMessage = function (){
            
            var time = "1:00";
            console.log(this.message + "1");
            Message.send(this.message, this.currentRoom,time, $cookies.get('ChatterGatorCurrentUser'));
        }
        
    }

    angular
        .module('chatterGator')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();