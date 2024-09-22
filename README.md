This is a simple app that allows you to search for places using Google Maps API.

## Getting Started
## Environment Variables

You need to set the `GOOGLE_API_KEY` environment variable to your Google Maps API key.

You can get your Google Maps API key by following these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.

Copy the API key and set it in your environment variables.

Copy `.env.example` to `.env.local` and set the `GOOGLE_API_KEY` environment variable.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.