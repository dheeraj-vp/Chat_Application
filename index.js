document.getElementById('send').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    if (message !== '') {
        var chatBox = document.querySelector('.box');
        var messageElement = document.createElement('div');
        messageElement.classList.add("sent");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = ''; 
    }
});
$("#messageInput").keydown(function(event){
    if(event.key === 'Enter'){
        var messageInput = document.getElementById('messageInput');
        var message = messageInput.value.trim();
    
        if (message !== '') {
            var chatBox = document.querySelector('.box');
            var messageElement = document.createElement('div');
            messageElement.classList.add("sent");
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            messageInput.value = ''; 
        }
    }
})