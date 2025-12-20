# 🚀 CampusPulse Deployment Guide

This guide covers deploying both the **Web Application** (Vercel) and **Mobile Application** (Expo).

---

## 🌐 Part 1: Deploy Web App to Vercel

### Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Your code pushed to GitHub

### Step 1: Push to GitHub

```bash
# Navigate to project root
cd E:\GIT-HACKATHON\CAMPUS-PULSE

# Initialize git if not already
git init

# Add all files
git add .

# Commit changes
git commit -m "CampusPulse - Complete Application"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/campus-pulse.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `campus-pulse` repository
4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. **Add Environment Variables** (CRITICAL!):
   Click "Environment Variables" and add each one:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyBe2nsRdYtfwMX0pTZjDy3rsr0IARv8dmk` |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `campuspulse-45c51.firebaseapp.com` |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `campuspulse-45c51` |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `campuspulse-45c51.firebasestorage.app` |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `852723037910` |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:852723037910:web:01d0e3f397c46c086afb77` |
   | `NEXT_PUBLIC_FIREBASE_DATABASE_URL` | `https://campuspulse-45c51-default-rtdb.asia-southeast1.firebasedatabase.app` |

6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment
8. Your app will be live at: `https://your-project.vercel.app`

### Step 3: Update Firebase Auth Domain

After deployment, add your Vercel domain to Firebase:

1. Go to Firebase Console → Authentication → Settings
2. Click "Authorized domains"
3. Add your Vercel URL: `your-project.vercel.app`

---

## 📱 Part 2: Deploy Mobile App with Expo

### Option A: Share via Expo Go (Easiest - for Demo)

```bash
# Navigate to mobile directory
cd E:\GIT-HACKATHON\CAMPUS-PULSE\mobile

# Install Expo CLI if needed
npm install -g expo-cli

# Start the project
npx expo start

# You'll see a QR code in the terminal
# Scan it with Expo Go app on your phone
```

### Option B: Build Standalone APK/IPA

1. **Create Expo Account**
   ```bash
   npx expo login
   # Enter your credentials
   ```

2. **Configure app.json**
   ```json
   {
     "expo": {
       "name": "CampusPulse",
       "slug": "campuspulse",
       "version": "1.0.0",
       "android": {
         "package": "com.yourname.campuspulse"
       },
       "ios": {
         "bundleIdentifier": "com.yourname.campuspulse"
       }
     }
   }
   ```

3. **Build for Android (APK)**
   ```bash
   # Using EAS Build (recommended)
   npx expo install eas-cli
   npx eas build --platform android --profile preview
   
   # This will create an APK you can download
   ```

4. **Build for iOS (requires Mac)**
   ```bash
   npx eas build --platform ios --profile preview
   ```

### Option C: Publish to Expo (for Testing)

```bash
# Publish your app to Expo's servers
npx expo publish

# Share the published link with testers
# They can open it in Expo Go
```

---

## 🔒 Part 3: Post-Deployment Security Checklist

### Firebase Security
- [ ] Verify Realtime Database rules are published
- [ ] Add Vercel domain to Firebase authorized domains
- [ ] Enable App Check (optional, for production)

### Environment Variables
- [ ] Never commit `.env.local` to GitHub
- [ ] All env vars added to Vercel
- [ ] Use different Firebase project for production (recommended)

---

## 🎉 Deployment Checklist

### Web Application
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Root directory set to `web`
- [ ] All 7 environment variables added
- [ ] Deployed successfully
- [ ] Vercel domain added to Firebase authorized domains
- [ ] Test login/signup on live site

### Mobile Application
- [ ] Expo Go working for development
- [ ] app.json configured
- [ ] APK/IPA built (if needed)
- [ ] Tested on physical device

---

## 📞 Troubleshooting

### "Firebase not configured" error
- Check all environment variables are set in Vercel
- Redeploy after adding env vars

### "Unauthorized domain" error
- Add your Vercel domain to Firebase Console → Authentication → Settings → Authorized domains

### Build fails on Vercel
- Check build logs for specific errors
- Ensure `web` folder is set as root directory

### Camera not working on mobile
- Ensure camera permissions are granted
- HTTPS is required for camera access (Vercel provides this)

---

## 🌟 Your Live URLs

After deployment:
- **Web App**: `https://campuspulse.vercel.app` (or your custom domain)
- **Mobile App**: Share via Expo Go QR code or distribute APK

---

**Congratulations! Your CampusPulse app is now live! 🎉**
