// JavaScript for Chatbot Functionality
document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const responseElement = document.getElementById('chat-response');
    
    if (userInput.trim() !== "") {
        // Simulated AI response
        const responses = [
            "Interesting question! Let's explore more about that.",
            "$MARYAI is built on Solana to redefine decentralization!",
            "I'm here to assist you. What else would you like to know?",
            "Crypto is the future, and $MARYAI is leading the way!"
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        
        responseElement.innerHTML = `<p>AI: ${responses[randomIndex]}</p>`;

        // Making the glow react when responding
        const logoGlow = document.querySelector('.logo-glow');
        logoGlow.classList.add('active-glow');
        setTimeout(() => logoGlow.classList.remove('active-glow'), 1000);
    }
});
