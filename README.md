# AI Developer Productivity Assistant

This is a full-stack AI chat app I built as a learning project.

The idea was to make something useful for developer tasks like code generation, debugging help, concept explanation, and planning. It currently supports both Gemini and OpenAI, with Gemini set as the default.

## What it does

- chat interface built with React
- different modes for `code`, `debug`, `explain`, and `plan`
- switch between `Gemini` and `OpenAI`
- markdown and code block rendering in the chat UI
- mode-based prompt + temperature tuning
- small sliding context window so follow-up messages make more sense

## Stack

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
- Gemini API
- OpenAI API

## API

`POST /api/chat`

## Local setup

Install backend dependencies:

```bash
cd Backend
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Create `Backend/.env`:

```env
PORT=3000
AI_PROVIDER=gemini
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
```

Run backend:

```bash
cd Backend
npm run dev
```

Run frontend:

```bash
cd frontend
npm run dev
```

## Notes

- Gemini is the default provider right now
- OpenAI is still available through the same backend route
- recent chat history is included as a small context window

## Future improvements

- streaming responses
- persistent chat history
