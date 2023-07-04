# Ecommerce Web App for Book Buying and Selling

Welcome to our eCommerce web application for buying and selling books. This project is built using Next.js, Sanity.io, Netlify Identity, Firebase, Stripe, Tailwind CSS, React Icons, and React Spring.

## Description

The eCommerce web app provides a platform for users to browse, purchase, and sell books. It offers the following features:

- Browse a wide selection of books
- Search for specific books by title, author, or price
- Add books to a shopping cart
- Checkout using Stripe for secure payments
- Sell books by listing book on form
- Manage and update book listings
- User authentication and authorization with Netlify Identity
- Firebase integration for the database

## Screenshots

![Home Page](/screenshots/home.png)
![Book Details](/screenshots/book-details.png)
![Shopping Cart](/screenshots/cart.png)
![Checkout](/screenshots/checkout.png)
![Seller Dashboard](/screenshots/seller-dashboard.png)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/devTejasss/Rbook.git

2.Install the dependencies:
"npm install --legacy-peer-deps"

3.Configure the environment variables:
# Create a .env.local file in the root directory
# Add the following variables and update their values accordingly
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
FIREBASE_API_KEY=your_firebase_api_key
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=your_sanity_dataset

4.Start the development server:
npm run dev

5.Open the web app in your browser:
http://localhost:3000





