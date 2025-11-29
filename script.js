document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('#typing-text');
    const texts = [
        "MADE BY Someone who can't even memories names", 
        "👁️‍🗨️you are being watched👁️‍🗨️", 
        "SSB3YW5uYQ==",
        "Silent But i always was tHere",
        "analyzes and watch",
        "S2lsbCBteXNlbGY=",
        "SBH",
        "🌐..🔨..💬..👁️..🔒"
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
        "CLICK ME.", 
        "...👁️...👁️‍🗨️...", 
        "S2lsbCBteXNlbGY="
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

const emojis = [
  "You are nothing",
  "No one will remember you",
  "Everything you try",
  "Silent But Here",
  "You are alone",
  "Ends in failure",
  "Life goes on without you"
];

// Container to prevent text from overflowing the body
const container = document.createElement('div');
Object.assign(container.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1 // emojis behind profile
});
document.body.appendChild(container);

// Keyframes
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
    container.appendChild(emoji);

    const emojiSize = Math.random() * 0.7 + 1;
    const duration = Math.random() * 3 + 2;

    // Apply temporary styles to measure text width
    Object.assign(emoji.style, {
        fontSize: `${emojiSize}rem`,
        position: "absolute",
        top: "-10vh",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none"
    });

    // Measure text width and limit start position
    const textWidth = emoji.offsetWidth;
    const maxX = window.innerWidth - textWidth;
    const startX = Math.random() * (maxX > 0 ? maxX : 0);

    // Apply final styles
    emoji.style.left = `${startX}px`;
    emoji.style.animation = `fall ${duration}s linear forwards`;

    // Remove after animation
    setTimeout(() => emoji.remove(), duration * 1000);
}

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




// fade in animation 





document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const profileContainer = document.querySelector(".profile-container");

    loadingScreen.addEventListener("click", () => {
        loadingScreen.classList.add("hidden");

        // Ensure the profile smoothly fades in without moving
        setTimeout(() => {
            profileContainer.classList.add("fade-in");
        }, 500); // Small delay for a natural transition
    });
});