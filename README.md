# Fitness Quest Frontend

A **Next.js** frontend for the Fitness Quest app. This app connects to a Node.js/Express backend powered by **Prisma** and PostgreSQL, allowing users to register, log in, and follow structured workout programs.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Available Scripts](#available-scripts)
* [Folder Structure](#folder-structure)
* [API Integration](#api-integration)
* [License](#license)

---

## Features

* User registration and login with JWT authentication
* Connects to a Node.js/Express backend API
* Fetches workout programs and user progress
* Fully responsive and mobile-friendly interface

---

## Tech Stack

* [Next.js](https://nextjs.org/) – React framework for server-side rendering and static sites
* [TypeScript](https://www.typescriptlang.org/) – Static type checking
* [Tailwind CSS](https://tailwindcss.com/) or [Bootstrap](https://getbootstrap.com/) – UI styling
* Fetch API or Axios – For API requests
* JWT authentication – Secure login
* ESLint & Prettier – Code formatting and linting

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fitness-quest-frontend.git
cd fitness-quest-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

* `NEXT_PUBLIC_API_URL` should point to your backend API.

### 4. Run the development server

```bash
npm run dev
```

The frontend should now be running on [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

* `npm run dev` – Runs the app in development mode
* `npm run build` – Builds the app for production
* `npm start` – Starts the production server
* `npm run lint` – Runs ESLint to check code quality
* `npm run format` – Formats code with Prettier

---

## Folder Structure

```
.
├── public/          # Static files (images, fonts, icons)
├── src/
│   ├── app/         # Next.js app directory (pages or app router)
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom React hooks
│   ├── utils/       # API calls, helper functions
│   └── styles/      # Global CSS / Tailwind configs
├── .env.local       # Environment variables
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## API Integration

* All API calls are made to the Node.js/Express backend.
* Authentication uses **JWT tokens**, which should be stored in `localStorage` or `cookies`.
* Example usage:

```ts
import { loginUser } from '../utils/api';

const response = await loginUser(email, password);
console.log(response.token);
```

---

## License

MIT License © 2025 Fitness Quest

---
