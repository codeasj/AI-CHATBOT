# AI Developer Productivity Assistant

AI-powered full-stack chat app for coding, debugging, explanations, and learning support using Gemini or OpenAI.

## Features

- Interactive chat UI for developer workflows
- Multiple AI modes: `code`, `debug`, `explain`, `plan`
- Modular backend service layer
- Provider switch support for `Gemini` and `OpenAI`
- Markdown and code block rendering in responses

## Tech Stack

**Frontend**
- React
- TypeScript
- Tailwind CSS
- Axios
- React Markdown

**Backend**
- Node.js
- Express

**AI**
- Gemini API (default)
- OpenAI API

## Project Structure

```text
Backend/
|-- config/
|-- controllers/
|-- routes/
|-- services/
|   |-- ai.service.js
|   |-- gemini.service.js
|   `-- openai.service.js
|-- utils/
|   `-- promptBuilder.js
`-- server.js

frontend/
`-- src/
    |-- components/
    |-- App.tsx
    `-- main.tsx
```

## API

`POST /api/chat`

## Setup

1. Install backend dependencies

```bash
cd Backend
npm install
```

2. Install frontend dependencies

```bash
cd frontend
npm install
```

3. Create `Backend/.env`

```env
PORT=3000
AI_PROVIDER=gemini
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
```

4. Run both apps

```bash
cd Backend
npm run dev
```

```bash
cd frontend
npm run dev
```

## Notes

- `Gemini` is the default provider
- `OpenAI` is also supported through the same backend route
- Responses are rendered as markdown with code highlighting

## Future Improvements

- Streaming responses
- Conversation context window
- Persistent chat history
