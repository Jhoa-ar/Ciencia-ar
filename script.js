document.getElementById('subscribe-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('subscribe-message').textContent = `¡Gracias, ${name}! Te hemos suscrito al boletín con el correo: ${email}.`;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});