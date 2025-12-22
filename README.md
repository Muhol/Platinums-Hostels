# Platinum Hostels

A premium hostel booking and management system built with Next.js and Firebase.

## Features

- **Room Listings**: Browse available rooms with detailed features and pricing.
- **Booking System**: Users can request room bookings directly through the platform.
- **Contact Inquiries**: Dedicated contact form with Firestore integration.
- **Admin Dashboard**:
  - Manage room inventory (Add, Edit, Delete).
  - Track and update booking requests.
  - View and manage user messages.
  - Seed database with initial room data.
- **Authentication**: Secure admin login powered by Firebase Auth.
- **Image Management**: Integrated Cloudinary for high-performance image uploads and storage.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Media Storage**: [Cloudinary](https://cloudinary.com/)

## Getting Started

### Prerequisites

You'll need a Firebase project and a Cloudinary account.

### Environment Setup

Create a `.env.local` file in the root directory and add the following:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

MIT
