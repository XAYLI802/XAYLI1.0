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

// =======================================
// LOADING SCREEN LOGIC
// =======================================

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const loadingText = document.querySelector(".loading-text");
    const video = document.getElementById("bg-video");

    // Ensure loading screen starts visible
    loadingScreen.classList.remove("hidden");

    // Typing animation for loading text
    const loadingMessages = [
        "CLICK ME👻", 
        "MADE 100% BY XAYLI802🌐", 
        "HTML & CSS & JAVASCRIPT🔨", 
        "FOLLOW ME ON GITHUB🌐", 
        "FREE & BETTER 🔨"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoadingText() {
        if (!loadingText) return;
        let currentText = loadingMessages[index];
        loadingText.innerHTML = currentText.substring(0, charIndex) + "<span>|</span>";

        if (!isDeleting) {
            charIndex++;
            if (charIndex > currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % loadingMessages.length;
            }
        }
        setTimeout(typeLoadingText, isDeleting ? 100 : 150);
    }

    typeLoadingText(); // Start typing effect

    // Hide loading screen & play video on click
    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");
        video.style.display = "block"; // Show video
        video.play(); // Start playing
    });
});

// =======================================
// EMOJI RAIN EFFECT
// =======================================

const emojis = ['❄️'];

// Create the keyframes animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(110vh);
            opacity: 0.3;
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

// =======================================
// VIDEO MUTE BUTTON
// =======================================

const video = document.getElementById("bg-video");
const muteBtn = document.getElementById("mute-btn");
const muteImg = muteBtn.querySelector("img");
const soundOnImg = "https://i.imgur.com/eBgCXhT.png"; // Unmuted image
const soundOffImg = "https://i.imgur.com/c1okSDi.png"; // Muted image

// Set the correct image when the page loads
window.addEventListener("DOMContentLoaded", () => {
    muteImg.src = video.muted ? soundOffImg : soundOnImg;
});

muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteImg.src = video.muted ? soundOffImg : soundOnImg;
});