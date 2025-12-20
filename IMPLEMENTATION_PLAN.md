# 🚀 CampusPulse - Complete Implementation Plan

## 📋 Project Overview

A full-stack campus event management ecosystem with:
- **Web Application** (Next.js) - For authentication, organizations, and guests
- **Mobile Application** (React Native/Expo) - For students, faculty, and staff
- **Firebase Backend** - Auth, Firestore, Storage

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CAMPUS-PULSE                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────────────┐   ┌────────────────────────────────┐  │
│  │      WEB APP (Next.js)       │   │    MOBILE APP (Expo)          │  │
│  ├──────────────────────────────┤   ├────────────────────────────────┤  │
│  │ • Landing Page (Role Select) │   │ • Home (Events Feed)          │  │
│  │ • Auth (Login/Signup ALL)    │   │ • Explore (Search/Filters)    │  │
│  │ • Organization Portal        │   │ • My Events (History)         │  │
│  │   - Profile & Branding       │   │ • Profile (Stats/Badges)      │  │
│  │   - Event Management         │   │ • Leaderboard                 │  │
│  │   - Analytics Dashboard      │   │ • Yearly Wrap                 │  │
│  │   - Merchandise Store        │   │ • QR Ticket                   │  │
│  │   - QR Scanner               │   │ • Redemption Store            │  │
│  │ • Guest Portal               │   │ • Recommendations             │  │
│  │   - View Open Events         │   │ • Notifications               │  │
│  │   - Register for Events      │   │                               │  │
│  └──────────────────────────────┘   └────────────────────────────────┘  │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                    FIREBASE BACKEND                               │   │
│  ├──────────────────────────────────────────────────────────────────┤   │
│  │ • Authentication (Email, Google, Phone)                          │   │
│  │ • Firestore Database (Users, Orgs, Events, Registrations, etc.) │   │
│  │ • Cloud Storage (Images, Documents)                              │   │
│  │ • Cloud Functions (QR Generation, Notifications, Points calc)   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
CAMPUS-PULSE/
├── web/                          # Next.js Web Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                    # Landing (Role Selection)
│   │   │   ├── auth/
│   │   │   │   ├── login/page.tsx          # Login Page
│   │   │   │   ├── signup/page.tsx         # Signup Page
│   │   │   │   └── verify/page.tsx         # Email Verification
│   │   │   ├── organization/
│   │   │   │   ├── onboarding/page.tsx     # Profile Setup
│   │   │   │   ├── dashboard/page.tsx      # Main Dashboard
│   │   │   │   ├── events/
│   │   │   │   │   ├── page.tsx            # Events List
│   │   │   │   │   ├── create/page.tsx     # Create Event
│   │   │   │   │   └── [id]/page.tsx       # Event Details
│   │   │   │   ├── analytics/page.tsx      # Analytics Dashboard
│   │   │   │   ├── merchandise/page.tsx    # Merchandise Management
│   │   │   │   ├── scanner/page.tsx        # QR Scanner
│   │   │   │   └── profile/page.tsx        # Organization Profile
│   │   │   └── guest/
│   │   │       ├── events/page.tsx         # Browse Events
│   │   │       └── register/[id]/page.tsx  # Register for Event
│   │   ├── components/
│   │   │   ├── ui/                         # UI Components
│   │   │   ├── auth/                       # Auth Components
│   │   │   ├── organization/               # Org Components
│   │   │   └── shared/                     # Shared Components
│   │   └── lib/
│   │       ├── firebase/                   # Firebase Config
│   │       ├── hooks/                      # Custom Hooks
│   │       └── utils/                      # Utility Functions
│   └── public/
│
├── mobile/                       # React Native/Expo App
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx                   # Home Feed
│   │   │   ├── explore.tsx                 # Explore Events
│   │   │   ├── my-events.tsx               # My Events
│   │   │   └── profile.tsx                 # Profile & Settings
│   │   ├── event/
│   │   │   └── [id].tsx                    # Event Details
│   │   ├── ticket/
│   │   │   └── [id].tsx                    # QR Ticket
│   │   ├── leaderboard/page.tsx            # Leaderboard
│   │   ├── wrap/page.tsx                   # Yearly Wrap
│   │   ├── redeem/
│   │   │   ├── page.tsx                    # Organizations List
│   │   │   └── [orgId]/page.tsx            # Merchandise Store
│   │   └── notifications/page.tsx          # Notifications
│   ├── components/
│   │   ├── ui/                             # UI Components
│   │   ├── events/                         # Event Components
│   │   ├── profile/                        # Profile Components
│   │   └── shared/                         # Shared Components
│   └── lib/
│       ├── firebase/                       # Firebase Config
│       ├── hooks/                          # Custom Hooks
│       └── services/                       # API Services
│
└── shared/                       # Shared Code
    ├── types/                    # TypeScript Types
    ├── constants/                # Constants (Domains, Categories)
    └── utils/                    # Shared Utilities
```

---

## 🗄️ Database Schema (Firestore)

### Collections:

#### 1. `users`
```typescript
{
  uid: string;                    // Firebase Auth UID
  email: string;
  role: 'student' | 'faculty' | 'staff' | 'guest';
  profile: {
    name: string;
    campusId?: string;
    registrationNumber?: string;
    domain?: string;              // CSE, ECE, etc.
    year?: number;                // 1, 2, 3, 4
    phone?: string;
    avatar?: string;
  };
  stats: {
    totalPoints: number;
    eventsAttended: number;
    currentStreak: number;
    longestStreak: number;
    badges: string[];             // ['early_bird', 'event_10', etc.]
  };
  preferences: {
    interests: string[];          // Event categories
    notifications: boolean;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

#### 2. `organizations`
```typescript
{
  id: string;
  name: string;
  type: 'club' | 'committee' | 'department' | 'student_group';
  description: string;
  branding: {
    logo?: string;
    banner?: string;
    primaryColor?: string;
  };
  verification: {
    status: 'pending' | 'verified' | 'rejected';
    documents: string[];          // Storage URLs
    verifiedAt?: Timestamp;
  };
  admins: string[];               // User UIDs
  stats: {
    totalEvents: number;
    totalAttendees: number;
    avgRating: number;
    followers: number;
  };
  social: {
    website?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt: Timestamp;
}
```

#### 3. `events`
```typescript
{
  id: string;
  organizationId: string;
  title: string;
  description: string;
  type: 'workshop' | 'seminar' | 'competition' | 'social' | 'conference' | 'cultural';
  image?: string;
  
  schedule: {
    startDate: Timestamp;
    endDate: Timestamp;
    duration: number;             // In minutes
  };
  
  location: {
    venue: string;
    address?: string;
    isOnline: boolean;
    meetLink?: string;
  };
  
  capacity: {
    max: number;
    registered: number;
    attended: number;
    waitlist: number;
  };
  
  audience: {
    type: 'open' | 'domain_specific' | 'faculty_only' | 'campus_only';
    allowedDomains?: string[];    // If domain_specific
    allowGuests: boolean;
  };
  
  points: number;                 // Points for attending
  
  registration: {
    required: boolean;
    deadline?: Timestamp;
    autoApprove: boolean;
  };
  
  qrSecret: string;               // For attendance verification
  
  status: 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';
  
  tags: string[];
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

#### 4. `registrations`
```typescript
{
  id: string;                     // eventId_oderId
  userId: string;
  eventId: string;
  organizationId: string;
  
  status: 'registered' | 'waitlisted' | 'attended' | 'cancelled' | 'no_show';
  
  qrCode: string;                 // Unique QR for this registration
  
  checkIn: {
    attendedAt?: Timestamp;
    scannedBy?: string;           // Org admin who scanned
  };
  
  pointsEarned?: number;
  
  registeredAt: Timestamp;
}
```

#### 5. `merchandise`
```typescript
{
  id: string;
  organizationId: string;
  name: string;
  description: string;
  image: string;
  pointsCost: number;
  stock: number;
  category: 'sticker' | 'badge' | 'hoodie' | 't-shirt' | 'voucher' | 'other';
  isActive: boolean;
  createdAt: Timestamp;
}
```

#### 6. `redemptions`
```typescript
{
  id: string;
  userId: string;
  merchandiseId: string;
  organizationId: string;
  pointsSpent: number;
  status: 'pending' | 'ready' | 'collected' | 'cancelled';
  redeemedAt: Timestamp;
  collectedAt?: Timestamp;
}
```

#### 7. `notifications`
```typescript
{
  id: string;
  userId: string;
  type: 'event_reminder' | 'registration_confirmed' | 'points_earned' | 'badge_unlocked' | 'event_update';
  title: string;
  message: string;
  data?: object;                  // Additional data
  read: boolean;
  createdAt: Timestamp;
}
```

---

## 📋 Features Checklist

### Phase 1: Foundation
- [ ] Project setup (Next.js + Expo)
- [ ] Firebase configuration
- [ ] Shared types and constants
- [ ] UI component library
- [ ] Authentication system

### Phase 2: Web - Authentication
- [ ] Landing page with role selection
- [ ] Login page
- [ ] Signup page (role-based fields)
- [ ] Email verification
- [ ] Password reset

### Phase 3: Web - Organization Portal
- [ ] Onboarding flow (profile, branding, docs)
- [ ] Dashboard with stats
- [ ] Event creation wizard
- [ ] Event management (edit, cancel, duplicate)
- [ ] QR Scanner for attendance
- [ ] Analytics dashboard
- [ ] Merchandise management
- [ ] Organization profile page

### Phase 4: Web - Guest Portal
- [ ] Browse open events
- [ ] Event details page
- [ ] Guest registration form
- [ ] Registration confirmation

### Phase 5: Mobile - Core
- [ ] Home feed (trending, for you, nearby)
- [ ] Event card components
- [ ] Event details page
- [ ] One-tap registration
- [ ] Search and filters
- [ ] Pull-to-refresh

### Phase 6: Mobile - User Features
- [ ] Profile page with stats
- [ ] Badge system (10, 15, 20 events)
- [ ] Leaderboard
- [ ] My Events (registered, attended)
- [ ] QR Ticket view
- [ ] Share profile feature

### Phase 7: Mobile - Advanced
- [ ] Personalized recommendations
- [ ] Yearly Wrap (Spotify-style)
- [ ] Merchandise redemption
- [ ] Notifications
- [ ] Social sharing (LinkedIn, WhatsApp)

### Phase 8: Integration & Polish
- [ ] Real-time updates
- [ ] Offline support
- [ ] Performance optimization
- [ ] Error handling
- [ ] Loading states
- [ ] Animations

---

## 🎨 Design System

### Color Palette
```
Primary: #FF6B35 (Vibrant Orange)
Secondary: #6C63FF (Purple)
Tertiary: #00BFA5 (Teal)
Success: #10B981
Warning: #F59E0B
Error: #EF4444
Background: #0F172A (Dark)
Surface: #1E293B
Text: #F8FAFC
```

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Mono: JetBrains Mono (for codes)

---

## 🚀 Getting Started

Once approved, I'll start building in this order:
1. Create CAMPUS-PULSE folder structure
2. Setup web app with Next.js
3. Setup mobile app with Expo
4. Configure Firebase
5. Build authentication system
6. Build organization portal
7. Build mobile app features
8. Add advanced features (wrap, recommendations, etc.)

---

**Ready to start building! 🎉**
