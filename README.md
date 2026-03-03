# ⏳ Chronos Pomodoro

A modern Pomodoro timer built with **React 19** to explore state management patterns, side effects, Context API, and Web Workers — wrapped in a clean and focused UI.

---

## 🌐 Live Demo

**Production URL:**  
👉 https://chronos-pomodoro-wine-tau.vercel.app/

---

## 📌 About the Project

**Chronos Pomodoro** is a productivity-focused web application inspired by the Pomodoro Technique.

The application allows users to:

- Create a task with a custom name
- Configure timer durations:
  - Work time
  - Short break
  - Long break
- Automatically cycle between work and break sessions
- Track completed sessions
- View session history of previous cycles

This project was built with the main goal of studying and applying **modern React 19 patterns and architectural decisions**, rather than simply creating a timer.

---

## 🧠 Features

- ⏱ Customizable Pomodoro cycles  
- 📝 Task-based session tracking  
- 🔁 Automatic work/break flow  
- 📊 Session history page  
- 🧵 Timer powered by Web Workers (background execution)  
- 🎯 Clean and minimal UI  
- 🚀 Deployed on Vercel  

---

## 🏗 Tech Stack

- **Vite** — Fast development environment and bundler  
- **React 19** — Latest React features and hooks  
- **CSS (Vanilla)** — Custom styling without UI libraries  
- **Web Workers (JavaScript)** — Timer logic executed off the main thread  
- **Vercel** — Deployment and hosting  

---

## 🎯 Learning Goals

This project was created to deeply explore:

### State Management
- `useState` for local component state  
- `useReducer` with `dispatch` pattern for predictable state transitions  

### Side Effects
- `useEffect` for lifecycle control  
- Proper cleanup for worker communication  

### Global State
- `Context API` for shared timer and session state  
- Avoiding prop drilling  

### Architecture & Performance
- Separation between UI and timer logic  
- Web Worker integration for non-blocking timers  
- Reducer-based state transitions  
- Modular component structure  

---

## 🏛 Architecture Overview

```bash
src/
 ├── adapter/ -> Guarantee security using external libs
 ├── components/
 ├── contexts/
 ├── models/
 ├── routers/ -> Guarantee security using external libs
 ├── workers/
 ├── pages/
 ├── templates/
 ├── styles/
 ├── utils/
 └── main.tsx
```

### Architectural Decisions

- Timer logic runs inside a Web Worker to prevent UI blocking.
- A reducer pattern ensures predictable state transitions.
- Context API centralizes global state.
- History is currently stored in localStorage

---

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/your-username/chronos-pomodoro.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---


## 👨‍💻 Author

**Thiago Fontanella**  
Senior Front-End Developer  

- Focused on scalable React architectures  
- Performance-oriented mindset  
- Experience with React, TypeScript, and modern front-end ecosystems  

---

## 📄 License

This project was created for study and portfolio purposes.
