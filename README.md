# PostGram

PostGram is a sleek React + Vite social media dashboard designed as a high-performance single-page application. It enables users to create, edit, and manage posts with a focus on clean UI/UX. The platform features modal-driven interactions and persistent data storage using the browser's `localStorage`.

**Live Demo:** [https://posting-plateform.vercel.app](https://posting-plateform.vercel.app)  
**Repository:** [https://github.com/S-lakhera/Posting-plateform](https://github.com/S-lakhera/Posting-plateform)

## Overview

The app initializes with a curated list of feed items to provide an immediate "populated" feel. From there, users can:

- **Create & Share:** Post content with author name, designation, location, and images.
- **Edit & Refine:** Modify existing posts using a polymorphic modal system.
- **Interactive Feed:** Engagement features including a "Like" toggle.
- **Smart Navigation:** A responsive Navbar that intelligently hides/shows based on scroll direction.
- **Persistence:** Full state synchronization with `localStorage` to prevent data loss on refresh.

## Features

### Post Management
- **Unified Form:** Uses a single modal component for both creating and updating posts.
- **Safe Deletion:** Includes a browser-native confirmation check before permanent removal.
- **ID Generation:** Uses `nanoid` to ensure every post has a unique, collision-resistant identifier.

### UI & UX
- **Glassmorphism:** Modern backdrop blurs for modals using Tailwind's `backdrop-blur`.
- **Chronological Sorting:** Newest posts are automatically prepended to the top of the feed.
- **Animated Navbar:** Smooth translate transitions based on user scroll behavior to maximize screen real estate.

### Form Validation
- Powered by `react-hook-form` for zero-re-render performance.
- Required field checks for Name and Caption.
- Customizable error messaging (e.g., "Name is Bahut Jaruri").

## Tech Stack
- **React 19** (Functional Components & Hooks)
- **Vite** (Build Tool)
- **Tailwind CSS** (Utility-first styling)
- **React Hook Form** (Form state management)
- **NanoID** (Unique key generation)
- **Remix Icon** (Iconography)

## Project Structure

```text
src/
  ├── assets/          # Static assets (favicons, user placeholders)
  ├── components/      # Reusable UI Components
  │   ├── Navbar.jsx   # Scroll-aware navigation
  │   ├── Post.jsx     # Individual post card logic
  │   └── AddPost.jsx  # Polymorphic modal for CRUD
  ├── data/            
  │   └── data.js      # Seed data and initial state
  ├── App.jsx          # Root orchestration & LocalStorage logic
  ├── index.css        # Tailwind directives
  └── main.jsx         # React entry point
```

## How the App Works
# App.jsx
The central hub of the application. It handles:

Initialization: Pulling data from localStorage or falling back to data.js.

State Logic: Managing the list of posts and the "Editing" state.

CRUD Handlers: Functions passed down as props to handle adding, deleting, and updating data.

# AddPost.jsx
A polymorphic component that switches its behavior based on whether an editingPost prop is present. It uses the reset method from react-hook-form to sync data when switching between "Create" and "Edit" modes.

# Persistence Logic
The app uses a useEffect hook that listens for changes in the postArr state. Whenever a post is added, edited, or deleted, the hook automatically stringifies the array and saves it to the browser's localStorage.

## Getting Started

# Prerequisites
Node.js 18+

npm or yarn



# Installation
1. Clone the repo: 
```bash 
git clone https://github.com/S-lakhera/Posting-plateform.git
```

2. Install dependencies: `npm install`

3. Run dev server: `npm run dev`

# Available Scripts
`npm run dev`: Starts the Vite development server.

`npm run build`: Bundles the app for production (output in /dist).

`npm run preview`: Locally previews the production build.

## Data Model
Each post is stored as an object:

```js
{
  id: "unique-nanoid",
  name: "User Name",
  role: "Designation",
  location: "City, State",
  caption: "The post content string",
  image: "URL link to post image"
} 

```

# Future Improvements
Search & Filter: Implement a search bar to filter posts by name or role.

Image Upload: Integrate Cloudinary or Firebase for actual image file uploads.

Timestamps: Add "Time ago" logic for each post.

Toast Notifications: Add visual feedback for successful post updates/deletions.

# License
This project is for educational purposes and is not currently under an open-source license.