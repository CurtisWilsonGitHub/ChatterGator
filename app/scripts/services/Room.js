( function() {
    function Room($firebaseArray){
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
        
    Room.all = rooms;
        
        
        
    Room.addRoom = function(roomName){
        
        rooms.$add(roomName).then(function(ref) {
            var id = ref.key;
              console.log("added record for room:" + roomName + "with id " + id);
              rooms.$indexFor(id); // returns location in the array
        });
    }
    
    return Room;
}

angular
    .module('chatterGator')
    .factory('Room' , ['$firebaseArray', Room]);
})();