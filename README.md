# Squad Goals

A full-stack web app to build your dream cricket team from the world's best players.

## Features

- Select 11 players from a curated list of international stars
- View detailed stats for each player (matches, runs, wickets, etc.)
- Customize your team name, slogan, and logo
- Beautiful, responsive UI with modern design
- Built with React (frontend) and Python FastAPI (backend)
- MongoDB for backend data storage

## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.8+
- MongoDB (local or remote)

### Setup

1. **Clone the repo:**
   ```
   git clone https://github.com/Vasanthadithya-mundrathi/DREAMTEAM-COSC.git
   cd squad-goals
   ```

2. **Backend:**
   ```
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   # Set up .env with your MongoDB connection
   python3 server.py
   ```

3. **Frontend:**
   ```
   cd ../frontend
   npm install
   npm start
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
squad-goals/
  backend/
    server.py
    requirements.txt
    .env
  frontend/
    src/
    public/
    package.json
  .gitignore
  README.md
```

## Customization

- To update player stats, edit `frontend/src/App.js` and replace the player objects with real stats.
- To connect to a remote MongoDB, update `backend/.env`.

## License

MIT

---
