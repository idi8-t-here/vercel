# Vercels Preview URL Testss

This repository is designed to test the [Get-Vercel-preview-url](https://github.com/marketplace/actions/get-vercel-preview-url) GitHub Action by ViktorJT.

## 🚀 Features

- **React 18** application with modern hooks and state management
- **Environment variables** support for secure token management
- **Beautiful UI** with animations and responsive design
- **GitHub Actions workflow** that fetches Vercel preview URLs
- **Automatic PR comments** with preview links
- **Detailed action summaries** with build information

## 📁 Project Structure

```
.
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Component styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── public/
│   └── index.html          # HTML template
├── .github/
│   └── workflows/
│       └── test-vercel-preview.yml  # GitHub Actions workflow
├── package.json            # React dependencies
├── vercel.json             # Vercel configuration
├── env.example             # Environment variables template
└── README.md              # This file
```

## 🛠️ Setup Instructions

**📖 For detailed step-by-step instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md)**

### Quick Setup:

1. **Get Vercel Tokens**:
   - [Vercel API Token](https://vercel.com/account/tokens)
   - [Project ID](https://vercel.com/dashboard) (from project settings)
   - [Team ID](https://vercel.com/account) (optional)

2. **Add GitHub Secrets**:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_PROJECT_ID`: Your Vercel project ID  
   - `VERCEL_TEAM_ID`: Your Vercel team ID (or `null`)

3. **Deploy to Vercel**:
   - Connect repository to Vercel
   - Push to main branch to trigger action

### Local Development:
```bash
cp env.example .env.local
npm install
npm start
```

## 🔄 How It Works

1. **Push to main/master branch** or **Create a PR**
2. **GitHub Actions triggers** the workflow
3. **Get-Vercel-preview-url action** fetches the preview URL
4. **Results are displayed** in the action logs and PR comments
5. **Summary is created** with the preview URLs

## 📋 Workflow Features

The GitHub Actions workflow includes:

- ✅ **Automatic preview URL fetching** on push/PR
- ✅ **PR comments** with preview links
- ✅ **Detailed action summaries**
- ✅ **Error handling** and status reporting
- ✅ **Multiple trigger events** (push and PR)

## 🎯 Testing the Action

### Test Scenarios:

1. **Push to main branch**:
   - Workflow will run and fetch preview URL
   - Check action logs for results

2. **Create a Pull Request**:
   - Workflow will run and comment on PR
   - Preview URL will be posted as a comment

3. **Check Action Summary**:
   - Go to Actions tab in GitHub
   - Click on the workflow run
   - View the summary for results

## 🔧 Customization

### Modify the React App

Edit `src/App.js` to test different content. The workflow will automatically fetch new preview URLs for each deployment.

### Modify the Workflow

The workflow file (`.github/workflows/test-vercel-preview.yml`) can be customized:

- Change trigger conditions
- Add additional steps
- Modify output format
- Add notifications

## 📊 Expected Outputs

The action provides these outputs:

- `preview-url`: The Vercel preview URL
- `deployment-url`: The Vercel deployment URL

## 🐛 Troubleshooting

### Common Issues:

1. **Missing Vercel Token**:
   - Ensure `VERCEL_TOKEN` secret is set correctly
   - Check token permissions in Vercel

2. **Invalid Project ID**:
   - Verify `VERCEL_PROJECT_ID` is correct
   - Check project exists and is accessible

3. **Team ID Issues**:
   - Set `VERCEL_TEAM_ID` to `null` if not using teams
   - Ensure team ID is correct if using teams

4. **Action Not Triggering**:
   - Check branch names in workflow triggers
   - Ensure workflow file is in `.github/workflows/`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: This is a test repository for the Get-Vercel-preview-url GitHub Action. The action is maintained by ViktorJT and can be found at: https://github.com/marketplace/actions/get-vercel-preview-url
# Trigger Vercel deployment - Wed Jul  9 15:08:54 EAT 2025
# Test Vercel connection - Wed Jul  9 15:11:34 EAT 2025
# Testing complete workflow - Wed Jul  9 15:23:08 EAT 2025
