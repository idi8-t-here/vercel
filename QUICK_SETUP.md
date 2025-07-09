# 🚀 Quick Setup with Your Vercel Token

## ✅ Step 1: Add Your Vercel Token to GitHub Secrets

Your Vercel token: `qLy9GZfgOu4mL3O95DoeUXzQ`

### Add to GitHub Repository Secrets:

1. **Go to your GitHub repository**
2. **Click Settings tab**
3. **Click "Secrets and variables" → "Actions"**
4. **Click "New repository secret"**
5. **Add these secrets:**

#### Secret 1: VERCEL_TOKEN
- **Name**: `VERCEL_TOKEN`
- **Value**: `qLy9GZfgOu4mL3O95DoeUXzQ`

#### Secret 2: VERCEL_PROJECT_ID (we'll get this after creating project)
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: `TEMP_PLACEHOLDER` (we'll update this)

#### Secret 3: VERCEL_TEAM_ID (optional)
- **Name**: `VERCEL_TEAM_ID`
- **Value**: `null`

## 🚀 Step 2: Create Your First Vercel Project

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import your GitHub repository** (this one)
4. **Configure settings**:
   - Framework Preset: `Create React App`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `build`
5. **Click "Deploy"**

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login with your token
vercel login

# Deploy from current directory
vercel --yes
```

## 📋 Step 3: Get Your Project ID

After creating the project:

### From Vercel Dashboard:
1. Go to your project in Vercel
2. Click **Settings** tab
3. Scroll to **General** section
4. Copy the **Project ID**

### From Vercel CLI:
```bash
vercel projects ls
```

## 🔧 Step 4: Update GitHub Secret

1. **Go back to GitHub repository settings**
2. **Click "Secrets and variables" → "Actions"**
3. **Find `VERCEL_PROJECT_ID`**
4. **Click "Update"**
5. **Replace the placeholder with your actual Project ID**

## 🧪 Step 5: Test the Action

```bash
# Make a small change to trigger the action
echo "# Test" >> README.md
git add .
git commit -m "Test Vercel preview URL action"
git push origin main
```

## 📊 Step 6: Check Results

1. **Go to GitHub repository**
2. **Click "Actions" tab**
3. **Look for "Test Vercel Preview URL Action"**
4. **Click on the workflow run**
5. **Check the logs for preview URLs**

## 🎯 Expected Output

If everything works, you should see:
```
Vercel Preview URL: https://your-project-git-main-yourusername.vercel.app
Deployment URL: https://your-project.vercel.app
```

## 🐛 If Something Goes Wrong

### Common Issues:

1. **"Invalid token"** - Double-check the token is correct
2. **"Project not found"** - Make sure you've updated the Project ID secret
3. **"Action not triggering"** - Check that you pushed to main/master branch

### Debug Steps:

1. **Test token manually**:
   ```bash
   curl -H "Authorization: Bearer qLy9GZfgOu4mL3O95DoeUXzQ" https://api.vercel.com/v1/projects
   ```

2. **Check Vercel project exists**:
   - Go to Vercel dashboard
   - Verify project is deployed and accessible

3. **Check GitHub Actions logs**:
   - Look for specific error messages
   - Verify all secrets are set correctly

## 🎉 Success!

Once everything is working:
- ✅ Your React app will be deployed to Vercel
- ✅ GitHub Actions will fetch preview URLs on every push
- ✅ You'll get both preview and production URLs
- ✅ The action will create detailed summaries

Your workflow is now ready to automatically generate Vercel preview URLs! 🚀 