# **Personal Website**

## **Introduction**

Welcome to my personal website! Built with React and Node.js, this project showcases my skills and experience, particularly what I learned as a developer at SafelyHome.

## **Skills Learned**

- UI design and prototyping in Figma
- Frontend development with React and Next.js
- Styling with Tailwind CSS
- Working with emailing APIs
- Implementing responsive design

## **Prototype**

Before development, I designed prototypes in Figma to visualize the layout and structure of my website. Below are images of the initial designs:

![Prototype Screenshot](https://github.com/user-attachments/assets/aa7c58c9-2a4c-442d-b787-0c2729851e0e)

## **Final Product**

The website is deployed on Vercel (since I don't own a domain yet—maybe in a few years when I'm rich and famous haha). Check it out here:

🔗 [Live Website](https://hana-ahmed-mahmoud.vercel.app/)

### **Responsive Design Proof**

Photos demonstrating responsiveness: _(to be added!)_

## **Development Process**

1. **Project Setup:** Created a Next.js project (which took longer than expected to set up!).
2. **Page Structure:** Designed a single continuous scrollable page with navigation instead of separate pages.
3. **Future Plans:** I’d love to add a blog section to document my thoughts and adventures while studying abroad.

## **Page Components**

### **Modules:**

- **Background:** Uses Tailwind blur effects to create a soft purple aura.
- **Navigation Bar:** Dynamically updates based on user interaction.
- **About Me:** A flexbox section containing my bio and a photo, using ReactCurvedText for text wrapping.
- **Experience:** Implements Alice Carousel and experience-bubbles for an interactive, scrollable timeline.
- **Projects:** Similar to the experience section, using Alice Carousel.
- **Contact:** Displays a modal with form validation, handling API requests for email submissions.

### **Components:**

- **Carousel Components:** Renders dot indicators for Alice Carousel.
- **Experience & Project Bubbles:** Displays content in the carousel.
- **Links:** Provides easy access to my CV, LinkedIn, and email.

## **Animations, APIs, and Hooks**

- **Animations:** Implemented using ternary operators and opacity changes for smooth fade-in effects.
- **Custom Hook:** Created `useIfVisible`, utilizing IntersectionObserver to detect scrolling behavior.
  - Inspired by [this guide](https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295).
- **APIs:** Uses Resend and NextResponse in API routes to handle email submissions from the contact form.

---

This project has been an exciting learning experience, and I look forward to expanding it in the future!

