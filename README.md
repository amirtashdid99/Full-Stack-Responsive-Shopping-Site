# Amir's Shop - Full-Stack### E-Commerce Features
- 💳 **Stripe Checkout Integration** for secure payments
- 🎟️ **Coupon Code System** with percentage, fixed, and free shipping discounts
- 🎡 **Lucky Wheel Popup** for gamified discount distribution
- 📦 **Order Management** with status tracking and webhooks
- 📍 **Address Management** with multiple shipping addresses
- ⭐ **Product Reviews** with 5-star rating system
- 🏷️ **Sale Badges** and discount calculations
- 📊 **Inventory Management** with stock warnings
- 🚚 **Free Shipping** for orders over $100
- 👨‍💼 **Admin Dashboard** for managing products, orders, users, and couponsrce Platform

A modern, feature-rich e-commerce platform built with Next.js 15, TypeScript, PostgreSQL, Prisma, NextAuth.js, and Stripe. Features include complete user authentication, real-time shopping cart, secure payments, order management, dark mode, and comprehensive SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.22.0-2D3748?style=flat-square&logo=prisma)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### Authentication & User Management
- 🔐 **Secure Authentication** with NextAuth.js v5 (email/password)
- 👤 **User Profiles** with order history and address management
- 🔒 **Protected Routes** with middleware-based authentication
- 🎭 **Role-Based Access** (USER/ADMIN roles)

### Shopping Experience
- 🛍️ **Product Catalog** with category filtering and search
- 🛒 **Real-Time Shopping Cart** with Zustand state management
- 💾 **Persistent Cart** saved across sessions
- 🎨 **Dark/Light Mode Toggle** with user preference
- ⚡ **Lazy Loading** for images and components
- 💀 **Skeleton Loaders** for better perceived performance
- 📱 **Responsive Design** optimized for all devices

### E-Commerce Features
- 💳 **Stripe Checkout Integration** for secure payments
- 📦 **Order Management** with status tracking
- 📍 **Address Management** with multiple shipping addresses
- ⭐ **Product Reviews** with 5-star rating system
- 🏷️ **Sale Badges** and discount calculations
- 📊 **Inventory Management** with stock warnings
- � **Free Shipping** for orders over $100

### Developer Experience
- 🔍 **SEO Optimized** with dynamic metadata and JSON-LD structured data
- 🎯 **Error Boundaries** at multiple levels for graceful error handling
- 🚀 **Server Components** for optimal performance
- � **Type-Safe** with TypeScript and Prisma
- 🔄 **Hot Module Replacement** for fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Payments**: Stripe API
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Language**: TypeScript

- 🛒 Shopping Cart functionality## 📦 Installation

- 💳 Stripe payment integration

- 📦 Order management and history### Prerequisites

- 👤 User profiles

- 🔔 Email notifications- Node.js 18+ installed

- PostgreSQL database (local or cloud)

## 🛠️ Tech Stack- Stripe account for payment processing



### Frontend### Setup Steps

- **Framework**: Next.js 15.5.4 (App Router)

- **Language**: TypeScript1. **Clone the repository**

- **Styling**: Tailwind CSS with dark mode support   ```bash

- **Icons**: Lucide React   git clone <repository-url>

- **State**: React Context API   cd Full-Stack E-Commerce Platform

   ```

### Backend

- **Database**: Neon PostgreSQL (serverless)2. **Install dependencies**

- **ORM**: Prisma 5.22.0   ```bash

- **Auth**: NextAuth.js (planned)   npm install

- **Payments**: Stripe (planned)   ```



## 📁 Project Structure3. **Set up environment variables**

   

```   Copy `.env.example` to `.env` and fill in the values:

├── app/                      # Next.js App Router   ```bash

│   ├── products/            # Product pages   cp .env.example .env

│   │   ├── [slug]/          # Dynamic product detail   ```

│   │   │   ├── page.tsx     # Product detail page

│   │   │   ├── loading.tsx  # Loading state   Update the following variables:

│   │   │   └── error.tsx    # Error boundary   - `DATABASE_URL`: PostgreSQL connection string

│   │   ├── page.tsx         # Products listing   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`

│   │   ├── loading.tsx      # Loading state   - `NEXTAUTH_URL`: Application URL (http://localhost:3000 for development)

│   │   └── error.tsx        # Error boundary   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key

│   ├── page.tsx             # Homepage   - `STRIPE_SECRET_KEY`: Stripe secret key

│   ├── layout.tsx           # Root layout   - `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret

│   ├── globals.css          # Global styles

│   ├── loading.tsx          # Loading state4. **Set up the database**

│   ├── error.tsx            # Error boundary   ```bash

│   └── not-found.tsx        # 404 page   npx prisma migrate dev --name init

├── components/              # Reusable components   npx prisma db seed

│   ├── Header.tsx           # Navigation (Client)   ```

│   ├── Footer.tsx           # Site footer

│   ├── ThemeProvider.tsx    # Theme context (Client)5. **Run the development server**

│   └── SkeletonLoader.tsx   # Loading skeletons   ```bash

├── lib/                     # Utility functions   npm run dev

│   └── prisma.ts            # Prisma client singleton   ```

├── prisma/                  # Database

│   ├── schema.prisma        # Database schema   Open [http://localhost:3000](http://localhost:3000) in the browser.

│   └── seed.ts              # Sample data

├── .devnotes/              # Development notes (gitignored)## 📁 Project Structure

│   └── progress.md          # Detailed project documentation

└── .env                     # Environment variables (gitignored)```

```├── app/                  # Next.js app directory

│   ├── api/             # API routes

## 🚀 Getting Started│   ├── (auth)/          # Authentication pages

│   ├── products/        # Product pages

### Prerequisites│   └── ...

- Node.js 18+ installed├── components/          # Reusable React components

- PostgreSQL database (or use Neon)├── lib/                # Utility functions and configurations

- Git├── prisma/             # Database schema and migrations

│   ├── schema.prisma   # Prisma schema

### Installation│   └── seed.ts         # Database seeding script

└── types/              # TypeScript type definitions

1. **Clone the repository**```

   ```bash

   git clone <your-repo-url>## 🗄️ Database Schema

   cd "Full-Stack E-Commerce Platform"

   ```The application uses the following main models:



2. **Install dependencies**- **User**: Customer accounts with authentication

   ```bash- **Product**: Product catalog with categories

   npm install- **Order**: Purchase orders with items

   ```- **CartItem**: Shopping cart persistence

- **Address**: Shipping addresses

3. **Set up environment variables**- **Review**: Product reviews and ratings

   

   Create a `.env` file in the root directory:## 🔐 Authentication

   ```env

   DATABASE_URL="postgresql://..."Demo account credentials:

   NEXTAUTH_URL="http://localhost:3000"- Password: `demo123`

   ```

## 💳 Payment Testing

4. **Set up the database**

   ```bashUse Stripe test cards:

   npx prisma generate- Success: `4242 4242 4242 4242`

   npx prisma db push- Decline: `4000 0000 0000 0002`

   npx prisma db seed- Any future expiry date and CVC

   ```

## 🚧 Development

5. **Run the development server**

   ```bash### Available Scripts

   npm run dev

   ```- `npm run dev` - Start development server

- `npm run build` - Build for production

6. **Open your browser**- `npm start` - Start production server

   - `npm run lint` - Run ESLint

   Navigate to [http://localhost:3000](http://localhost:3000)

### Prisma Commands

## 📊 Database Schema

- `npx prisma studio` - Open Prisma Studio (database GUI)

### Models- `npx prisma migrate dev` - Create and apply migrations

- **User** - User accounts and profiles- `npx prisma db seed` - Seed the database

- **Product** - Product catalog with images- `npx prisma generate` - Generate Prisma Client

- **Order** - Order management

- **OrderItem** - Order line items## 📝 License

- **CartItem** - Shopping cart items

- **Address** - User shipping addressesMIT License - feel free to use this project for learning and portfolio purposes.

- **Review** - Product reviews (1-5 stars)

## 🤝 Contributing

### Categories

ELECTRONICS | CLOTHING | HOME_GARDEN | SPORTS | TOYS_GAMES | BOOKS | BEAUTY | FOOD_BEVERAGEThis is a portfolio project, but suggestions and feedback are welcome!


## 🎨 UI/UX Features

### Dark Mode
- Toggle between light and dark themes
- Persistent user preference (localStorage)
- Smooth transitions
- Optimized for both modes

### Loading States
- Page-level loading.tsx files
- Component-level skeleton loaders
- Lazy loading for images
- Smooth content appearance

### Error Handling
- Global error boundary
- Page-specific error boundaries
- Friendly error messages
- "Try Again" functionality

### SEO
- Dynamic page metadata
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data for products
- Proper heading hierarchy

## 📸 Screenshots

*(Add your screenshots here once deployed)*

## 🧪 Testing

### Manual Testing
```bash
# Run the dev server
npm run dev

# Test in browser
- Visit http://localhost:3000
- Toggle dark mode
- Browse products
- Check responsive design
```

### Database GUI
```bash
# Open Prisma Studio
npx prisma studio
```

## 📦 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the button above or push to GitHub
2. Import project in Vercel
3. Add environment variables (see below)
4. Deploy!

### Environment Variables for Production

```env
DATABASE_URL="postgresql://..."              # Production database (Neon/Supabase/Railway)
NEXTAUTH_SECRET="production-secret"          # Generate: openssl rand -base64 32
NEXTAUTH_URL="https://your-domain.com"       # Your production URL
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..." # Stripe live publishable key
STRIPE_SECRET_KEY="sk_live_..."              # Stripe live secret key
STRIPE_WEBHOOK_SECRET="whsec_..."            # Get after creating webhook endpoint
```

### Detailed Deployment Guide

For complete step-by-step deployment instructions including:
- Database migration to production
- Stripe webhook configuration
- Post-deployment testing checklist
- Performance optimization
- Custom domain setup
- Troubleshooting common issues

See **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for the full guide.

### Production Checklist

- [ ] Database migrated and seeded
- [ ] Environment variables configured
- [ ] Stripe webhook endpoint created
- [ ] Site deployed and accessible
- [ ] Authentication working
- [ ] Payment flow tested
- [ ] Admin dashboard accessible
- [ ] Lucky wheel functioning
- [ ] Coupons validating correctly

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for portfolio purposes. All rights reserved.

## 👤 Author

**Amir**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [@yourusername]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma for the excellent ORM
- Vercel for hosting solutions
- Neon for serverless PostgreSQL
- Tailwind CSS for styling utilities

## 📚 Documentation

For detailed development notes, architecture decisions, and implementation details, see [.devnotes/progress.md](.devnotes/progress.md).

## 🐛 Known Issues

None currently! 🎉

## 🗺️ Roadmap

- ✅ Phase 1: Project setup and database schema
- ✅ Phase 2: Product pages with professional features
- ✅ Phase 3: Authentication system (NextAuth.js with email/password)
- ✅ Phase 4: Shopping cart and Stripe checkout
- ✅ Phase 5: Order management, webhooks, and payment confirmation
- ✅ Phase 6: Admin dashboard with management tools
- ✅ Phase 7: Production deployment and optimization
- ✅ Bonus: Lucky wheel gamification popup
- ✅ Bonus: Complete coupon system with validation

**🎉 All phases complete! Project is production-ready.**

## 👨‍💼 Admin Dashboard Usage

### Accessing the Admin Panel

1. **Create an Admin Account**
   ```bash
   # Run Prisma Studio
   npx prisma studio
   
   # Navigate to the User table
   # Find your user and change role from "USER" to "ADMIN"
   # Save the changes
   ```

2. **Login and Access**
   - Login with your admin account at `/auth/login`
   - Navigate to `/admin` or click "Admin Dashboard" in the user menu
   - Protected by middleware - only ADMIN role users can access

### Admin Features

#### 📊 Dashboard (`/admin`)
- **Real-time Statistics**: Total revenue, orders, users, products
- **Recent Orders Table**: Latest 5 orders with status and customer info
- **Quick Overview**: Active orders, order status distribution
- **Trend Indicators**: Growth percentages and changes

#### 📦 Orders Management (`/admin/orders`)
- View all orders with filtering by status
- See order details: items, customer, address, payment info
- Track discounts applied (coupons, lucky wheel prizes)
- Order status: PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
- Export order data for accounting

#### 👥 Users Management (`/admin/users`)
- View all registered users
- See user roles (USER/ADMIN)
- Track registration dates
- View user order history
- Manage user accounts

#### 🛍️ Products Management (`/admin/products`)
- **Add New Products**: Create products with images, pricing, inventory
- **Edit Existing Products**: Update details, prices, stock levels
- **Delete Products**: Remove discontinued items
- **Stock Management**: Track inventory levels, set low stock warnings
- **Categories**: Organize products (ELECTRONICS, CLOTHING, HOME_GARDEN, etc.)
- **Sale Management**: Set discount percentages, manage sales

#### 🎟️ Coupons Management (`/admin/coupons`)
- **Create Coupons**: Generate discount codes
  - **Percentage**: e.g., 20% off (SAVE20)
  - **Fixed Amount**: e.g., $10 off (10OFF)
  - **Free Shipping**: e.g., Free delivery (FREESHIP)
- **Set Parameters**:
  - Minimum order amount
  - Maximum discount cap
  - Expiration dates
  - Usage limits
- **Track Usage**: See how many times each coupon was used
- **Active/Inactive Status**: Enable or disable coupons

#### 📈 Analytics (`/admin/analytics`)
- Revenue trends over time
- Top-selling products
- Category performance
- Customer insights
- Order value analytics
- Conversion rates

#### ⚙️ Settings (`/admin/settings`)
- Store configuration
- Payment settings
- Email notifications
- Shipping options
- Tax rates
- General preferences

### How to Manage Products

#### Adding a New Product
1. Go to `/admin/products`
2. Click "Add New Product"
3. Fill in the form:
   - **Name**: Product title
   - **Slug**: URL-friendly name (auto-generated)
   - **Description**: Full product details
   - **Price**: Regular price
   - **Sale Price**: (Optional) Discounted price
   - **Category**: Select from dropdown
   - **Stock**: Available quantity
   - **Images**: Product image URLs
   - **Featured**: Highlight on homepage
4. Click "Save Product"

#### Editing Products
1. Find the product in the list
2. Click "Edit" button
3. Update any fields
4. Save changes

#### Managing Inventory
- Set "Low Stock Threshold" to get warnings
- Update stock after receiving shipments
- Mark products as "Out of Stock" when depleted
- Set up automatic low stock alerts

### Deployment Optimization

#### Before Deploying
1. **Environment Variables**: Set all production variables
2. **Database**: Run migrations on production database
3. **Stripe**: Configure production webhooks
4. **Admin Account**: Create admin user in production database

#### On Vercel
1. Push to GitHub repository
2. Import project to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy and test all admin features
5. Create admin user via Prisma Studio (production database)

#### Post-Deployment
1. **Test Admin Panel**: Verify all pages load correctly
2. **Test CRUD Operations**: 
   - Create a test product
   - Edit product details
   - Create a test coupon
   - Verify orders display correctly
3. **Check Permissions**: Ensure non-admin users cannot access `/admin`
4. **Monitor Performance**: Use Vercel Analytics to track loading times
5. **Set Up Monitoring**: Configure error tracking (Sentry recommended)

### Security Best Practices

- ✅ Admin routes protected by middleware
- ✅ Role-based access control (RBAC)
- ✅ All mutations require authentication
- ✅ Input validation on all forms
- ✅ SQL injection protection via Prisma
- ✅ XSS protection via React
- ✅ CSRF protection via NextAuth

### Tips for Production

1. **Regular Backups**: Schedule database backups daily
2. **Monitor Logs**: Check Vercel logs for errors
3. **Test Payments**: Use Stripe test mode before going live
4. **Cache Strategy**: Leverage Next.js ISR for product pages
5. **Image Optimization**: Use next/image for all product images
6. **Rate Limiting**: Consider adding rate limits to API routes
7. **Error Tracking**: Set up Sentry or similar service

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
