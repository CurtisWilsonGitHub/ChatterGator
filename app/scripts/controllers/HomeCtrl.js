(function() {
    function HomeCtrl(Room) {
        
        this.rooms = Room.all;
        
    }

    angular
        .module('chatterGator')
        .controller('HomeCtrl', ['Room' , HomeCtrl]);
})();