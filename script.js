const output = document.getElementById("output");
const bar = document.getElementById("bar");

// Scan function
function scan() {
  let progress = 0;
  output.innerText = "স্ক্যান চলছে... 🧠";

  const interval = setInterval(() => {
    progress += Math.random() * 20;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      output.innerText = "Result: তুই-ই 😱";

      document.body.classList.add("shake");
      setTimeout(() => document.body.classList.remove("shake"), 300);

      spamPopups();
    }
  }, 300);
}

// Roast lines
const roasts = [
  "তোর স্পিড Internet Explorer থেকেও কম 😆",
  "তুই useless না, bad example হিসেবে ভালো 😜",
  "আলসেমি করলে gold পেতিস 😂",
  "তুই ঢুকলেই WiFi কমে যায় 📶",
  "Auto-correct-ও হাল ছেড়ে দেয় 🤣"
];

// Roast function
function roast() {
  const name = document.getElementById("name").value || "তুই";
  const r = roasts[Math.floor(Math.random() * roasts.length)];
  const line = name + ", " + r;

  output.innerText = line;
  speak(line);
  flashBg();
}

// Achievements
const achievements = [
  "Achievement: ৫ সেকেন্ড নষ্ট 😎",
  "Achievement: Button expert 😆",
  "Achievement: এখনো আছিস? 😐",
  "Achievement: Full useless 🤡"
];

function achievement() {
  const a = achievements[Math.floor(Math.random() * achievements.length)];
  output.innerText = a;
  confetti();
}

// Text-to-speech
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "bn-IN";
  speechSynthesis.speak(speech);
}

// Background flash
function flashBg() {
  const colors = ["#111", "#220000", "#002222", "#222200"];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

// Runaway button (mobile tap)
const btn = document.getElementById("runaway");
btn.addEventListener("click", () => {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.left = Math.random() * window.innerWidth + "px";
});

// Popups
function spamPopups() {
  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.className = "popup";
    div.innerText = "⚠ Brain not found 😂";
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 2500);
  }
}

// Confetti
function confetti() {
  for (let i = 0; i < 20; i++) {
    let div = document.createElement("div");
    div.style.position = "fixed";
    div.style.width = "5px";
    div.style.height = "5px";
    div.style.background = "#00ffcc";
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 1000);
  }
}

// Tap counter
let taps = 0;
document.body.addEventListener("click", () => {
  taps++;
  if (taps === 10) output.innerText = "অনেক চাপছিস 🤨";
  if (taps === 20) output.innerText = "কাজ নাই নাকি? 😂";
});
