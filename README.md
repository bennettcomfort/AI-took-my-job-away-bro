# AI Chat App

A modern, real-time AI chat application built with Next.js, React, and TypeScript. Chat with an AI assistant powered by OpenAI's GPT models.

## Features

- Real-time chat interface with AI assistant
- Clean and modern UI with smooth animations
- Markdown support for AI responses
- Mobile-responsive design
- TypeScript for type safety
- Built with Next.js 14 and React 18

## Screenshots

The app features:
- Beautiful gradient UI design
- Message history with user and AI messages
- Loading animations while waiting for responses
- Markdown rendering for code blocks and formatting

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- OpenAI API key

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd AI-took-my-job-away-bro
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your OpenAI API key:

```
OPENAI_API_KEY=your_actual_api_key_here
```

To get an API key:
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Create a new API key
4. Copy and paste it into your `.env.local` file

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
AI-took-my-job-away-bro/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chat
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main chat page
├── components/
│   ├── ChatInput.tsx             # Input component
│   └── ChatMessage.tsx           # Message display component
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## Usage

1. Type your message in the input field at the bottom
2. Press Enter or click the "Send" button
3. Wait for the AI assistant to respond
4. Continue the conversation naturally

## Customization

### Change AI Model

Edit `app/api/chat/route.ts` and modify the model parameter:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // Change to gpt-4, gpt-3.5-turbo, etc.
  // ...
})
```

### Adjust AI Temperature

In the same file, modify the temperature (0.0-2.0):

```typescript
temperature: 0.7, // Lower = more focused, Higher = more creative
```

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline styles in respective component files
- To add Tailwind CSS, run `npm install -D tailwindcss postcss autoprefixer` and configure

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your `OPENAI_API_KEY` environment variable in Vercel settings
4. Deploy

### Deploy to Other Platforms

This app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Docker

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **OpenAI API** - AI chat capabilities
- **Marked** - Markdown parsing and rendering

## Troubleshooting

### "OpenAI API key not configured" error

Make sure you've created a `.env.local` file with your API key:
```
OPENAI_API_KEY=sk-...
```

### Rate limit errors

OpenAI has rate limits based on your account tier. Consider:
- Upgrading your OpenAI account
- Adding rate limiting to your app
- Implementing caching

### Port already in use

If port 3000 is in use, run on a different port:
```bash
npm run dev -- -p 3001
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning and development.

## Support

If you have questions or need help:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [OpenAI API documentation](https://platform.openai.com/docs)
- Open an issue in this repository
