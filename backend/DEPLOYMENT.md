# Backend Deployment Guide

This guide will help you deploy your MERN E-commerce backend to production.

## Prerequisites

- MongoDB Atlas account (free tier available)
- Node.js installed locally
- Git account (GitHub, GitLab, etc.)
- Deployment platform account (Render, Railway, or similar)

## Step 1: Set up MongoDB Atlas

1. Go to [(MongoDB Atlas)](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user with username and password
5. Whitelist IP addresses (0.0.0.0/0 for all IPs, or specific IPs)
6. Get your connection string from the "Connect" button
7. Update your `.env` file with the Atlas connection string:

```env

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/mern-ecom?retryWrites=true&w=majority
JWT_SECRET=your-secure-random-secret-key-change-this-in-production
PORT=5001
```

## Step 2: Prepare Code for Deployment

1. Ensure your code is pushed to GitHub
2. Verify `.env` is in `.gitignore` (never commit secrets!)
3. Test locally with MongoDB Atlas connection

## Step 3: Deploy to Render (Recommended)

### Backend Deployment

1. Go to [(Render)](https://render.com) and create an account
2. Click "New+" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: mern-ecom-backend
   - **Root Directory**: backend
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**: Add your MONGO_URI, JWT_SECRET, and PORT
5. Click "Create Web Service"
6. Wait for deployment (2-3 minutes)

### Get Your Backend URL

After deployment, Render will provide a URL like:
```
https://mern-ecom-backend.onrender.com
```

## Step 4: Update Frontend Configuration

In your frontend code, update the API base URL to point to your deployed backend:

```javascript
// Replace localhost URL with your deployed backend URL
const API_BASE_URL = 'https://shopora-ge15.onrender.com';
```

## Alternative Deployment Options

### Railway

1. Go to [(Railway)](https://railway.app)
2. Create a new project
3. Deploy from GitHub
4. Add environment variables
5. Railway will automatically detect Node.js and deploy

### Vercel (for API routes)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the backend directory
3. Follow the prompts
4. Add environment variables in Vercel dashboard

### Heroku

1. Install Heroku CLI
2. Run `heroku create`
3. Push code: `git push heroku main`
4. Set config vars: `heroku config:set MONGO_URI=... JWT_SECRET=...`
5. Scale up: `heroku ps:scale web=1`

## Environment Variables Required

Always set these in your deployment platform:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure random string for JWT tokens
- `PORT`: The port your app runs on (platforms often set this automatically)

## Testing Your Deployment

1. Test the health endpoint: `https://your-backend-url.com/`
2. Test product endpoint: `https://your-backend-url.com/api/products`
3. Test auth endpoint: `https://your-backend-url.com/api/auth/signup`

## Troubleshooting

### MongoDB Connection Issues
- Ensure IP whitelist includes 0.0.0.0/0
- Check username/password in connection string
- Verify database user has correct permissions

### Build Failures
- Check that all dependencies are in package.json
- Ensure Node.js version is compatible
- Review build logs for specific errors

### Runtime Errors
- Check environment variables are set correctly
- Verify MongoDB connection string format
- Review application logs in deployment platform

## Security Best Practices

1. **Never commit `.env` file** - Add it to `.gitignore`
2. **Use strong JWT secrets** - Generate random strings
3. **Enable HTTPS** - Most platforms provide this automatically
4. **Rate limiting** - Consider adding rate limiting to prevent abuse
5. **Input validation** - Validate all user inputs
6. **Keep dependencies updated** - Run `npm audit` regularly

## Monitoring

Set up monitoring for your deployed backend:

- **Render**: Built-in metrics and logs
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **New Relic**: APM monitoring

## Scaling

When your app grows:

1. **Database**: Upgrade MongoDB Atlas tier
2. **Backend**: Add more instances or upgrade plan
3. **CDN**: Use Cloudflare for static assets
4. **Caching**: Add Redis for session management

## Cost Estimates (Free Tier)

- **MongoDB Atlas**: Free (512MB storage)
- **Render**: Free (with limitations)
- **Railway**: $5 free credit
- **Heroku**: No longer has free tier

## Next Steps

After backend deployment:

1. Deploy the frontend (see frontend deployment guide)
2. Test the full application end-to-end
3. Set up custom domain names
4. Configure SSL certificates
5. Set up backup and monitoring

## Support

If you encounter issues:

- Check deployment platform documentation
- Review MongoDB Atlas connection guide
- Check Node.js version compatibility
- Review application logs for errors
