// CampusPulse - Shared Constants
// Used by both Web and Mobile applications

// ============================================
// ACADEMIC DOMAINS
// ============================================

export const DOMAINS = [
    { id: 'cse', name: 'Computer Science & Engineering', shortName: 'CSE' },
    { id: 'cse_aiml', name: 'CSE - Artificial Intelligence & ML', shortName: 'CSE-AIML' },
    { id: 'cse_ds', name: 'CSE - Data Science', shortName: 'CSE-DS' },
    { id: 'cse_cyber', name: 'CSE - Cyber Security', shortName: 'CSE-Cyber' },
    { id: 'cse_iot', name: 'CSE - Internet of Things', shortName: 'CSE-IoT' },
    { id: 'it', name: 'Information Technology', shortName: 'IT' },
    { id: 'ece', name: 'Electronics & Communication', shortName: 'ECE' },
    { id: 'eee', name: 'Electrical & Electronics', shortName: 'EEE' },
    { id: 'mech', name: 'Mechanical Engineering', shortName: 'MECH' },
    { id: 'civil', name: 'Civil Engineering', shortName: 'CIVIL' },
    { id: 'chem', name: 'Chemical Engineering', shortName: 'CHEM' },
    { id: 'bio', name: 'Biotechnology', shortName: 'BIO' },
    { id: 'bba', name: 'Bachelor of Business Administration', shortName: 'BBA' },
    { id: 'mba', name: 'Master of Business Administration', shortName: 'MBA' },
    { id: 'bca', name: 'Bachelor of Computer Applications', shortName: 'BCA' },
    { id: 'mca', name: 'Master of Computer Applications', shortName: 'MCA' },
    { id: 'bsc', name: 'Bachelor of Science', shortName: 'B.Sc' },
    { id: 'msc', name: 'Master of Science', shortName: 'M.Sc' },
    { id: 'bcom', name: 'Bachelor of Commerce', shortName: 'B.Com' },
    { id: 'mcom', name: 'Master of Commerce', shortName: 'M.Com' },
    { id: 'law', name: 'Law', shortName: 'LAW' },
    { id: 'arts', name: 'Arts & Humanities', shortName: 'ARTS' },
    { id: 'design', name: 'Design', shortName: 'DESIGN' },
    { id: 'pharmacy', name: 'Pharmacy', shortName: 'PHARMA' },
    { id: 'architecture', name: 'Architecture', shortName: 'ARCH' },
    { id: 'other', name: 'Other', shortName: 'OTHER' },
] as const;

export type DomainId = typeof DOMAINS[number]['id'];

// ============================================
// EVENT CATEGORIES
// ============================================

export const EVENT_TYPES = [
    { id: 'workshop', name: 'Workshop', icon: '🛠️', color: '#3B82F6' },
    { id: 'seminar', name: 'Seminar', icon: '📚', color: '#8B5CF6' },
    { id: 'competition', name: 'Competition', icon: '🏆', color: '#F59E0B' },
    { id: 'hackathon', name: 'Hackathon', icon: '💻', color: '#10B981' },
    { id: 'conference', name: 'Conference', icon: '🎤', color: '#6366F1' },
    { id: 'cultural', name: 'Cultural', icon: '🎭', color: '#EC4899' },
    { id: 'sports', name: 'Sports', icon: '⚽', color: '#22C55E' },
    { id: 'social', name: 'Social & Networking', icon: '🤝', color: '#F97316' },
    { id: 'meetup', name: 'Meetup', icon: '☕', color: '#14B8A6' },
] as const;

export type EventTypeId = typeof EVENT_TYPES[number]['id'];

// ============================================
// ORGANIZATION TYPES
// ============================================

export const ORGANIZATION_TYPES = [
    { id: 'club', name: 'Student Club', description: 'Interest-based student club' },
    { id: 'committee', name: 'Committee', description: 'Official campus committee' },
    { id: 'department', name: 'Department', description: 'Academic department' },
    { id: 'student_group', name: 'Student Interest Group', description: 'Informal student group' },
] as const;

// ============================================
// BADGES CONFIGURATION
// ============================================

export const BADGES = [
    {
        id: 'first_event',
        name: 'First Steps',
        description: 'Attended your first event!',
        icon: '🎉',
        rarity: 'common',
        requirement: 1,
        type: 'events',
    },
    {
        id: 'early_bird',
        name: 'Early Bird',
        description: 'Registered within first 10 spots',
        icon: '🐦',
        rarity: 'common',
        requirement: 1,
        type: 'special',
    },
    {
        id: 'event_5',
        name: 'Getting Started',
        description: 'Attended 5 events',
        icon: '⭐',
        rarity: 'common',
        requirement: 5,
        type: 'events',
    },
    {
        id: 'event_10',
        name: 'Regular',
        description: 'Attended 10 events',
        icon: '🌟',
        rarity: 'rare',
        requirement: 10,
        type: 'events',
    },
    {
        id: 'event_15',
        name: 'Enthusiast',
        description: 'Attended 15 events',
        icon: '✨',
        rarity: 'rare',
        requirement: 15,
        type: 'events',
    },
    {
        id: 'event_20',
        name: 'Event Pro',
        description: 'Attended 20 events',
        icon: '💎',
        rarity: 'epic',
        requirement: 20,
        type: 'events',
    },
    {
        id: 'event_50',
        name: 'Legend',
        description: 'Attended 50 events',
        icon: '👑',
        rarity: 'legendary',
        requirement: 50,
        type: 'events',
    },
    {
        id: 'streak_7',
        name: 'Week Warrior',
        description: '7-day attendance streak',
        icon: '🔥',
        rarity: 'rare',
        requirement: 7,
        type: 'streak',
    },
    {
        id: 'streak_14',
        name: 'Streak Master',
        description: '14-day attendance streak',
        icon: '💪',
        rarity: 'epic',
        requirement: 14,
        type: 'streak',
    },
    {
        id: 'streak_30',
        name: 'Unstoppable',
        description: '30-day attendance streak',
        icon: '🚀',
        rarity: 'legendary',
        requirement: 30,
        type: 'streak',
    },
    {
        id: 'social_butterfly',
        name: 'Social Butterfly',
        description: 'Attended events from 5 different organizations',
        icon: '🦋',
        rarity: 'rare',
        requirement: 5,
        type: 'diversity',
    },
    {
        id: 'points_100',
        name: 'Point Collector',
        description: 'Earned 100 points',
        icon: '💰',
        rarity: 'common',
        requirement: 100,
        type: 'points',
    },
    {
        id: 'points_500',
        name: 'Point Hoarder',
        description: 'Earned 500 points',
        icon: '💎',
        rarity: 'rare',
        requirement: 500,
        type: 'points',
    },
    {
        id: 'points_1000',
        name: 'Point Master',
        description: 'Earned 1000 points',
        icon: '🏆',
        rarity: 'epic',
        requirement: 1000,
        type: 'points',
    },
] as const;

// ============================================
// USER ROLES
// ============================================

export const USER_ROLES = [
    { id: 'student', name: 'Student', icon: '🎓', description: 'Campus student' },
    { id: 'faculty', name: 'Faculty', icon: '👨‍🏫', description: 'Professor or lecturer' },
    { id: 'staff', name: 'Staff', icon: '👔', description: 'Campus staff member' },
    { id: 'guest', name: 'Guest', icon: '👤', description: 'Outside visitor' },
] as const;

// ============================================
// YEARS OF STUDY
// ============================================

export const YEARS_OF_STUDY = [
    { value: 1, label: '1st Year' },
    { value: 2, label: '2nd Year' },
    { value: 3, label: '3rd Year' },
    { value: 4, label: '4th Year' },
    { value: 5, label: '5th Year (Integrated)' },
    { value: 6, label: 'Postgraduate' },
    { value: 7, label: 'Research Scholar' },
] as const;

// ============================================
// AUDIENCE TYPES
// ============================================

export const AUDIENCE_TYPES = [
    {
        id: 'open',
        name: 'Open to Everyone',
        description: 'Anyone can attend including guests from outside campus',
        icon: '🌍',
    },
    {
        id: 'campus_only',
        name: 'Campus Only',
        description: 'Only campus students, faculty, and staff',
        icon: '🏫',
    },
    {
        id: 'domain_specific',
        name: 'Specific Domains',
        description: 'Only students from selected domains',
        icon: '🎯',
    },
    {
        id: 'faculty_only',
        name: 'Faculty Only',
        description: 'Only for faculty members',
        icon: '👨‍🏫',
    },
] as const;

// ============================================
// MERCHANDISE CATEGORIES
// ============================================

export const MERCHANDISE_CATEGORIES = [
    { id: 'sticker', name: 'Sticker', icon: '🏷️' },
    { id: 'badge', name: 'Badge', icon: '📛' },
    { id: 't-shirt', name: 'T-Shirt', icon: '👕' },
    { id: 'hoodie', name: 'Hoodie', icon: '🧥' },
    { id: 'voucher', name: 'Voucher', icon: '🎫' },
    { id: 'accessory', name: 'Accessory', icon: '🎒' },
    { id: 'other', name: 'Other', icon: '📦' },
] as const;

// ============================================
// APP CONFIGURATION
// ============================================

export const APP_CONFIG = {
    name: 'CampusPulse',
    tagline: 'Your Campus Event Companion',
    description: 'Discover, Register, Attend, Earn!',
    version: '1.0.0',

    // Points configuration
    points: {
        attendEvent: 10,
        earlyBirdBonus: 5,
        fullEventBonus: 10,
        streakBonus: 2, // Per day in streak
        referralBonus: 20,
    },

    // Streak configuration
    streak: {
        minEventsPerWeek: 1,
        resetAfterDays: 7,
    },

    // Registration
    registration: {
        maxWaitlistSize: 50,
        reminderBeforeHours: [24, 2],
    },

    // Social sharing
    sharing: {
        hashtags: ['CampusPulse', 'CampusEvents', 'EventLife'],
    },
} as const;

// ============================================
// THEME COLORS
// ============================================

export const THEME_COLORS = {
    primary: '#FF6B35',
    secondary: '#6C63FF',
    tertiary: '#00BFA5',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Dark theme
    dark: {
        background: '#0F172A',
        surface: '#1E293B',
        border: 'rgba(255, 255, 255, 0.1)',
        text: '#F8FAFC',
        textSecondary: '#94A3B8',
    },

    // Light theme  
    light: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        border: '#E2E8F0',
        text: '#0F172A',
        textSecondary: '#64748B',
    },

    // Rarity colors
    rarity: {
        common: '#9CA3AF',
        rare: '#3B82F6',
        epic: '#8B5CF6',
        legendary: '#F59E0B',
    },
} as const;
