# 📝 ThinkBoard — Note Taking App

A full-stack note-taking application built with **React**, **Express**, and **MongoDB**. Create, read, update, and delete notes with a clean, modern UI powered by DaisyUI and Tailwind CSS. Deployed on Render with Upstash Redis rate limiting.

🔗 **Live Demo:** [https://note-app-fuwn.onrender.com](https://note-app-fuwn.onrender.com)

---

## 📸 Screenshots

### Home Page
> Browse all your notes in a responsive card grid with a dark "sunset" theme. Each card shows the title, a content preview, the creation date, and quick edit/delete actions.

![Home Page](https://github.com/user-attachments/assets/home-page)

### Create Note
> A clean form to add a new note with a title and content. Includes input validation and a cooldown to prevent spam.

![Create Note](https://github.com/user-attachments/assets/create-note)

### Edit / Detail View
> Click any note to view its full content. Update the title or content and save, or delete the note entirely.

![Edit Note](https://github.com/user-attachments/assets/edit-note)

> 📌 *Visit the [live demo](https://note-app-fuwn.onrender.com) to see the full application in action.*

---

## ✨ Features

- **Create Notes** — Add new notes with a title and content
- **View Notes** — Browse all notes in a responsive card grid layout
- **Edit Notes** — Click any note to view and update its title or content
- **Delete Notes** — Remove notes from the home page or the detail view
- **Rate Limiting** — Powered by Upstash Redis to prevent API abuse
- **Responsive Design** — Works on desktop, tablet, and mobile devices
- **Toast Notifications** — User-friendly success and error messages
- **Dark Theme** — Uses the DaisyUI "sunset" theme for a sleek look

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library |
| [Vite 7](https://vite.dev/) | Build tool and dev server |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| [DaisyUI 5](https://daisyui.com/) | Tailwind CSS component library |
| [Axios](https://axios-http.com/) | HTTP client |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

### Backend
| Technology | Purpose |
|------------|---------|
| [Express 5](https://expressjs.com/) | Web framework |
| [Mongoose 9](https://mongoosejs.com/) | MongoDB ODM |
| [Upstash Redis](https://upstash.com/) | Rate limiting |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |
| [CORS](https://github.com/expressjs/cors) | Cross-origin resource sharing |

---

## 📁 Project Structure

```
noteapp/
├── package.json              # Root scripts (build & start)
├── frontend/                 # React frontend (Vite)
│   ├── index.html            # HTML entry point (sunset theme)
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx          # App entry — BrowserRouter & Toaster
│       ├── App.jsx           # Route definitions
│       ├── index.css          # Tailwind CSS & DaisyUI imports
│       ├── lib/
│       │   ├── axios.js      # Axios instance (dev/prod base URL)
│       │   └── utils.js      # Date formatting helper
│       ├── componets/
│       │   ├── NavBar.jsx    # Top navigation with "New Note" button
│       │   ├── NoteCard.jsx  # Note card with delete action
│       │   ├── NoteNotFound.jsx      # Empty state component
│       │   └── RateLimitedComponent.jsx  # Rate limit warning UI
│       └── pages/
│           ├── homePage.jsx  # Lists all notes in a grid
│           ├── createPage.jsx # Form to create a new note
│           └── noteDetail.jsx # View, edit, and delete a note
└── backend/                  # Express backend
    ├── package.json
    └── src/
        ├── server.js         # Express app setup & static file serving
        ├── config/
        │   ├── db.js         # MongoDB connection
        │   └── upstash.js    # Upstash Redis rate limiter config
        ├── controllers/
        │   └── notesController.js  # CRUD logic for notes
        ├── middleware/
        │   └── rateLimiter.js      # Rate limiting middleware
        ├── models/
        │   └── Note.js       # Mongoose Note schema (title, content)
        └── routes/
            └── nroutes.js    # API route definitions
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- A [MongoDB](https://www.mongodb.com/) database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- An [Upstash Redis](https://upstash.com/) account (for rate limiting)

### 1. Clone the Repository

```bash
git clone https://github.com/Chrizz-coder/noteapp.git
cd noteapp
```

### 2. Set Up Environment Variables

Create a `.env` file inside the `backend/` directory:

```bash
touch backend/.env
```

Add the following variables:

```env
MongoDB_URL=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

### 3. Install Dependencies

From the project root, install both frontend and backend dependencies:

```bash
npm run build
```

Or install them individually:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run the Application

#### Development Mode

Start the backend and frontend separately:

```bash
# Terminal 1 — Backend (from the backend/ directory)
cd backend
npm run dev

# Terminal 2 — Frontend (from the frontend/ directory)
cd frontend
npm run dev
```

- Frontend runs at: `http://localhost:5173`
- Backend runs at: `http://localhost:5001`

#### Production Mode

Build the frontend and start the server:

```bash
# From the project root
npm run build
npm start
```

The app will be served at `http://localhost:5001`.

---

## 📡 API Endpoints

All endpoints are prefixed with `/api/notes`.

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/api/notes`     | Get all notes        |
| GET    | `/api/notes/:id` | Get a note by ID     |
| POST   | `/api/notes`     | Create a new note    |
| PUT    | `/api/notes/:id` | Update a note by ID  |
| DELETE | `/api/notes/:id` | Delete a note by ID  |

### Example: Create a Note

```bash
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Note", "content": "Hello, ThinkBoard!"}'
```

---

## 🌐 Deployment

This app is deployed on [Render](https://render.com/).

- The root `package.json` contains `build` and `start` scripts used by Render
- In production, the Express server serves the built React frontend as static files
- CORS is only enabled in development mode

---

## 📄 License

This project is licensed under the ISC License.
