(function() {
    function ModalCtrl(Room, $uibModalInstance, $uibModal ) {
        
        this.cancel = function (){
            $uibModalInstance.dismiss('cancel');
        };
        
        
    }

    angular
        .module('chatterGator')
        .controller('ModalCtrl', ['Room', '$uibModalInstance' , '$uibModal', ModalCtrl]);
})();