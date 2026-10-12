# Personal Portfolio Website

A responsive personal portfolio website built with **HTML5, CSS3, and JavaScript** to showcase my profile, technical skills, projects, and contact information.

## 🚀 Project Overview

This project was created as part of my web development learning journey. It focuses on building a structured, responsive, and interactive portfolio using semantic HTML, modern CSS, and JavaScript DOM manipulation.

The portfolio includes:
- Personal introduction and profile
- Projects section with links to project repositories
- Technical skills
- Contact information and contact form
- Internal section navigation
- Responsive layouts for desktop, tablet, and mobile
- Light and dark theme switching
- Client-side form validation and feedback
- Interactive UI elements
- Local storage for saving the selected theme
- Custom typography and styling

## 🎯 Objectives

- Understand the structure of a modern HTML5 document
- Use semantic HTML elements effectively
- Implement internal page navigation
- Create and validate a contact form
- Use images with meaningful `alt` text
- Apply CSS selectors and styling
- Use Flexbox for responsive layouts
- Implement hover effects
- Create responsive designs with media queries
- Practice JavaScript DOM manipulation and event handling
- Implement light/dark theme switching
- Store user preferences with browser `localStorage`

## 🛠️ Technologies Used

- **HTML5** — page structure and semantic elements
- **CSS3** — styling, layout, animations/hover effects, and responsive design
- **JavaScript** — DOM manipulation, theme switching, navigation interactions, and form validation
- **Google Fonts** — custom typography
- **Node.js / npm** — local development tooling
- **`npx serve`** — serving the static website locally

## 📁 Project Structure

```text
portfolio-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── package.json
└── package-lock.json
```

## ✨ Features

### Semantic HTML

The website uses semantic HTML5 elements to organize the page and improve readability, including:
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<form>`
- `<footer>`

### Internal Navigation

Navigation links take visitors to sections such as About, Projects, Skills, and Contact.

Example:

```html
<a href="#about">About</a>
```

This links to:

```html
<section id="about">
```

### Responsive Design

CSS media queries adapt the layout to different screen sizes, including desktop, tablet, and mobile.

Example:

```css
@media (max-width: 600px) {
  /* Responsive styles */
}
```

### Light and Dark Themes

A theme toggle lets visitors switch between light and dark appearances. The selected theme is saved in `localStorage` so it can be restored after a page refresh.

### JavaScript DOM Manipulation and Events

JavaScript updates page elements and responds to user actions, including:
- Theme toggle clicks
- Mobile navigation open/close actions
- Contact form submission and validation
- Updating the copyright year
- Keyboard interactions such as closing mobile navigation with Escape

### Contact Form Validation

The contact form includes name, email, and message fields. Client-side validation can provide required-field and email-format feedback, along with success or error messages.

**Note:** Client-side validation alone does not send a message or provide server-side security. A backend or form service is needed if the form should deliver messages.

### Local Storage

The selected theme is stored in the browser using `localStorage`. This keeps the preference on the same browser unless site data is cleared.

### Flexbox and Hover Effects

Flexbox and CSS hover states help create flexible layouts and interactive styling for links, tags, and buttons.

### Accessibility Considerations

The project uses semantic elements and should provide meaningful image `alt` text, accessible button labels, visible focus states, and suitable color contrast.

## 🎨 Design

The portfolio uses a clean, modern visual style with:
- Responsive navigation
- Light and dark themes
- Clear typography and spacing
- Rounded content sections and project cards
- Skill tags and interactive buttons
- Mobile-friendly layouts

## ⚙️ Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- VS Code or another code editor
- A modern web browser

### Run Locally

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd portfolio-website
   ```

3. Start the local static server:

   ```bash
   npx serve .
   ```

4. Open the local URL shown in your terminal. `npx serve` commonly uses `http://localhost:3000`, but the port may differ if 3000 is already in use.

The local URL is available only while the development server is running.

## 🧪 Testing Checklist

- [ ] Navigation links open the correct sections
- [ ] Light/dark theme toggle works
- [ ] Theme preference persists after refreshing
- [ ] Mobile navigation opens and closes correctly
- [ ] Contact form required-field validation works
- [ ] Invalid email addresses show feedback
- [ ] Form success feedback behaves as intended
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] Hover and keyboard interactions work
- [ ] Links point to the correct destinations

## 📚 Learning Outcomes

Through this project, I practiced:
- Semantic HTML5
- CSS styling and layout
- Flexbox and CSS media queries
- Responsive web design
- JavaScript DOM manipulation
- Event handling and reusable functions
- Form validation and user feedback
- Browser local storage
- Basic accessibility practices
- Git and GitHub workflow

## 👨‍💻 Author

**Nithees Vijayasekaran**  
Flutter Developer | Mobile App Developer

4+ years of experience building cross-platform mobile applications, with an interest in clean architecture, state management, API integration, and user-friendly application development.

## 🔗 Project Links
- **Live portfolio:** <add-your-live-portfolio-url-if-deployed>

> Replace the placeholder URLs above with your actual repository and live website links before publishing.

---

⭐ Built as part of my web development learning journey.