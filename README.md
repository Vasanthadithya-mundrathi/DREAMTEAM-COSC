# Squad Goals

A React web app to build your dream cricket team from the world's best players.

## Features

- Select 11 players from a curated list of international stars
- View detailed stats for each player (matches, runs, wickets, etc.)
- Customize your team name, slogan, and logo
- Beautiful, responsive UI with modern design
- 100% frontend-only, no backend or database required

## Getting Started

### Prerequisites

- Node.js & npm

### Setup

1. **Clone the repo:**
   ```
   git clone https://github.com/Vasanthadithya-mundrathi/DREAMTEAM-COSC.git
   cd squad-goals
   ```

2. **Frontend:**
   ```
   cd frontend
   npm install
   npm start
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

### Deploying to Render.com or similar

If your project root contains the `frontend` folder, set these in your Render.com (or similar) dashboard:

- **Build command:**  
  ```
  cd frontend && npm install && npm run build
  ```
- **Start command:**  
  ```
  cd frontend && npx serve -s build -l $PORT
  ```

Make sure your project root is the main repo folder, not `frontend/`.

## Project Structure

```
squad-goals/
  frontend/
    src/
    public/
    package.json
  README.md
```

## Customization

- To update player stats, edit `frontend/src/App.js` and replace the player objects with real stats.

## License

MIT

---
