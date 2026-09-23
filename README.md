# Personal Portfolio Website

A responsive personal portfolio website built with **HTML5 and CSS3** to showcase my profile, technical skills, and contact information.

## 🚀 Project Overview

This project was created as part of my HTML and CSS learning journey. It focuses on building a structured, accessible, and responsive webpage using semantic HTML and modern CSS techniques.

The portfolio includes:

- Personal introduction
- Technical skills
- Contact form
- Internal navigation
- Responsive design for mobile and desktop
- Custom typography and styling

## 🎯 Objectives

- Understand the structure of a modern HTML5 document
- Use semantic HTML elements effectively
- Implement internal page navigation
- Create and validate an HTML contact form
- Work with images and accessibility using `alt` text
- Learn CSS selectors and styling
- Use Flexbox for responsive layouts
- Implement hover effects
- Create responsive designs using media queries
- Work with custom fonts and color schemes

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Google Fonts**
- **Node.js / npm**
- **npx serve**

## 📁 Project Structure

```text
portfolio-website/
│
├── index.html
├── style.css
├── README.md
├── package.json
├── package-lock.json
│
└── images/
    └── Nithees.jpg
```

## ✨ Features

### Semantic HTML

The website uses semantic HTML5 elements including:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

This provides a clear and meaningful page structure.

### Internal Navigation

The navigation allows users to move between different sections of the same page:

- About
- Skills
- Contact

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

- Name
- Email
- Message
- Submit button

HTML5 form validation is implemented using the `required` attribute and `type="email"`.

### Responsive Design

The website adapts to different screen sizes using CSS media queries.

```css
@media (max-width: 600px) {
    /* Responsive styles */
}
```

The layout has been tested on both desktop and mobile screen sizes.

### Flexbox

Flexbox is used to create the responsive skills layout:

```css
#skills ul {
    display: flex;
    flex-wrap: wrap;
}
```

### Hover Effects

Interactive hover effects are implemented for navigation links and the contact form button using the `:hover` pseudo-class.

### Custom Font

The website uses the **Poppins** font from Google Fonts to provide consistent and modern typography.

## 🎨 Design

The website uses a simple and consistent visual design with:

- Dark header
- Light page background
- White content cards
- Rounded corners
- Circular profile image
- Skill tags
- Responsive spacing and typography

## ⚙️ Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- VS Code or another code editor
- A modern web browser

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

## 👨‍💻 Author

**Nithees Vijayasekaran**

Flutter Developer | Mobile App Developer

---

⭐ Built as part of my HTML & CSS learning journey.