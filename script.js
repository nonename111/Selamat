// script.js
document.getElementById("changeMessageBtn").addEventListener("click", function() {
    const messages = [
        "Semoga sukses selalu!",
        "Tetap semangat hari ini!",
        "Kamu bisa melakukan hal luar biasa!",
        "Nikmati setiap momen!",
        "Selamat! Kamu hebat!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
});
// script.js
document.getElementById("changeMessageBtn").addEventListener("click", function() {
    const messages = [
        "Semoga sukses selalu!",
        "Tetap semangat hari ini!",
        "Kamu bisa melakukan hal luar biasa!",
        "Nikmati setiap momen!",
        "Selamat! Kamu hebat!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
});
