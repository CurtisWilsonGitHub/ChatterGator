(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        
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
            console.log(room.$id);
            
        }
        
    }

    angular
        .module('chatterGator')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();