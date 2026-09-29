# Personal Portfolio Website

A responsive personal portfolio website built with **HTML5, CSS3, and JavaScript** to showcase my profile, technical skills, and contact information.

## 🚀 Project Overview

This project was created as part of my web development learning journey. It focuses on building a structured, responsive, and interactive portfolio using semantic HTML, modern CSS, and JavaScript DOM manipulation.

The portfolio includes:

- Personal introduction
- Technical skills
- Contact form
- Internal navigation
- Responsive design
- Light and dark mode
- JavaScript form validation
- Interactive UI elements
- Local storage for theme preference
- Custom typography and styling

## 🎯 Objectives

- Understand the structure of a modern HTML5 document
- Use semantic HTML elements effectively
- Implement internal page navigation
- Create and validate a contact form
- Work with images and accessibility using `alt` text
- Learn CSS selectors and styling
- Use Flexbox for responsive layouts
- Implement hover effects
- Create responsive designs using media queries
- Learn JavaScript DOM manipulation
- Implement event listeners
- Create reusable JavaScript functions
- Implement light/dark theme switching
- Store user preferences using browser local storage

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Google Fonts**
- **Node.js / npm**
- **npx serve**

## 📁 Project Structure

```text
portfolio-website/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── package.json
└── package-lock.json
````

## ✨ Features

### Semantic HTML

The website uses semantic HTML5 elements including:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<form>`
* `<footer>`

This provides a clear and meaningful page structure.

### Internal Navigation

The navigation allows users to move between different sections of the page:

* About
* Projects
* Skills
* Contact

Example:

```html
<a href="#about">About</a>
```

connects to:

```html
<section id="about">
```

### Contact Form

The portfolio includes a contact form with:

* Name
* Email
* Message
* Submit button

Client-side validation is implemented using JavaScript to provide feedback when required fields are missing or invalid.

### JavaScript Form Validation

JavaScript is used to validate the contact form before submission.

The implementation includes:

* Required field validation
* Email format validation
* Error messages
* Success feedback
* Form reset after successful submission

### Light / Dark Mode

The portfolio includes a theme toggle button in the header.

Users can switch between:

* Light mode
* Dark mode

JavaScript dynamically adds or removes the dark mode class from the document.

The selected theme is stored using `localStorage`, allowing the user's preference to remain after refreshing or revisiting the page.

Example:

```javascript
document.body.classList.toggle("dark-mode");
```

### DOM Manipulation

JavaScript is used to interact with HTML elements dynamically.

Examples include:

* Updating theme styles
* Showing validation messages
* Updating form feedback
* Handling user interactions

### Event Listeners

The project uses JavaScript event listeners for interactive functionality such as:

* Theme toggle
* Form submission
* Input validation
* Navigation interactions

Example:

```javascript
themeButton.addEventListener("click", toggleTheme);
```

### Reusable Functions

JavaScript functionality is organized into reusable functions to keep the code clean and maintainable.

Examples include:

* Theme management
* Form validation
* Error handling
* Success message handling

### Responsive Design

The website adapts to different screen sizes using CSS media queries.

```css
@media (max-width: 600px) {
    /* Responsive styles */
}
```

The layout is designed to work across:

* Desktop
* Tablet
* Mobile

### Flexbox

Flexbox is used to create responsive layouts, particularly for the skills section.

```css
#skills ul {
    display: flex;
    flex-wrap: wrap;
}
```

### Hover Effects

Interactive hover effects are implemented for navigation links, skill tags, and buttons using the `:hover` pseudo-class.

### Custom Font

The website uses the **Poppins** font from Google Fonts to provide consistent and modern typography.

## 🎨 Design

The portfolio follows a clean and simple design approach with:

* Fixed navigation header
* Light and dark themes
* Responsive layout
* Clean typography
* Rounded content sections
* Skill tags
* Consistent spacing
* Interactive buttons
* Mobile-friendly layout

## ⚙️ Setup and Installation

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* VS Code or another code editor
* A modern web browser

### Run Locally

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:

```bash
cd portfolio-website
```

3. Start the local development server:

```bash
npx serve .
```

4. Open the application in your browser:

```text
http://localhost:3000
```

> **Note:** `localhost:3000` is a local development URL and is available only while the local server is running.

## 🧪 Testing

The following functionality can be tested locally:

* Navigation links
* Light/dark mode toggle
* Theme persistence after page refresh
* Contact form validation
* Required field validation
* Email validation
* Success and error messages
* Responsive layout
* Hover interactions
* Mobile and desktop layouts

## 📚 Learning Outcomes

Through this project, I practiced:

* Semantic HTML5
* CSS styling and layout
* Flexbox
* Responsive web design
* CSS media queries
* DOM manipulation
* JavaScript event handling
* Form validation
* Local storage
* Reusable JavaScript functions
* Basic accessibility practices
* Git and GitHub workflow

## 👨‍💻 Author

**Nithees Vijayasekaran**

Flutter Developer | Mobile App Developer

4+ years of experience building cross-platform mobile applications, with an interest in clean architecture, state management, API integration, and user-friendly application development.

---

⭐ Built as part of my web development learning journey.