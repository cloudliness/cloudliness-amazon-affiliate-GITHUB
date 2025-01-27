# Instructions
in contact.jsx page line 31, enter your own access key from web3forms.com website

in .env file, go into your stripe account and look for your stripe keys, you'll need a secret key and a publishable key. add them to the .env file.

because this is a static website, i don't have a backend server. so i enter in my products manually using a seed.js file. in seed.js, this is where you will add your products and pictures for your products. in seed.js line 19, this is where you will add your amazon affiliate link depending on what your selling.

then just add your own contact info in the contact.jsx page and the footer.



# Rules

1. Never remove or delete any content in this page unless told to do so.
2. Read this readme.md file to understand whats going on.
3. when it comes to photos or pictures, unless i'm supplying them, always use photo placeholders from this website: https://placehold.co/

# Technology Stack

This project uses the following technologies:

- **Frontend Framework**: React 18 with JSX
- **Routing**: React Router v6
- **Build Tool**: Vite 4.2
- **Backend**: Node.js with Express 4.18
- **Database**: SQLite 5.1
- **Payment Integration**: Stripe 12.16
- **Styling**: CSS Modules
- **TypeScript**: Available (@types packages)
- **Development**: Vite dev server
- **Production**: Vite build system

# Features Implemented

- Home page
- About page
- Contact page
- Product listing
- Product details
- Cart functionality
- Payment processing with Stripe

# To Do

- Add tests for frontend and backend
- Improve error handling
- Add user authentication
- Add order history
- Add admin panel
- Improve UI/UX
- Add more features

# Potential Improvements

- Implement server-side rendering (SSR) for better SEO
- Optimize performance
- Add more detailed documentation
- Implement a more robust database solution
- Add more payment options

# Recent Troubleshooting

We have been working on resolving an issue with Stripe checkout. Initially, we encountered an error "Failed to fetch Stripe publishable key from server". This was resolved by adding a check in the `useStripe` hook to ensure the component is mounted before fetching the key, preventing potential race conditions.

Currently, we are addressing an issue where the checkout process fails with a 500 (Internal Server Error). We are investigating why the POST request to `/api/create-checkout-session` is failing.
