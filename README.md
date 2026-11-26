<div align="center">
  <img src="assets/icon.png" width="140" alt="FREECLUELY Logo">

# FREECLUELY

**Free, source-available AI interview copilot & meeting assistant.**
<br/>
**Use your own API keys (Gemini, OpenAI, Claude, Groq, DeepSeek, OpenRouter) — or run 100% free & offline with Local Llama (Ollama) with no API key required.**

<br/>

[![License](https://img.shields.io/badge/License-Personal%20Use%20Source-10B981?style=flat-square)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20iOS%20%26%20Android-059669?style=flat-square)](https://github.com/Stanley03-arch/FREECLUELY/releases/latest)
[![Releases](https://img.shields.io/github/v/release/Stanley03-arch/FREECLUELY?style=flat-square&color=10B981)](https://github.com/Stanley03-arch/FREECLUELY/releases/latest)
[![Stars](https://img.shields.io/github/stars/Stanley03-arch/FREECLUELY?style=flat-square&color=gold)](https://github.com/Stanley03-arch/FREECLUELY)

---

## Download FREECLUELY for Free

<p align="center">
  <a href="https://github.com/Stanley03-arch/FREECLUELY/releases/latest/download/FREECLUELY-Setup-3.2.1.exe">
    <img src="assets/buttons/download-windows.svg" height="52" alt="Download for Windows" />
  </a>
  &nbsp;
  <a href="https://github.com/Stanley03-arch/FREECLUELY/releases/latest">
    <img src="assets/buttons/download-macos.svg" height="52" alt="Download for Mac" />
  </a>
  &nbsp;
  <a href="https://github.com/Stanley03-arch/FREECLUELY/releases/latest">
    <img src="assets/buttons/download-linux.svg" height="52" alt="Download for Linux" />
  </a>
</p>

<p align="center">
  <a href="#phone-mirror-ios--android">
    <img src="assets/buttons/download-ios.svg" height="48" alt="Use on iOS" />
  </a>
  &nbsp;
  <a href="#phone-mirror-ios--android">
    <img src="assets/buttons/download-android.svg" height="48" alt="Use on Android" />
  </a>
</p>

<p align="center">
  <a href="https://ollama.com/download">
    <img src="assets/buttons/download-ollama.svg" height="50" alt="Download Free Llama (Ollama)" />
  </a>
</p>

<small>Desktop installers: Windows 10/11 (`.exe`), macOS 12+ Apple Silicon & Intel (`.dmg` / `.zip`), Linux (`.AppImage` / `.deb`). Mobile: iOS & Android connect via built-in Phone Mirror.</small>

</div>

---

## Bring Your Own API Key — Or Use Free Local Llama

FREECLUELY never locks you into a paid subscription:

1. **Bring Your Own API Key (BYOK):**
   Open **Settings → AI Providers** and paste your key for **Google Gemini**, **OpenAI**, **Anthropic Claude**, **Groq**, **DeepSeek**, **OpenRouter**, **Nvidia NIM**, or any custom endpoint.
2. **No API Key? Use Free Local Llama (Ollama):**
   - Click **Download Free Llama** above (or inside **Settings → AI Providers**).
   - Pull a free Llama model:
     ```bash
     ollama pull llama3.2
     ```
   - Select `llama3.2 (Local)` in **Settings → AI Providers** — 100% free, unlimited, and completely offline.

---

## Key Features

- **Real-Time Meeting & Interview Assistance:** Listens to system audio and microphone with ultra-low latency and answers questions in real time.
- **On-Device Speech-to-Text:** Supports local Whisper / Moonshine / Parakeet ONNX models and Apple Speech — no cloud audio fees.
- **Stealth Mode:** Optional screen-share hiding, taskbar/dock hiding, and discreet overlay controls.
- **Visual Answers & Diagrams:** Generates system design diagrams, flowcharts, and code explanations directly in the overlay.
- **Local RAG & Memory:** Stores transcripts and notes locally on your device with SQLite vector search and PDF/DOCX/TXT reference file support.
- **9 Built-in Modes:** Technical Interview, General, Sales, Recruiting, Team Meet, Lecture, Seminar, Call Center, plus custom modes.

---

## Phone Mirror (iOS & Android)

FREECLUELY is a desktop application (Windows, macOS, Linux) with a built-in **Phone Mirror** web companion for mobile devices:
1. Open **Settings → Phone Mirror** in the desktop app.
2. Scan the QR code with your **iPhone (iOS Safari)** or **Android (Chrome)** device.
3. View live transcripts, streaming AI answers, and send photos straight back to your desktop — no App Store or Play Store install required.

---

## Build from Source

```bash
git clone https://github.com/Stanley03-arch/FREECLUELY.git
cd FREECLUELY
npm install
npm run app:dev
```
