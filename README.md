# **Personal Website**

## **Introduction**

Welcome to my personal website! Built with React and Node.js, this project showcases my skills and experience, particularly what I learned as a developer at SafelyHome.

## **Skills Learned**

- UI design and prototyping in Figma
- Frontend development with React and Next.js
- Styling with Tailwind CSS
- Working with emailing APIs
- Implementing responsive design so website works on both phone and laptop
- Creating custom hooks
- Basic animations on the web

## **Prototype**

Before development, I designed prototypes in Figma to visualize the layout and structure of my website. Below are images of the initial designs:

![Prototype Screenshot](https://github.com/user-attachments/assets/aa7c58c9-2a4c-442d-b787-0c2729851e0e)

## **Final Product**

The website is deployed on Vercel (since I don't own a domain yet—maybe in a few years when I'm rich and famous haha). Check it out here:

[Live Website](https://hana-ahmed-mahmoud.vercel.app/)

### **Responsive Design Proof**

**Laptop view**: 

<img width="1430" alt="Screenshot 2025-02-14 at 21 24 38" src="https://github.com/user-attachments/assets/2ce3194d-ecb1-44a0-be40-aa4567e859e5" />
<img width="1336" alt="Screenshot 2025-02-14 at 21 24 45" src="https://github.com/user-attachments/assets/03f93193-7ea2-4bb3-b3de-f3eac603d284" />

**Phone view**: 

<img width="392" alt="Screenshot 2025-02-14 at 21 02 31" src="https://github.com/user-attachments/assets/879823b4-7288-4cec-b44c-b6a613e966b6" />
<img width="372" alt="Screenshot 2025-02-14 at 21 02 38" src="https://github.com/user-attachments/assets/427044d3-5f51-43e3-af3d-daec7840ae59" />



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

