document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = [
        "MADE BY XAYLI802", 
        "🌐XAYLI ON TOP🌐", 
        "🔨HTML & CSS & JAVASCRIPT🔨", 
        "🌐FOLLOW ME ON GITHUB🌐", 
        "🗂️SOURCE CODE ON MY GITHUB",
        "🆓FREE & 100% CUSTOMIZABLE", 
        "🌐..🔨..💬..👁️..🔒", 
        "🎉FREE & BETTER🔨"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!textElement) return; // Prevent errors if element is missing
        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        setTimeout(typeText, isDeleting ? 100 : 150);
    }

    typeText();
});



// Hide loading screen on click & start video
const loadingScreen = document.querySelector(".loading-screen");
loadingScreen.addEventListener("click", () => {
    loadingScreen.classList.add("hidden");
}

// Auto-hide loading screen after 10s
setTimeout(() => {
    loadingScreen.classList.add("hidden");
}, 60000);





// Add event listeners for first interaction
document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("mousemove", startMusic);
document.addEventListener("touchstart", startMusic, { passive: true }); // Fix for mobile






// loading text animation 


document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.loading-text');
    const texts = [
        "CLICK ME👻", 
        "🌐MADE 100% BY XAYLI802🌐", 
        "HTML & CSS & JAVASCRIPT🔨", 
        "FOLLOW ME ON GITHUB🌐", 
        "CLICK ME👻", 
        "🌐..🔨..💬..👁️..🔒", 
        "FREE & BETTER 🔨"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!textElement) return; // Prevent errors if element is missing
        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        setTimeout(typeText, isDeleting ? 100 : 150);
    }

    typeText();
});







//emojis rain 


const emojis = ['❄️'];

// Create the keyframes animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(110vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(emoji);

    // Random size and position
    const emojiSize = Math.random() * 0.7 + 1;
    const maxX = window.innerWidth - emojiSize * 20; // Prevents off-screen spawning
    const startX = Math.random() * maxX;
    const duration = Math.random() * 3 + 2; // 2s - 5s fall duration

    // Apply styles directly
    Object.assign(emoji.style, {
        position: "absolute",
        top: "-10vh",
        left: `${startX}px`,
        fontSize: `${emojiSize}rem`,
        pointerEvents: "none",
        userSelect: "none",
        animation: `fall ${duration}s linear forwards`
    });

    // Remove emoji after animation
    setTimeout(() => {
        emoji.remove();
    }, duration * 1000);
}

// Start the effect
setInterval(createEmoji, 150);