/**
 * CampusPulse AIOS - Unified Constants
 * Shared between Web (Next.js) and Mobile (Expo)
 */

import { EventCategory, EventCategoryId, Badge, BadgeId, BadgeRarity } from '../types';

// ============================================
// EVENT CATEGORIES (15 Categories)
// ============================================

export const EVENT_CATEGORIES: EventCategory[] = [
    {
        id: 'music',
        name: 'Music',
        icon: 'music',
        emoji: '🎵',
        color: '#FF6B35',
        lightColor: '#FFF4F0',
        gradient: ['#FF6B35', '#E64A19'],
        description: 'Concerts, live performances, and music festivals',
    },
    {
        id: 'sports',
        name: 'Sports',
        icon: 'trophy',
        emoji: '⚽',
        color: '#00BFA5',
        lightColor: '#E0F7F4',
        gradient: ['#00BFA5', '#009985'],
        description: 'Games, tournaments, and athletic events',
    },
    {
        id: 'art',
        name: 'Art',
        icon: 'palette',
        emoji: '🎨',
        color: '#6C63FF',
        lightColor: '#F3F0FF',
        gradient: ['#6C63FF', '#4A42CC'],
        description: 'Exhibitions, galleries, and creative showcases',
    },
    {
        id: 'food',
        name: 'Food & Drink',
        icon: 'utensils',
        emoji: '🍔',
        color: '#F44336',
        lightColor: '#FFEBEE',
        gradient: ['#F44336', '#D32F2F'],
        description: 'Food festivals, tastings, and culinary events',
    },
    {
        id: 'tech',
        name: 'Technology',
        icon: 'laptop',
        emoji: '💻',
        color: '#2196F3',
        lightColor: '#E3F2FD',
        gradient: ['#2196F3', '#1565C0'],
        description: 'Tech talks, hackathons, and innovation showcases',
    },
    {
        id: 'party',
        name: 'Nightlife',
        icon: 'party-popper',
        emoji: '🎉',
        color: '#E91E63',
        lightColor: '#FCE4EC',
        gradient: ['#E91E63', '#C2185B'],
        description: 'Parties, clubs, and nightlife events',
    },
    {
        id: 'workshop',
        name: 'Workshop',
        icon: 'wrench',
        emoji: '🛠️',
        color: '#FF9800',
        lightColor: '#FFF3E0',
        gradient: ['#FF9800', '#EF6C00'],
        description: 'Hands-on learning and skill-building sessions',
    },
    {
        id: 'conference',
        name: 'Conference',
        icon: 'presentation',
        emoji: '📊',
        color: '#607D8B',
        lightColor: '#ECEFF1',
        gradient: ['#607D8B', '#455A64'],
        description: 'Professional conferences and summits',
    },
    {
        id: 'networking',
        name: 'Networking',
        icon: 'users',
        emoji: '🤝',
        color: '#9C27B0',
        lightColor: '#F3E5F5',
        gradient: ['#9C27B0', '#7B1FA2'],
        description: 'Professional meetups and social mixers',
    },
    {
        id: 'theater',
        name: 'Theater',
        icon: 'drama',
        emoji: '🎭',
        color: '#795548',
        lightColor: '#EFEBE9',
        gradient: ['#795548', '#5D4037'],
        description: 'Plays, musicals, and theatrical performances',
    },
    {
        id: 'fitness',
        name: 'Fitness',
        icon: 'dumbbell',
        emoji: '💪',
        color: '#4CAF50',
        lightColor: '#E8F5E9',
        gradient: ['#4CAF50', '#388E3C'],
        description: 'Workout sessions, yoga, and fitness classes',
    },
    {
        id: 'outdoor',
        name: 'Outdoor',
        icon: 'mountain',
        emoji: '🏕️',
        color: '#8BC34A',
        lightColor: '#F1F8E9',
        gradient: ['#8BC34A', '#689F38'],
        description: 'Hiking, camping, and outdoor adventures',
    },
    {
        id: 'education',
        name: 'Education',
        icon: 'book-open',
        emoji: '📚',
        color: '#3F51B5',
        lightColor: '#E8EAF6',
        gradient: ['#3F51B5', '#303F9F'],
        description: 'Lectures, seminars, and educational events',
    },
    {
        id: 'charity',
        name: 'Charity',
        icon: 'heart',
        emoji: '❤️',
        color: '#FF5722',
        lightColor: '#FBE9E7',
        gradient: ['#FF5722', '#E64A19'],
        description: 'Fundraisers and social impact events',
    },
    {
        id: 'gaming',
        name: 'Gaming',
        icon: 'gamepad-2',
        emoji: '🎮',
        color: '#00BCD4',
        lightColor: '#E0F7FA',
        gradient: ['#00BCD4', '#0097A7'],
        description: 'Gaming tournaments and esports events',
    },
];

// ============================================
// BADGE SYSTEM (20+ Badges)
// ============================================

export const BADGES: Badge[] = [
    // Participation Badges
    {
        id: 'first_event',
        name: 'First Step',
        description: 'Attended your first event',
        icon: '🎯',
        color: '#7C3AED',
        requirement: { type: 'events_attended', count: 1 },
        points: 10,
        rarity: 'common',
    },
    {
        id: 'early_bird',
        name: 'Early Bird',
        description: 'Registered for 5 events',
        icon: '🐦',
        color: '#F59E0B',
        requirement: { type: 'events_registered', count: 5 },
        points: 25,
        rarity: 'common',
    },
    {
        id: 'active_participant',
        name: 'Active Participant',
        description: 'Attended 10 events',
        icon: '⚡',
        color: '#10B981',
        requirement: { type: 'events_attended', count: 10 },
        points: 50,
        rarity: 'uncommon',
    },
    {
        id: 'event_master',
        name: 'Event Master',
        description: 'Attended 25 events',
        icon: '🏆',
        color: '#EF4444',
        requirement: { type: 'events_attended', count: 25 },
        points: 100,
        rarity: 'rare',
    },
    {
        id: 'legend',
        name: 'Campus Legend',
        description: 'Attended 50 events',
        icon: '👑',
        color: '#EC4899',
        requirement: { type: 'events_attended', count: 50 },
        points: 250,
        rarity: 'legendary',
    },

    // Category-Specific Badges
    {
        id: 'tech_enthusiast',
        name: 'Tech Enthusiast',
        description: 'Attended 5 tech events',
        icon: '💻',
        color: '#3B82F6',
        requirement: { type: 'category_events', category: 'tech', count: 5 },
        points: 50,
        rarity: 'uncommon',
    },
    {
        id: 'music_lover',
        name: 'Music Lover',
        description: 'Attended 5 music events',
        icon: '🎵',
        color: '#EC4899',
        requirement: { type: 'category_events', category: 'music', count: 5 },
        points: 50,
        rarity: 'uncommon',
    },
    {
        id: 'sports_fan',
        name: 'Sports Fan',
        description: 'Attended 5 sports events',
        icon: '⚽',
        color: '#10B981',
        requirement: { type: 'category_events', category: 'sports', count: 5 },
        points: 50,
        rarity: 'uncommon',
    },
    {
        id: 'art_connoisseur',
        name: 'Art Connoisseur',
        description: 'Attended 5 art events',
        icon: '🎨',
        color: '#F59E0B',
        requirement: { type: 'category_events', category: 'art', count: 5 },
        points: 50,
        rarity: 'uncommon',
    },

    // Social Badges
    {
        id: 'social_butterfly',
        name: 'Social Butterfly',
        description: 'Invited 10 friends to events',
        icon: '🦋',
        color: '#A855F7',
        requirement: { type: 'friends_invited', count: 10 },
        points: 75,
        rarity: 'rare',
    },
    {
        id: 'influencer',
        name: 'Campus Influencer',
        description: '25 friends attended events you shared',
        icon: '🌟',
        color: '#EAB308',
        requirement: { type: 'friend_conversions', count: 25 },
        points: 150,
        rarity: 'epic',
    },

    // Streak Badges
    {
        id: 'week_warrior',
        name: 'Week Warrior',
        description: 'Attended events 7 days in a row',
        icon: '🔥',
        color: '#EF4444',
        requirement: { type: 'streak_days', count: 7 },
        points: 100,
        rarity: 'rare',
    },
    {
        id: 'month_master',
        name: 'Month Master',
        description: 'Attended at least one event every week for a month',
        icon: '📅',
        color: '#8B5CF6',
        requirement: { type: 'monthly_consistency', weeks: 4 },
        points: 200,
        rarity: 'epic',
    },

    // Special Badges
    {
        id: 'punctual',
        name: 'Always On Time',
        description: 'Checked in within 5 minutes for 10 events',
        icon: '⏰',
        color: '#06B6D4',
        requirement: { type: 'punctuality', count: 10 },
        points: 75,
        rarity: 'rare',
    },
    {
        id: 'explorer',
        name: 'Explorer',
        description: 'Attended events from 10 different organizations',
        icon: '🗺️',
        color: '#14B8A6',
        requirement: { type: 'unique_orgs', count: 10 },
        points: 100,
        rarity: 'rare',
    },
    {
        id: 'diverse',
        name: 'Diverse Interests',
        description: 'Attended events from all 15 categories',
        icon: '🌈',
        color: '#F97316',
        requirement: { type: 'all_categories' },
        points: 150,
        rarity: 'epic',
    },

    // Organizer Badges
    {
        id: 'first_organizer',
        name: 'First Organizer',
        description: 'Organized your first event',
        icon: '🎪',
        color: '#7C3AED',
        requirement: { type: 'events_organized', count: 1 },
        points: 50,
        rarity: 'uncommon',
    },
    {
        id: 'event_creator',
        name: 'Event Creator',
        description: 'Organized 5 successful events',
        icon: '🎬',
        color: '#EC4899',
        requirement: { type: 'events_organized', count: 5 },
        points: 200,
        rarity: 'epic',
    },

    // Milestone Badges
    {
        id: 'top_10',
        name: 'Top 10',
        description: 'Reached top 10 on leaderboard',
        icon: '🥇',
        color: '#EAB308',
        requirement: { type: 'leaderboard_rank', rank: 10 },
        points: 300,
        rarity: 'legendary',
    },
    {
        id: 'point_collector',
        name: 'Point Collector',
        description: 'Earned 1000 points',
        icon: '💎',
        color: '#6366F1',
        requirement: { type: 'total_points', count: 1000 },
        points: 0,
        rarity: 'epic',
    },
];

// ============================================
// RARITY COLORS
// ============================================

export const RARITY_COLORS: Record<BadgeRarity, string> = {
    common: '#94A3B8',
    uncommon: '#10B981',
    rare: '#3B82F6',
    epic: '#A855F7',
    legendary: '#F59E0B',
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getCategoryById = (id: EventCategoryId): EventCategory | undefined => {
    return EVENT_CATEGORIES.find(cat => cat.id === id);
};

export const getCategoryColor = (id: EventCategoryId): string => {
    return getCategoryById(id)?.color || '#6B7280';
};

export const getCategoryIcon = (id: EventCategoryId): string => {
    return getCategoryById(id)?.icon || 'tag';
};

export const getCategoryEmoji = (id: EventCategoryId): string => {
    return getCategoryById(id)?.emoji || '📌';
};

export const getCategoryLightColor = (id: EventCategoryId): string => {
    return getCategoryById(id)?.lightColor || '#F3F4F6';
};

export const getBadgeById = (id: BadgeId): Badge | undefined => {
    return BADGES.find(badge => badge.id === id);
};

export const getBadgesByRarity = (rarity: BadgeRarity): Badge[] => {
    return BADGES.filter(badge => badge.rarity === rarity);
};

export const getRarityColor = (rarity: BadgeRarity): string => {
    return RARITY_COLORS[rarity];
};

// ============================================
// DEPARTMENT OPTIONS
// ============================================

export const DEPARTMENTS = [
    'Computer Science',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Information Technology',
    'Chemical Engineering',
    'Biotechnology',
    'MBA',
    'MCA',
    'Physics',
    'Chemistry',
    'Mathematics',
    'English',
    'Economics',
    'Other',
];

// ============================================
// YEAR OPTIONS
// ============================================

export const YEARS_OF_STUDY = [
    { value: 1, label: '1st Year' },
    { value: 2, label: '2nd Year' },
    { value: 3, label: '3rd Year' },
    { value: 4, label: '4th Year' },
    { value: 5, label: '5th Year' },
    { value: 6, label: 'Postgraduate' },
];

// ============================================
// USER ROLES
// ============================================

export const USER_ROLES = [
    { id: 'student', label: 'Student', description: 'Discover and attend campus events' },
    { id: 'organization', label: 'Organization', description: 'Host events and manage analytics' },
    { id: 'faculty', label: 'Faculty', description: 'Access exclusive faculty events' },
    { id: 'staff', label: 'Staff', description: 'Join campus community events' },
    { id: 'guest', label: 'Guest', description: 'Browse public events' },
];

// ============================================
// ORGANIZATION TYPES
// ============================================

export const ORGANIZATION_TYPES = [
    { id: 'club', label: 'Club', description: 'Student-led interest groups' },
    { id: 'committee', label: 'Committee', description: 'Official campus committees' },
    { id: 'department', label: 'Department', description: 'Academic departments' },
    { id: 'student_group', label: 'Student Group', description: 'Informal student collectives' },
    { id: 'society', label: 'Society', description: 'Professional or academic societies' },
];

// ============================================
// THEME COLORS
// ============================================

export const THEME = {
    colors: {
        primary: '#FF6B35',
        secondary: '#6C63FF',
        tertiary: '#00BFA5',
        accent: {
            orange: '#F59E0B',
            pink: '#EC4899',
            blue: '#3B82F6',
            purple: '#7C3AED',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        // Backgrounds
        background: {
            primary: '#0F172A',
            secondary: '#1E293B',
            tertiary: '#334155',
        },
        surface: {
            primary: '#1E293B',
            secondary: '#334155',
            elevated: '#475569',
        },

        // Text
        text: {
            primary: '#F8FAFC',
            secondary: '#CBD5E1',
            tertiary: '#94A3B8',
            muted: '#64748B',
        },

        // Borders
        border: {
            light: '#334155',
            default: '#475569',
            dark: '#64748B',
        },
    },

    // Spacing
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        '2xl': 48,
        '3xl': 64,
    },

    // Border Radius
    borderRadius: {
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
        full: 9999,
    },

    // Shadows
    shadows: {
        card: '0 2px 12px rgba(0,0,0,0.08)',
        primaryGlow: '0 4px 12px rgba(255,107,53,0.35)',
        floating: '0 8px 16px rgba(0,0,0,0.12)',
        sheet: '0 -4px 12px rgba(0,0,0,0.1)',
    },
};

// ============================================
// POINTS CONFIG
// ============================================

export const POINTS_CONFIG = {
    eventAttendance: 10,
    eventAttendanceBonus: {
        featured: 5,
        rare: 10,
        longDuration: 5, // > 3 hours
    },
    earlyCheckIn: 5, // Within first 5 minutes
    feedback: 5,
    referral: 10, // When referred friend attends
    firstEventBonus: 20,
};

export default {
    EVENT_CATEGORIES,
    BADGES,
    RARITY_COLORS,
    DEPARTMENTS,
    YEARS_OF_STUDY,
    USER_ROLES,
    ORGANIZATION_TYPES,
    THEME,
    POINTS_CONFIG,
};
