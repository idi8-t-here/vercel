# 🚀 Complete Setup Guide for Get-Vercel-preview-url Action

This guide will walk you through setting up the Get-Vercel-preview-url GitHub Action step by step.

## 📋 Prerequisites

- A GitHub repository
- A Vercel account
- A Vercel project connected to your repository

## 🔑 Step 1: Get Your Vercel Tokens

### 1.1 Get Vercel API Token

1. **Go to Vercel Dashboard**: https://vercel.com/account/tokens
2. **Click "Create Token"**
3. **Give it a name** (e.g., "GitHub Actions")
4. **Select scopes**:
   - ✅ `Deployment` (required)
   - ✅ `Project` (required)
   - ✅ `Team` (if using teams)
5. **Click "Create"**
6. **Copy the token** (you won't see it again!)

### 1.2 Get Your Project ID

**Method A: From Vercel Dashboard**
1. Go to your project in Vercel
2. Click on **Settings** tab
3. Scroll down to **General** section
4. Copy the **Project ID**

**Method B: Using Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel projects ls
```

### 1.3 Get Your Team ID (Optional)

**Only needed if you're using Vercel Teams**

1. Go to https://vercel.com/account
2. Click on your team name
3. Copy the **Team ID** from the URL or settings

**If you're not using teams, you can skip this or use `null`**

## 🔧 Step 2: Set Up GitHub Repository Secrets

### 2.1 Go to Your Repository Settings

1. Go to your GitHub repository
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**

### 2.2 Add the Required Secrets

Click **"New repository secret"** for each of these:

#### `VERCEL_TOKEN`
- **Name**: `VERCEL_TOKEN`
- **Value**: Your Vercel API token from Step 1.1

#### `VERCEL_PROJECT_ID`
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: Your project ID from Step 1.2

#### `VERCEL_TEAM_ID` (Optional)
- **Name**: `VERCEL_TEAM_ID`
- **Value**: Your team ID from Step 1.3 (or `null` if not using teams)

## 🚀 Step 3: Deploy to Vercel

### 3.1 Connect Repository to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings**:
   - Framework Preset: `Create React App`
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `build` (default)
5. **Click "Deploy"**

### 3.2 Verify Deployment

1. Wait for the first deployment to complete
2. Note your **production URL** (e.g., `https://your-project.vercel.app`)
3. Test that your React app loads correctly

## 🔄 Step 4: Test the GitHub Action

### 4.1 Push to Main Branch

```bash
git add .
git commit -m "Initial setup for Vercel preview URL action"
git push origin main
```

### 4.2 Check the Action

1. **Go to your GitHub repository**
2. **Click "Actions" tab**
3. **Look for "Test Vercel Preview URL Action"**
4. **Click on the running workflow**
5. **Check the logs** for any errors

### 4.3 Expected Output

If everything is set up correctly, you should see:

```
Vercel Preview URL: https://your-project-git-main-yourusername.vercel.app
Deployment URL: https://your-project.vercel.app
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### ❌ "Invalid Vercel token"
**Solution**: 
- Check that your token is correct
- Ensure token has proper permissions
- Try creating a new token

#### ❌ "Project not found"
**Solution**:
- Verify your project ID is correct
- Ensure the project exists in your Vercel account
- Check if you need to specify team ID

#### ❌ "Team not found"
**Solution**:
- If not using teams, set `VERCEL_TEAM_ID` to `null`
- If using teams, verify team ID is correct

#### ❌ "Action not triggering"
**Solution**:
- Check that workflow file is in `.github/workflows/`
- Verify branch name matches (main/master)
- Check GitHub Actions are enabled for the repository

#### ❌ "Build fails"
**Solution**:
- Check that `package.json` exists
- Verify all dependencies are installed
- Check for syntax errors in React code

## 📊 Understanding the Outputs

The action provides two main outputs:

### `preview-url`
- **What it is**: The preview URL for your specific deployment
- **Format**: `https://your-project-git-main-yourusername.vercel.app`
- **Use case**: Share with team members for review

### `deployment-url`
- **What it is**: The main deployment URL
- **Format**: `https://your-project.vercel.app`
- **Use case**: Production URL

## 🔧 Customization Options

### Modify Trigger Conditions

Edit `.github/workflows/test-vercel-preview.yml`:

```yaml
on:
  push:
    branches: [ main, master, develop ]  # Add more branches
  pull_request:
    branches: [ main, master ]           # Add PR triggers
```

### Add Notifications

Add to your workflow:

```yaml
- name: Send Slack notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: "Vercel Preview: ${{ steps.vercel-preview.outputs.preview-url }}"
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Customize Build Process

Modify the build step:

```yaml
- name: Build React app
  run: |
    npm ci
    npm run build
    echo "Build completed!"
  env:
    REACT_APP_VERSION: ${{ github.sha }}
    REACT_APP_BUILD_TIME: ${{ github.event.head_commit.timestamp }}
    REACT_APP_CUSTOM_VAR: "custom_value"
```

## 🎯 Advanced Usage

### Using with Multiple Environments

Create separate workflows for different environments:

```yaml
# .github/workflows/deploy-staging.yml
- name: Get Vercel Preview URL
  uses: ViktorJT/Get-Vercel-preview-url@v1.0.0
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN_STAGING }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID_STAGING }}
```

### Using with Custom Domains

If you have custom domains, the action will still work and provide the preview URL.

### Using with Vercel Teams

If using Vercel Teams:
1. Ensure your token has team access
2. Set the `VERCEL_TEAM_ID` secret
3. The action will fetch team-specific preview URLs

## 📞 Support

If you encounter issues:

1. **Check the action logs** in GitHub Actions
2. **Verify your tokens** are correct
3. **Test manually** using Vercel CLI
4. **Check the action repository**: https://github.com/ViktorJT/Get-Vercel-preview-url

## 🎉 Success!

Once everything is working, you'll have:
- ✅ Automatic preview URL generation on every push
- ✅ Beautiful React app deployed to Vercel
- ✅ Secure token management
- ✅ Detailed action summaries

Your workflow will now automatically fetch and display Vercel preview URLs every time you push to the main branch! 