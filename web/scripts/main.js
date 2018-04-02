

var socket = io();
socket.on('connect',function(){
  console.log('connected');

});


socket.on('userUpdate',function(users){
  updateUserList(users);
});

function updateUserList(users){
  $("#userList").empty();
  users.forEach(function(data){

    $("#userList").append(`<li>${data.user}</li>`);
  });
}       });
