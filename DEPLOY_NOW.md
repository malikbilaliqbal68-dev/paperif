# 🚀 DEPLOY TO RAILWAY - STEP BY STEP

## ✅ Code is Ready and Committed!

Your code is now committed to Git. Follow these steps:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `paperify-ai-mentor`
3. Make it Public or Private
4. Click "Create repository"

## Step 2: Push Code to GitHub

Copy and run these commands:

```bash
cd "d:\Real web - Copy"
git remote add origin https://github.com/YOUR_USERNAME/paperify-ai-mentor.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Deploy on Railway

1. Go to https://railway.app
2. Click "Login" (use GitHub)
3. Click "New Project"
4. Click "Deploy from GitHub repo"
5. Select `paperify-ai-mentor`
6. Railway will auto-deploy!

## Step 4: Add Environment Variables (Optional)

In Railway dashboard → Variables tab, add:

```
GEMINI_API_KEY=AIzaSyBAZl5UCngV2VygkKEZh_P5GJ9RiMCfyts
GEMINI_FALLBACK_KEY=AIzaSyDG1C_WCn5SXyL1_IMsthScwiTdPAem0EI
PORT=3000
```

## Step 5: Get Your URL

Railway will give you a URL like:
`https://paperify-ai-mentor.up.railway.app`

## 🎯 Test Your Deployment

Visit these URLs:
- `https://your-app.up.railway.app/` - Home
- `https://your-app.up.railway.app/ai-mentor` - AI Mentor
- `https://your-app.up.railway.app/courses` - Courses

## ✨ Features Available:

1. **Unlimited Paper Generation** - No limits!
2. **AI Mentor** - Free course roadmaps
3. **All Books** - Full access
4. **No Payment** - Everything free
5. **No Login Required** - Optional

## 🔧 If Deployment Fails:

Check Railway logs and ensure:
- Node.js version >= 18
- All dependencies installed
- PORT environment variable set

## 📞 Need Help?

Check Railway documentation: https://docs.railway.app

---

**Your code is ready! Just push to GitHub and deploy on Railway!**
