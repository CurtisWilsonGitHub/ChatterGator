( function(){
   
    function Message($firebaseArray){
        var Message = {};
        
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref)
      
        
        Message.getRoomById = function(roomId){
            
            var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            return array;
            
        }
        
        return Message;
    }
    
    angular
        .module('chatterGator')
        .factory('Message',['$firebaseArray', Message]);
    
})();