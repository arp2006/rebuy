---

# ReDeal

A full-stack web application built with **React**, **Node.js**, **Express**, and **PostgreSQL**.
The app features **JWT-based authentication**, **protected routes**, and a **modern Tailwind-powered UI**.

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express
* PostgreSQL
* JWT Authentication
* bcrypt
* Cloudinary
* CORS

---

## Features

* User authentication (Register / Login / Logout)
* JWT-protected routes
* User profiles and settings
* Post creation, editing, and browsing
* Responsive UI with Tailwind CSS

---

## Known Issues

* CSS layout breaks in some sections
* Archived post details do not display correctly when clicked

---

## Future Improvements

* Production deployment
* Live chat implementation
* Split backend into routes/controllers/services
* Improved error handling
* UI consistency fixes

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── node_modules/
│   ├── temp/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── styles.css
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── logo.svg
│   │   │
│   │   ├── components/
│   │   │   ├── settings/
│   │   │   │   ├── AccountSettings.jsx
│   │   │   │   ├── AppearanceSettings.jsx
│   │   │   │   ├── SecuritySettings.jsx
│   │   │   │   ├── Settings.jsx
│   │   │   │   └── SettingsSidebar.jsx
│   │   │   │
│   │   │   ├── AccDropdown.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Item.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Account.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Create.jsx
│   │   │   ├── EditPost.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   ├── Success.jsx
│   │   │   └── Tos.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── AuthContext.jsx
│   │   ├── Layout.jsx
│   │   ├── main.jsx
│   │   └── requireAuth.jsx
│   │
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── queries.sql
```

---

## Notes

* Frontend and backend are fully separated
* Authentication state is handled using React Context
* Protected routes are enforced client-side and server-side
* `temp/` is used for temporary files and uploads

---

