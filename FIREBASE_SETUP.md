# 🔥 Firebase Setup Guide for CampusPulse

This guide will walk you through setting up Firebase for the CampusPulse application.

---

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `campuspulse` (or your preferred name)
4. Disable Google Analytics (optional, can enable later)
5. Click **"Create project"**

---

## Step 2: Enable Authentication

1. In Firebase Console, go to **Build > Authentication**
2. Click **"Get started"**
3. Go to **Sign-in method** tab
4. Enable the following providers:
   - **Email/Password** - Click, toggle ON, Save
   - **Google** - Click, toggle ON, add your email as support email, Save

---

## Step 3: Create Firestore Database

1. Go to **Build > Firestore Database**
2. Click **"Create database"**
3. Select **"Start in production mode"** (we have security rules)
4. Choose a location closest to your users (e.g., `asia-south1` for India)
5. Click **"Enable"**

### Deploy Security Rules:
After the database is created:
1. Go to **Firestore > Rules** tab
2. Copy the contents of `firestore.rules` from your project
3. Paste and click **"Publish"**

---

## Step 4: Enable Storage (for images)

1. Go to **Build > Storage**
2. Click **"Get started"**
3. Accept security rules (we'll update later)
4. Choose the same location as Firestore

---

## Step 5: Register a Web App

1. Go to **Project Settings** (gear icon in sidebar)
2. Scroll to **"Your apps"** section
3. Click the **Web icon** (`</>`)
4. App nickname: `campuspulse-web`
5. ✅ Check "Also set up Firebase Hosting" (optional)
6. Click **"Register app"**
7. **COPY THE CONFIG** - You'll see something like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "campuspulse-xxxxx.firebaseapp.com",
  projectId: "campuspulse-xxxxx",
  storageBucket: "campuspulse-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

## Step 6: Create Your `.env.local` File

1. In your `web` folder, create a new file called `.env.local`
2. Add this content (replace with YOUR values from Step 5):

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=campuspulse-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=campuspulse-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=campuspulse-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

3. Save the file
4. Restart your dev server (`npm run dev`)

---

## Step 7: Seed Initial Data (Optional)

To add sample events and organizations, you can use the Firebase Console:

### Create a Test Organization:
1. Go to **Firestore > Data**
2. Click **"Start collection"**
3. Collection ID: `organizations`
4. Document ID: (Auto-ID)
5. Add fields:
   - `name` (string): "Tech Club"
   - `type` (string): "technical"
   - `verified` (boolean): true
   - `admins` (array): [your_user_uid]

### Create a Test Event:
1. Add to `events` collection:
   - `title` (string): "Tech Hackathon 2025"
   - `organizerId` (string): (organization doc ID)
   - `date` (string): "2025-01-15"
   - `time` (string): "09:00 AM"
   - `location` (string): "Main Auditorium"
   - `category` (string): "Technology"
   - `capacity` (number): 150
   - `registrations` (number): 0
   - `status` (string): "open"
   - `visibility` (string): "public"

---

## Step 8: Verify Setup

1. Restart your Next.js server
2. Go to `http://localhost:3000/auth/login`
3. Try signing up with a new email
4. Check Firebase Console > Authentication to see the new user

---

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Make sure `.env.local` file exists in `/web` folder
- Check that all keys start with `NEXT_PUBLIC_`
- Restart the dev server after adding the file

### "Missing or insufficient permissions"
- Publish the Firestore security rules from `firestore.rules`
- Make sure you're signed in when accessing protected data

---

## Database Schema Reference

| Collection | Description |
|------------|-------------|
| `users` | User profiles and stats |
| `organizations` | Campus clubs and organizations |
| `events` | All events created by organizations |
| `registrations` | User registrations for events |
| `merchandise` | Redeemable items |
| `redemptions` | Points redemption history |
| `guestRegistrations` | Non-authenticated event signups |

---

🎉 **You're all set!** The application will now use your real Firebase backend.
