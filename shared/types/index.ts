// CampusPulse - Shared Types
// Used by both Web and Mobile applications

import { Timestamp } from 'firebase/firestore';

// ============================================
// USER TYPES
// ============================================

export type UserRole = 'student' | 'faculty' | 'staff' | 'guest';

export type OrganizationType = 'club' | 'committee' | 'department' | 'student_group';

export type VerificationStatus = 'pending' | 'verified' | 'rejected';

export interface UserProfile {
    name: string;
    campusId?: string;
    registrationNumber?: string;
    domain?: string;
    year?: number;
    phone?: string;
    avatar?: string;
}

export interface UserStats {
    totalPoints: number;
    eventsAttended: number;
    currentStreak: number;
    longestStreak: number;
    badges: string[];
}

export interface UserPreferences {
    interests: string[];
    notifications: boolean;
}

export interface User {
    uid: string;
    email: string;
    role: UserRole;
    profile: UserProfile;
    stats: UserStats;
    preferences: UserPreferences;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// ============================================
// ORGANIZATION TYPES
// ============================================

export interface OrganizationBranding {
    logo?: string;
    banner?: string;
    primaryColor?: string;
}

export interface OrganizationVerification {
    status: VerificationStatus;
    documents: string[];
    verifiedAt?: Timestamp;
}

export interface OrganizationStats {
    totalEvents: number;
    totalAttendees: number;
    avgRating: number;
    followers: number;
}

export interface OrganizationSocial {
    website?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
}

export interface Organization {
    id: string;
    name: string;
    type: OrganizationType;
    description: string;
    branding: OrganizationBranding;
    verification: OrganizationVerification;
    admins: string[]; // User UIDs
    stats: OrganizationStats;
    social: OrganizationSocial;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// ============================================
// EVENT TYPES
// ============================================

export type EventType = 'workshop' | 'seminar' | 'competition' | 'social' | 'conference' | 'cultural' | 'sports' | 'hackathon' | 'meetup';

export type EventStatus = 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';

export type AudienceType = 'open' | 'domain_specific' | 'faculty_only' | 'campus_only';

export interface EventSchedule {
    startDate: Timestamp;
    endDate: Timestamp;
    duration: number; // In minutes
}

export interface EventLocation {
    venue: string;
    address?: string;
    isOnline: boolean;
    meetLink?: string;
}

export interface EventCapacity {
    max: number;
    registered: number;
    attended: number;
    waitlist: number;
}

export interface EventAudience {
    type: AudienceType;
    allowedDomains?: string[];
    allowGuests: boolean;
}

export interface EventRegistration {
    required: boolean;
    deadline?: Timestamp;
    autoApprove: boolean;
}

export interface Event {
    id: string;
    organizationId: string;
    title: string;
    description: string;
    type: EventType;
    image?: string;
    schedule: EventSchedule;
    location: EventLocation;
    capacity: EventCapacity;
    audience: EventAudience;
    points: number;
    registration: EventRegistration;
    qrSecret: string;
    status: EventStatus;
    tags: string[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// With organization data populated
export interface EventWithOrg extends Event {
    organization: Organization;
}

// ============================================
// REGISTRATION TYPES
// ============================================

export type RegistrationStatus = 'registered' | 'waitlisted' | 'attended' | 'cancelled' | 'no_show';

export interface RegistrationCheckIn {
    attendedAt?: Timestamp;
    scannedBy?: string;
}

export interface Registration {
    id: string;
    oderId: string;
    eventId: string;
    organizationId: string;
    status: RegistrationStatus;
    qrCode: string;
    checkIn: RegistrationCheckIn;
    pointsEarned?: number;
    registeredAt: Timestamp;
}

// With event and user data populated
export interface RegistrationWithDetails extends Registration {
    event: Event;
    user: User;
}

// ============================================
// MERCHANDISE TYPES
// ============================================

export type MerchandiseCategory = 'sticker' | 'badge' | 'hoodie' | 't-shirt' | 'voucher' | 'accessory' | 'other';

export interface Merchandise {
    id: string;
    organizationId: string;
    name: string;
    description: string;
    image: string;
    pointsCost: number;
    stock: number;
    category: MerchandiseCategory;
    isActive: boolean;
    createdAt: Timestamp;
}

// ============================================
// REDEMPTION TYPES
// ============================================

export type RedemptionStatus = 'pending' | 'ready' | 'collected' | 'cancelled';

export interface Redemption {
    id: string;
    userId: string;
    merchandiseId: string;
    organizationId: string;
    pointsSpent: number;
    status: RedemptionStatus;
    redeemedAt: Timestamp;
    collectedAt?: Timestamp;
}

// ============================================
// NOTIFICATION TYPES
// ============================================

export type NotificationType =
    | 'event_reminder'
    | 'registration_confirmed'
    | 'points_earned'
    | 'badge_unlocked'
    | 'event_update'
    | 'event_cancelled'
    | 'merchandise_ready';

export interface Notification {
    id: string;
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    data?: Record<string, any>;
    read: boolean;
    createdAt: Timestamp;
}

// ============================================
// BADGE TYPES
// ============================================

export type BadgeId =
    | 'first_event'
    | 'early_bird'
    | 'event_5'
    | 'event_10'
    | 'event_15'
    | 'event_20'
    | 'event_50'
    | 'streak_7'
    | 'streak_14'
    | 'streak_30'
    | 'social_butterfly'
    | 'points_100'
    | 'points_500'
    | 'points_1000';

export interface Badge {
    id: BadgeId;
    name: string;
    description: string;
    icon: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    requirement: number;
}

// ============================================
// YEARLY WRAP TYPES
// ============================================

export interface YearlyWrap {
    year: number;
    userId: string;
    stats: {
        totalEvents: number;
        totalHours: number;
        totalPoints: number;
        currentStreak: number;
        longestStreak: number;
    };
    topCategories: {
        category: EventType;
        count: number;
    }[];
    topOrganizations: {
        orgId: string;
        orgName: string;
        eventsAttended: number;
    }[];
    badgesEarned: BadgeId[];
    rank: {
        overall: number;
        domain: number;
        percentile: number;
    };
    highlights: {
        firstEvent: Event;
        favoriteEvent: Event;
        longestEvent: Event;
    };
    generatedAt: Timestamp;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}
