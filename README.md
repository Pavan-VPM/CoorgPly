# CoorgPly - Premium Plywood, Veneers & Laminates

CoorgPly is a modern, responsive web application showcase for CoorgPly, a premier manufacturer and provider of high-quality plywood, veneers, block boards, and flush doors. The application is built using React, Vite, Tailwind CSS, and React Router.

---

## 🚀 Features

- **Dynamic Homepage**: Hero showcases, feature collections, and manufacturing overviews with sleek glassmorphism designs and interactive animations.
- **Detailed Product Catalog**: Categorized list of premium plywood (BWP Marine, BWR Grade, Calibrated, MR Grade), block boards, flush doors, and veneers.
- **Product Detail Pages**: Dynamic routing to view specifications, features, and target applications of individual products.
- **Manufacturing Process**: Step-by-step interactive walkthrough of the production pipeline, from timber selection to final quality grading.
- **Brand Story**: Heritage, founder's message, and core values page.
- **Interactive Contact & WhatsApp Integration**: Integrated contact form and floating WhatsApp quick-chat support button.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: Custom SVG icons designed with hover micro-animations

---

## 📂 Project Structure

```text
CoorgPly/
├── public/                 # Static assets (images, logos, textures)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx      # Navigation header with responsive mobile drawer
│   │   ├── Footer.jsx      # Multi-column page footer
│   │   └── WhatsAppButton.jsx # Floating chat trigger
│   ├── data/
│   │   └── plywoodProducts.js # Centralized product specification store
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Products.jsx    # Complete product listings
│   │   ├── ProductDetail.jsx # Product detail specifications
│   │   ├── Manufacturing.jsx # Interactive manufacturing walkthrough
│   │   ├── Story.jsx       # Brand story & core values
│   │   └── Contact.jsx     # Contact form page
│   ├── App.jsx             # React router configuration & application container
│   ├── index.css           # Global CSS & Tailwind imports
│   └── main.jsx            # React application entry point
├── index.html              # Entry HTML file
├── package.json            # Node scripts & dependencies
├── postcss.config.js       # PostCSS configuration for Tailwind CSS
├── tailwind.config.js      # Tailwind theme extensions & styling settings
├── vercel.json             # Vercel SPA routing & redirect configuration
└── vite.config.js          # Vite build tool setup
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository (if not already done).
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build and Production

Create an optimized build in the `dist` directory:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment

The repository is configured for deployment on **Vercel** via [vercel.json](file:///Users/mpavan/Documents/CoorgPly/vercel.json), redirecting all routes to `index.html` to support Client-Side Routing (`react-router-dom`).
