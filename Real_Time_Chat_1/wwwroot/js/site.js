var connection = new signalR.HubConnectionBuilder().withUrl("/ChatHub").build();

connection.on("ReceiMessage", function (name, message) {
    var msg = name + ": " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
});
connection.start();
$("#btnSend").on("click", function () {
    var name = $("#txtUser").val();
    var message = $("#txtMsg").val();

    connection.invoke("SendMessage", name, message);
});