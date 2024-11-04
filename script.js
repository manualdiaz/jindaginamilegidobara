document.getElementById('surpriseButton').addEventListener('click', function() {
    const message = "You are all amazing! 🌟";
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.textContent = message;
    surpriseMessage.classList.remove('hidden');
});
