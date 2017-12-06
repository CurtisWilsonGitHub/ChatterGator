(function() {
    function HomeCtrl(Room, $uibModal) {
        
        this.rooms = Room.all;
        
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
        
    }

    angular
        .module('chatterGator')
        .controller('HomeCtrl', ['Room', '$uibModal' , HomeCtrl]);
})();