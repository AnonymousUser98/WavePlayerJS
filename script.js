let audioCtx;
let bufferSource;

var dark;
dark=0;

document.getElementById("playBtn").addEventListener("click", playWave);
document.getElementById("stopBtn").addEventListener("click", stopWave);

function playWave() {
	stopWave(); // Stop previous wave if any
	const formula = document.getElementById("formula").value;
	const vf = parseFloat(document.getElementById("vf").value);
	const va = parseFloat(document.getElementById("va").value);
	const vp = parseFloat(document.getElementById("vp").value);

	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	const sampleRate = audioCtx.sampleRate;
	const duration = 2; // seconds
	const buffer = audioCtx.createBuffer(1, sampleRate * duration, sampleRate);
	const data = buffer.getChannelData(0);

	for (let i = 0; i < data.length; i++) {
		const t = i / sampleRate;
		try {
			// eslint-disable-next-line no-eval
			let y = eval(formula);
			// Clamp y to [-1, 1] to prevent clipping
			if (y > 1) y = 1;
			if (y < -1) y = -1;
			data[i] = y;
		} catch (e) {
			data[i] = 0;
		}
	}

	bufferSource = audioCtx.createBufferSource();
	bufferSource.buffer = buffer;
	bufferSource.connect(audioCtx.destination);
	bufferSource.start();
}

function stopWave() {
	if (bufferSource) {
		bufferSource.stop();
		bufferSource.disconnect();
	}
}


// Code for preset menu - created by ChatGPT
const menuButton = document.getElementById("loadPresetBtn");
const popupMenu = document.getElementById("presetMenu");
const box = document.getElementById("formula");

// Show or hide the menu
menuButton.addEventListener("click", () => {
	popupMenu.style.display =
	popupMenu.style.display === "none" ? "block" : "none";
});

// When you click an option, write its value to the textbox
popupMenu.addEventListener("click", event => {
	const item = event.target.closest(".menu-item");
	if (!item) return;  // clicked outside an item
	box.value = item.dataset.value;
	popupMenu.style.display = "none";  // hide the menu again
});
// root.style.setProperty("--text", "#333");



// Theme Definitions
// Add new themes here
const themes = [
	{
		"id": "light",
		"name": "Default",
		"text": "#333",
		"bg-main": "#f0f0f0",
		"bg-btn": "#fcfcfc",
		"bg-menu": "#eee",
		"textbox": "white",
		"menu-border": "1px solid #aaa",
		"box-border": "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))",
		"btn-border-clr": "buttonborder",
		"btn-radius": "10px"
	},
	{
		"id": "dark",
		"name": "Dark Mode",
		"text": "#f0f0f0",
		"bg-main": "#232323",
		"bg-btn": "#323232",
		"bg-menu": "#454545",
		"textbox": "#323232",
		"menu-border": "1px solid #aaa",
		"box-border": "1px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133))",
		"btn-border-clr": "buttonborder",
		"btn-radius": "10px"
	},
	{
		"id": "blue",
		"name": "True Blue",
		"text": "#f0f0f0",
		"bg-main": "#055ae3",
		"bg-btn": "#4287f5",
		"bg-menu": "#356bc4",
		"textbox": "#4287f5",
		"menu-border": "1px solid #aaa",
		"box-border": "1px solid #127",
		"btn-border-clr": "#125",
		"btn-radius": "10px"
	}
];

// Code for changing themes (and theme menu) - created by ChatGPT
const root = document.documentElement;
const menu = document.getElementById("themeMenu");
const themeButton = document.getElementById("theme-button");

// build menu directly
menu.innerHTML = "";
themes.forEach(theme => {
	const item = document.createElement("div");
	item.className = "menu-item";
	item.dataset.value = theme.id;
	item.textContent = theme.name;
	menu.appendChild(item);
});

// theme applier
function applyTheme(id) {
	const theme = themes.find(t => t.id === id);
	if (!theme) return;

	for (const [key, value] of Object.entries(theme)) {
		if (key !== "id" && key !== "name") {
			root.style.setProperty(`--${key}`, value);
		}
	}
}

// toggle menu
themeButton.addEventListener("click", () => {
	menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// click to switch theme
menu.addEventListener("click", event => {
	const item = event.target.closest(".menu-item");
	if (!item) return;
	applyTheme(item.dataset.value);
	menu.style.display = "none";
});
