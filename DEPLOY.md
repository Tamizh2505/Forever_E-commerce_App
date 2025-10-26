# Deploying to Vercel

Your project is now configured for Vercel deployment. Here are the steps to deploy:

## Option 1: Deploy via Vercel CLI (Recommended)

### Prerequisites
- Make sure you have the Vercel CLI installed. If not, install it:
```bash
npm i -g vercel
```

### Steps
1. Login to Vercel:
```bash
vercel login
```

2. Navigate to your project root (where vercel.json is located):
```bash
cd C:\Users\Welcome\Desktop\E-commerce
```

3. Deploy your project:
```bash
vercel
```

4. Follow the prompts. For production deployment:
```bash
vercel --prod
```

## Option 2: Deploy via GitHub Integration

1. Push your changes to GitHub:
```bash
git add .
git commit -m "Configure Vercel deployment"
git push
```

2. Go to [vercel.com](https://vercel.com)

3. Sign up/Login with your GitHub account

4. Click "Add New Project"

5. Import your repository

6. Configure the project:
   - Framework Preset: Other
   - Root Directory: `./` (keep it as root)
   - Build Command: `cd frontend && npm install && npm run build`
   - Output Directory: `frontend/dist`

7. Click "Deploy"

## Project Configuration

The project is configured in `vercel.json`:
- Builds from the `frontend` directory
- Outputs to `frontend/dist`
- Configured for SPA (Single Page Application) routing

## Troubleshooting

If you encounter issues:
1. Make sure all dependencies are in `frontend/package.json`
2. Ensure the `frontend/dist` folder is generated after building
3. Check that the `frontend` directory is a proper git submodule or regular directory

