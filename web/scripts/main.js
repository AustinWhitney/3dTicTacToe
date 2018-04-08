
$( document ).ready(function(){

  var socket = io.connect();

  socket.on('connect',function(){
    console.log('connected');
    socket.emit('firstConnect');
  });
  socket.on('login',function(data){
    updateUserList(data);
    if(data.playerNum ===1 || data.playerNum===2){
      console.log('you are a player');
    }
    else{
      console.log('you are a spectator');
    }
  });

  socket.on('userUpdate',function(users){

    updateUserList(users);
  });
  socket.on('userLeave',function(data){
    updateUserList(data);
    console.log(`${data.leaved} has left`);
  });
});



function updateUserList(data){
  $("#userList").empty();
  data.users.forEach(function(data){

    $("#userList").append(`<li>${data}</li>`);
  });
}
