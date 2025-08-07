# 🌿 My Plant Diary

A full-stack, mobile-responsive web application that helps plant lovers manage and monitor the care of their indoor and outdoor plants. From watering schedules to plant health, everything is trackable in one place!

🔗 **Live Website:** []

---

## 🌟 Key Features

- 🔐 **User Authentication**: Secure login and registration using email/password and Google login.
- 🌱 **Personal Dashboard**: Add, update, delete and view your own plants with full details.
- 📆 **Care Reminders**: Track watering frequency, care levels, and next watering dates with sorting functionality.
- 🎨 **Responsive UI**: Mobile, tablet, and desktop-friendly design with light/dark theme toggle.
- ⚡ **Smooth UX**: Styled toast/sweetalert feedback for all actions (no boring browser alerts!).

---

## 🌴 Project Theme

**Theme:** _Tropical Indoor Jungle_

A nature-inspired design that blends earthy greens and modern UI for a calm, user-friendly experience, tailored for tropical plant enthusiasts.

---

## 📁 Pages & Features

### 🔸 Navbar
- Home | All Plants | Add Plant | My Plants | Login/Register
- Conditional rendering based on login status (shows photoURL, displayName, and Logout)

### 🔸 Home Page
- Banner Slider with plant care tips (3 slides)
- New Plants section with dynamic cards from DB
- Two extra sections:
  - 🌿 Top Plant Care Mistakes
  - 🌼 Beginner-Friendly Plants

### 🔸 Add Plant (Private Route)
- Form fields: Image, Name, Category, Care Level, Watering Frequency, Last/Next Water Date, Health Status, User Info
- Dropdowns used for Category & Care Level
- Success toast on form submission

### 🔸 All Plants
- Displays all plants in a table with sorting (Next Watering Date / Care Level)
- “View Details” button for each entry

### 🔸 View Details (Private Route)
- Shows full plant details in a creative layout (e.g., card/profile-style view)

### 🔸 My Plants (Private Route)
- User-specific plant list
- Update and Delete buttons
- Confirmation modal on delete

### 🔸 Update Page
- Pre-filled form with editable fields
- Success toast upon update

### 🔸 Other Key Pages
- ✅ Custom 404 Page
- 🔄 Loading Spinner during fetch actions

---

## 💡 Additional Features

- 🌒 Dark/Light Theme Toggle
- 📅 Used `date-fns` for date formatting and calculations
- 🎞️ Lottie animations for empty states or loading visuals


---

## 🔐 Authentication

- Email/Password based login & register
- Google login supported
- Redirects user to the intended route after login
- Password must include uppercase, lowercase & minimum 6 characters

---

## 🚀 Tech Stack

- **Frontend:** React, TailwindCSS, DaisyUI, React Router DOM
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Auth
- **Packages Used:** `react-toastify`, `sweetalert2`, `react-tooltip`, `lottie-react`, `date-fns`, `axios`, `dotenv`

---

## 📦 Git Commit Guidelines

- ✅ 15+ Commits on the Client side (with meaningful messages)
- ✅ 8+ Commits on the Server side

---

## 📂 Environment Setup

Create a `.env` file in the root directory:

