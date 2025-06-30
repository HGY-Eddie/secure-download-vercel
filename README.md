# Secure Download with Email Verification (Vercel Version)

## 🧩 Setup Instructions

1. Replace `.env` with your own configuration:
   - SECRET_KEY: any random string (e.g., from https://generate-random.org)
   - FILE_URL: your actual file download link (can be from S3, Google Drive direct link, etc.)
   - EXPIRES_MINUTES: how long the link should be valid (default: 30)

2. Connect this project to Vercel:
   - Upload to GitHub or use Vercel CLI to deploy
   - Vercel will auto-detect /api/ folder as serverless functions

3. Open `index.html` in your Vercel domain:
   - Ask users to enter their email
   - If authorized, they’ll get a one-time download link

✅ Done!