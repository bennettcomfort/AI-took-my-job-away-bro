# AI Chat App

A modern, real-time AI chat application built with Next.js, React, and TypeScript. Chat with an AI assistant powered by OpenAI's GPT models.

## Features

- **10 Unique AI Characters** - Choose from predefined personalities including pirates, scientists, chefs, philosophers, and more!
- **Custom Character Creator** - Design your own AI character with unique personality, behavior, and appearance
- Real-time chat interface with dynamic character responses
- Clean and modern UI with smooth animations and character-specific theming
- Markdown support for AI responses
- Mobile-responsive design
- TypeScript for type safety
- Built with Next.js 14 and React 18

## Available Characters

Choose from these amazing AI personalities:

1. **🤖 Default Assistant** - A helpful and friendly AI assistant
2. **🏴‍☠️ Captain Blackbeard** - A swashbuckling pirate captain who speaks in pirate lingo
3. **🧪 Dr. Einstein** - A brilliant scientist who explains concepts clearly
4. **👨‍🍳 Chef Gordon** - A passionate master chef with culinary wisdom
5. **🤔 Socrates** - An ancient Greek philosopher who asks thought-provoking questions
6. **😂 Funny Bot** - A witty comedian who loves to make you laugh
7. **✒️ Shakespeare** - A romantic poet who speaks in eloquent verse
8. **🔍 Sherlock Holmes** - A brilliant detective with sharp analytical skills
9. **💪 Coach Max** - A motivating fitness coach to inspire you
10. **🧘 Master Zen** - A peaceful zen master with calm wisdom

## Screenshots

The app features:
- Beautiful gradient UI design that changes with each character
- Interactive character selection screen
- Custom character creator with emoji and color customization
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
│   │       └── route.ts                # API endpoint for chat
│   ├── globals.css                     # Global styles
│   ├── layout.tsx                      # Root layout
│   └── page.tsx                        # Main chat page
├── components/
│   ├── ChatInput.tsx                   # Input component
│   ├── ChatMessage.tsx                 # Message display component
│   ├── CharacterSelector.tsx           # Character selection UI
│   └── CustomCharacterCreator.tsx      # Custom character creator
├── types/
│   └── character.ts                    # Character type definitions
├── .env.example                        # Environment variables template
├── next.config.js                      # Next.js configuration
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript configuration
└── README.md                           # This file
```

## Usage

### Selecting a Character

1. When you first open the app, you'll see a character selection screen
2. Browse through the 10 predefined characters
3. Click on any character to start chatting with them
4. Each character has a unique personality and communication style

### Creating a Custom Character

1. Click the "✨ Create Custom" button on the character selection screen
2. Fill in the following fields:
   - **Character Name**: Give your character a unique name
   - **Description**: Brief description of what makes this character special
   - **Personality & Behavior**: Detailed instructions on how the character should act and respond
   - **Choose Emoji**: Select an emoji that represents your character
   - **Choose Color**: Pick a color theme for your character
3. Click "Create Character" to save and start chatting
4. Your custom character will be saved for the current session

### Chatting

1. Type your message in the input field at the bottom
2. Press Enter or click the "Send" button
3. Wait for your selected character to respond in their unique style
4. Continue the conversation naturally
5. Click "Change Character" at any time to switch to a different personality

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

### Add New Predefined Characters

Edit `types/character.ts` and add a new character to the `predefinedCharacters` array:

```typescript
{
  id: 'your-character-id',
  name: 'Your Character Name',
  emoji: '🎭',
  description: 'Brief description',
  systemPrompt: 'Detailed instructions on how this character should behave...',
  color: '#hexcolor'
}
```

Don't forget to add a custom greeting in `app/page.tsx` in the `getGreeting` function!

### Styling

- Global styles: `app/globals.css`
- Component styles: Inline styles in respective component files
- Character colors: Defined in `types/character.ts`
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
