/**
 * CampusPulse AIOS - Unified Type Definitions
 * Shared between Web (Next.js) and Mobile (Expo) applications
 * With Firebase Firestore integration
 */

import { Timestamp } from 'firebase/firestore';

// ============================================
// CORE ENUMS & CONSTANTS
// ============================================

export type UserRole = 'student' | 'faculty' | 'staff' | 'organization' | 'guest';

export type OrganizationType = 'club' | 'committee' | 'department' | 'student_group' | 'society';

export type VerificationStatus = 'pending' | 'verified' | 'rejected';

export type BadgeRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// ============================================
// EVENT CATEGORIES (15 Categories)
// ============================================

export type EventCategoryId =
    | 'music'
    | 'sports'
    | 'art'
    | 'food'
    | 'tech'
    | 'party'
    | 'workshop'
    | 'conference'
    | 'networking'
    | 'theater'
    | 'fitness'
    | 'outdoor'
    | 'education'
    | 'charity'
    | 'gaming';

export interface EventCategory {
    id: EventCategoryId;
    name: string;
    icon: string;
    emoji: string;
    color: string;
    lightColor: string;
    gradient: [string, string];
    description: string;
}

// ============================================
// BADGE SYSTEM (20+ Badges)
// ============================================

export type BadgeId =
    // Participation Badges
    | 'first_event'
    | 'early_bird'
    | 'active_participant'
    | 'event_master'
    | 'legend'
    // Category Badges
    | 'tech_enthusiast'
    | 'music_lover'
    | 'sports_fan'
    | 'art_connoisseur'
    // Social Badges
    | 'social_butterfly'
    | 'influencer'
    // Streak Badges
    | 'week_warrior'
    | 'month_master'
    // Special Badges
    | 'punctual'
    | 'explorer'
    | 'diverse'
    // Organizer Badges
    | 'first_organizer'
    | 'event_creator'
    // Milestone Badges
    | 'top_10'
    | 'point_collector';

export interface BadgeRequirement {
    type: 'events_attended' | 'events_registered' | 'category_events' | 'friends_invited'
    | 'friend_conversions' | 'streak_days' | 'monthly_consistency' | 'punctuality'
    | 'unique_orgs' | 'all_categories' | 'events_organized' | 'leaderboard_rank' | 'total_points';
    count?: number;
    category?: EventCategoryId;
    rank?: number;
    weeks?: number;
}

export interface Badge {
    id: BadgeId;
    name: string;
    description: string;
    icon: string;
    color: string;
    requirement: BadgeRequirement;
    points: number;
    rarity: BadgeRarity;
}

export interface UserBadge {
    badgeId: BadgeId;
    earnedAt: Timestamp;
    progress?: number;
}

// ============================================
// USER TYPES
// ============================================

export interface UserProfile {
    // Common fields
    name: string;
    avatar?: string;
    phone?: string;

    // Campus user fields (student/faculty/staff)
    campusId?: string;
    registrationNumber?: string;
    department?: string;
    year?: number;
    designation?: string;
    employeeId?: string;
    staffId?: string;

    // Organization fields
    organizationName?: string;
    organizationType?: OrganizationType;
    contactPerson?: string;
    aboutOrganization?: string;
}

export interface UserStats {
    totalPoints: number;
    eventsAttended: number;
    eventsRegistered: number;
    currentStreak: number;
    longestStreak: number;
    currentRank: number;
    badgesEarned: number;
    organizationsFollowing: number;
    lastActive: Timestamp;

    // Category-specific counts
    categoryStats?: Record<EventCategoryId, number>;
}

export interface UserPreferences {
    interests: EventCategoryId[];
    notifications: boolean;
    emailUpdates: boolean;
    theme: 'light' | 'dark' | 'system';
}

export interface User {
    uid: string;
    email: string;
    role: UserRole;
    profileComplete: boolean;
    onboardingComplete: boolean;
    profile: UserProfile;
    stats: UserStats;
    preferences: UserPreferences;
    badges: UserBadge[];
    following: string[]; // Organization IDs
    friends: string[]; // User IDs
    fcmToken?: string; // Push notification token
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// ============================================
// ORGANIZATION TYPES
// ============================================

export interface OrganizationBranding {
    logo?: string;
    coverImage?: string;
    primaryColor?: string;
    secondaryColor?: string;
}

export interface OrganizationVerification {
    status: VerificationStatus;
    documents: string[];
    verifiedAt?: Timestamp;
    verifiedBy?: string;
}

export interface OrganizationStats {
    totalEvents: number;
    totalAttendees: number;
    avgRating: number;
    followers: number;
    eventsThisMonth: number;
}

export interface OrganizationSocial {
    website?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
}

export interface OrganizationMember {
    userId: string;
    role: 'admin' | 'moderator' | 'member';
    joinedAt: Timestamp;
    permissions: string[];
}

export interface Organization {
    id: string;
    name: string;
    slug: string;
    type: OrganizationType;
    description: string;
    branding: OrganizationBranding;
    verification: OrganizationVerification;
    admins: string[];
    members: OrganizationMember[];
    stats: OrganizationStats;
    social: OrganizationSocial;
    isActive: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// ============================================
// EVENT TYPES
// ============================================

export type EventStatus = 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';

export type EligibilityType = 'open' | 'students_only' | 'faculty_only' | 'department_specific' | 'campus_only';

export interface EventSchedule {
    startDate: Timestamp;
    endDate: Timestamp;
    timezone: string;
    duration: number; // minutes
}

export interface EventLocation {
    venue: string;
    room?: string;
    buildingId?: string;
    address?: string;
    isOnline: boolean;
    meetLink?: string;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
}

export interface EventCapacity {
    max: number;
    registered: number;
    attended: number;
    waitlistEnabled: boolean;
    waitlistCount: number;
}

export interface EventEligibility {
    type: EligibilityType;
    allowedDepartments?: string[];
    allowedYears?: number[];
    allowGuests: boolean;
}

export interface EventRegistrationConfig {
    required: boolean;
    deadline?: Timestamp;
    autoApprove: boolean;
    requiresApproval: boolean;
}

export interface EventRewards {
    points: number;
    bonusBadges?: BadgeId[];
}

export interface Event {
    id: string;
    organizationId: string;

    // Basic Info
    title: string;
    subtitle?: string;
    description: string;
    category: EventCategoryId;
    tags: string[];

    // Media
    image: string;
    images?: string[];

    // Schedule & Location
    schedule: EventSchedule;
    location: EventLocation;

    // Capacity & Eligibility
    capacity: EventCapacity;
    eligibility: EventEligibility;

    // Registration
    registration: EventRegistrationConfig;

    // Rewards
    rewards: EventRewards;

    // Status & Visibility
    status: EventStatus;
    isFeatured: boolean;
    isPublic: boolean;

    // Analytics
    views: number;
    interested: number;

    // QR System
    qrSecret: string;

    // Meta
    createdBy: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface EventWithOrg extends Event {
    organization: Organization;
}

// ============================================
// REGISTRATION TYPES
// ============================================

export type RegistrationStatus = 'registered' | 'waitlisted' | 'attended' | 'cancelled' | 'no_show';

export interface Registration {
    id: string;
    eventId: string;
    userId: string;
    organizationId: string;
    status: RegistrationStatus;

    // QR System
    qrCodeId: string;
    qrExpiry: Timestamp;

    // Check-in
    checkInTime?: Timestamp;
    scannedBy?: string;

    // Points
    pointsEarned?: number;
    badgesUnlocked?: BadgeId[];

    // Feedback
    rating?: number;
    feedback?: string;

    registeredAt: Timestamp;
    updatedAt: Timestamp;
}

export interface RegistrationWithDetails extends Registration {
    event: Event;
    user: User;
}

// ============================================
// LEADERBOARD TYPES
// ============================================

export type LeaderboardPeriod = 'all-time' | 'semester' | 'month' | 'week';

export interface LeaderboardEntry {
    rank: number;
    userId: string;
    userName: string;
    userAvatar?: string;
    department?: string;
    points: number;
    eventsAttended: number;
    badgesCount: number;
    change: number; // Rank change
}

export interface Leaderboard {
    type: LeaderboardPeriod;
    department?: string;
    year?: number;
    entries: LeaderboardEntry[];
    totalParticipants: number;
    updatedAt: Timestamp;
}

// Global leaderboard document structure
export interface GlobalLeaderboard {
    topUsers: LeaderboardEntry[];
    lastUpdated: Timestamp;
}

// ============================================
// MERCHANDISE & REWARDS
// ============================================

export type MerchandiseCategory = 'sticker' | 'badge' | 'merch' | 'pass' | 'perk' | 'voucher';

export interface Merchandise {
    id: string;
    organizationId: string;
    name: string;
    description: string;
    image: string;
    category: MerchandiseCategory;
    pointsCost: number;
    stock: number;
    available: boolean;
    featured: boolean;
    createdAt: Timestamp;
}

export type RedemptionStatus = 'pending' | 'approved' | 'ready' | 'collected' | 'rejected';

export interface Redemption {
    id: string;
    userId: string;
    merchandiseId: string;
    organizationId: string;
    pointsSpent: number;
    status: RedemptionStatus;
    qrCode: string;
    redeemedAt: Timestamp;
    collectedAt?: Timestamp;
}

// ============================================
// NOTIFICATION TYPES
// ============================================

export type NotificationType =
    | 'event_reminder'
    | 'registration_confirmed'
    | 'registration_cancelled'
    | 'waitlist_available'
    | 'points_earned'
    | 'badge_unlocked'
    | 'event_update'
    | 'event_cancelled'
    | 'friend_activity'
    | 'leaderboard_change'
    | 'merchandise_ready'
    | 'organization_update';

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
// SOCIAL / FOMO FEATURES
// ============================================

export interface FriendAttending {
    friendId: string;
    friendName: string;
    friendAvatar?: string;
}

export interface EventSocialData {
    friendsAttending: FriendAttending[];
    liveRegistrationCount: number;
    recentRegistrations: {
        userName: string;
        timestamp: Timestamp;
    }[];
}

// ============================================
// SEARCH & FILTER TYPES
// ============================================

export interface EventFilters {
    categories?: EventCategoryId[];
    departments?: string[];
    startDate?: Date;
    endDate?: Date;
    organizations?: string[];
    tags?: string[];
    pointsMin?: number;
    pointsMax?: number;
    hasSpaceAvailable?: boolean;
    isFeatured?: boolean;
    eligibility?: EligibilityType;
}

export interface SearchQuery {
    query: string;
    filters?: EventFilters;
    sortBy?: 'date' | 'popularity' | 'points' | 'relevance';
    sortOrder?: 'asc' | 'desc';
    limit?: number;
    offset?: number;
}

export interface SearchResult<T> {
    items: T[];
    total: number;
    hasMore: boolean;
}

// ============================================
// ANALYTICS TYPES
// ============================================

export interface EventAnalytics {
    eventId: string;

    // Registration
    totalRegistrations: number;
    totalWaitlist: number;
    registrationsByDate: { date: string; count: number }[];

    // Attendance
    totalAttended: number;
    attendanceRate: number;
    noShowRate: number;

    // Demographics
    byDepartment: { department: string; count: number }[];
    byYear: { year: number; count: number }[];

    // Engagement
    averageRating: number;
    totalFeedback: number;

    // Traffic
    totalViews: number;
    conversionRate: number;
}

// ============================================
// YEARLY WRAP
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
        category: EventCategoryId;
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
        department: number;
        percentile: number;
    };
    highlights: {
        firstEvent?: string;
        favoriteEvent?: string;
        longestEvent?: string;
    };
    generatedAt: Timestamp;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: any;
    };
    message?: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

// ============================================
// FORM DATA TYPES
// ============================================

export interface SignupFormData {
    email: string;
    password: string;
    role: UserRole;
    profile: Partial<UserProfile>;
}

export interface EventFormData {
    title: string;
    subtitle?: string;
    description: string;
    category: EventCategoryId;
    tags: string[];
    image: string;
    schedule: {
        startDate: Date;
        endDate: Date;
    };
    location: Partial<EventLocation>;
    capacity: number;
    eligibility: EventEligibility;
    registration: EventRegistrationConfig;
    rewards: EventRewards;
    isPublic: boolean;
}

// ============================================
// NAVIGATION TYPES (Mobile)
// ============================================

export type RootStackParamList = {
    // Auth
    Login: undefined;
    Signup: undefined;
    Interests: undefined;

    // Main Tabs
    Home: undefined;
    Explore: undefined;
    Tickets: undefined;
    Profile: undefined;

    // Details
    EventDetail: { eventId: string };
    OrganizationDetail: { organizationId: string };
    UserProfile: { userId: string };

    // Modals
    QRCode: { registrationId: string };
    QRScanner: undefined;
    Filters: { currentFilters?: EventFilters };

    // Other
    Leaderboard: undefined;
    Rewards: undefined;
    Settings: undefined;
    Notifications: undefined;
};

// ============================================
// UTILITY TYPES
// ============================================

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type WithId<T> = T & { id: string };
