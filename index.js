document.getElementById('send').addEventListener('click', sendMessage);
$("#messageInput").keydown(function(event) {
    if(event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    if (message !== '') {
        var chatBox = document.querySelector('.box');
        
        var messageElement = document.createElement('div');
        messageElement.classList.add("sent");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = '';

        $.ajax({
            url: 'http://localhost:3000/message',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ message: message }),
            success: function(response) {
                var replyElement = document.createElement('div');
                replyElement.classList.add("received");
                replyElement.textContent = response.reply;
                chatBox.appendChild(replyElement);
                chatBox.scrollTop = chatBox.scrollHeight; 
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }
    setTimeout(function() {
        var replyElement = document.createElement('div');
        replyElement.classList.add("received");
        replyElement.textContent = "We have received your message!!";
        chatBox.appendChild(replyElement);
        chatBox.scrollTop = chatBox.scrollHeight; 
    }, 1000);
}
