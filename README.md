# Cloudliness Amazon Affiliate Site

This project is a static website built with React, designed to showcase and sell products through Amazon affiliate links.

## Instructions

clone this repository to a folder on your computer. within the folder, open a cmd prompt and enter 'code .' if you use VS Code. in explorer, right click and select 'open in integrated terminal'. type npm install. once modules install, type 'npm start'. from there, the http://localhost:5173 link should show up and then you can work on the template from there.

1.  In `src/components/Contact.jsx`, line 31, enter your own access key from [web3forms.com](https://web3forms.com) website.
2.  In the `.env` file, add your Stripe secret key and publishable key. You can find these in your Stripe account.
3.  Product data is manually entered in `src/seed.js`. Add your products and product images there. In `src/seed.js`, line 19, add your Amazon affiliate link for each product.
4.  Update the contact information in `src/components/Contact.jsx` and `src/components/Footer.jsx`.

## Rules

1.  Read this `README.md` file to understand what's going on.
2.  When it comes to photos or pictures, unless I'm supplying them, always use photo placeholders from this website: [https://placehold.co/](https://placehold.co/)

## Technology Stack

This project uses the following technologies:

-   **Frontend Framework**: React 18 with JSX
-   **Routing**: React Router v6
-   **Build Tool**: Vite
-   **UI Library**: React Bootstrap
-   **Icons**: React Icons, React Bootstrap Icons, Font Awesome
-   **Payment Integration**: Stripe
-   **Environment Variables**: dotenv

## Site Structure

The site is structured as a single-page application (SPA) using React components. Here's a brief overview of the main components:

-   `src/App.jsx`: The main application component that sets up routing.
-   `src/components/`: Contains all the React components for different pages and sections of the site:
    -   `About.jsx`: About page.
    -   `Articles.jsx`: Articles page.
    -   `Cancel.jsx`: Cancel page for Stripe payments.
    -   `Contact.jsx`: Contact page with a form.
    -   `FAQ.jsx`: Frequently Asked Questions page.
    -   `Footer.jsx`: Footer component.
    -   `HardDrives.jsx`: Hard drives product listing page.
    -   `HomePage.jsx`: Home page.
    -   `Navbar.jsx`: Navigation bar component.
    -   `ProductReviews.jsx`: Product reviews component.
    -   `Products.jsx`: Products page.
    -   `Services.jsx`: Services page.
    -   `Success.jsx`: Success page for Stripe payments.
-   `src/config/`: Contains configuration files.
    -   `db.js`: (Unused) Placeholder for database configuration.
    -   `products.js`: (Unused) Placeholder for product data.
-   `src/seed.js`: Contains the product data.
-   `public/`: Contains static assets like images and HTML files.

## Features Implemented

-   Home page
-   About page
-   Contact page
-   Product listing
-   Product details
-   Payment processing with Stripe

## To Do

-   Add tests for frontend
-   Improve error handling
-   Add user authentication
-   Add order history
-   Add admin panel
-   Improve UI/UX
-   Add more features

## Potential Improvements

-   Implement server-side rendering (SSR) for better SEO
-   Optimize performance
-   Add more detailed documentation
-   Implement a more robust database solution
-   Add more payment options
