document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log(`Remember me: ${rememberMe}`);
        
        // Here you can add the code to handle the login process, such as sending a request to your server
    });
});
