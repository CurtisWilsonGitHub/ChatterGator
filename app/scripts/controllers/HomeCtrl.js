(function() {
    function HomeCtrl(Room, $uibModal) {
        
        this.rooms = Room.all;
        
        this.newRoomCreate = function(size){
            
            var modalInstance = $uibModal.open({
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