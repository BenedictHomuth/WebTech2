var onLoad = function () {
    //Magic values
    var ENTER_KEY = 13;
    var LINK_TO_SERVER = 'ws://194.94.2.20:8087/eliza';
    
    
    var terminal = document.getElementById("terminal");

    var connection = new WebSocket(LINK_TO_SERVER);

    connection.onopen = function () {
        document.getElementById("status").innerHTML = connection.readyState;
    };

    connection.onclose = function () {
        document.getElementById("status").innerHTML = connection.readyState;
    };

    connection.onmessage = function (msg) {
        document.getElementById("status").innerHTML = connection.readyState;
        if (msg.data) {
            terminal.innerHTML += "Server: " + msg.data + "\n";
            if (msg.data === "bye") {
                connection.close();
            }
        }
        terminal.scrollTop = terminal.scrollHeight;
        document.getElementById("status").innerHTML = connection.readyState;
        document.getElementById("activeConnections").innerHTML = connection.clientscount;
    };

    //Check for input (send message)
    document.getElementById("input").onkeydown = function (event) {
        if (event.keyCode === ENTER_KEY) {
            var msg = document.getElementById("input").value;
            if (msg) {
                connection.send(msg);
                document.getElementById("input").value = "";
                terminal.innerHTML += "You: " + msg + "\n";
                terminal.scrollTop = terminal.scrollHeight;
            }
        }
        document.getElementById("status").innerHTML = connection.readyState;
    }
}

//Start script
onLoad();

//LÖsung Tiere : Katze, Hunde, Pinguin, Pferd