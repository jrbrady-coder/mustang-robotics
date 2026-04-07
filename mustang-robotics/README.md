# 5069 Mustang Robotics App

Official program hub for Millard North High School Robotics — 5069.

## Project Structure

```
mustang-robotics/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx       ← Main app (edit this file to make updates)
│   └── index.js
├── package.json
├── netlify.toml
└── .gitignore
```

## How to Update the App

1. Open `src/App.jsx` in any text editor
2. Make your changes
3. Commit and push to GitHub
4. Netlify auto-deploys in ~60 seconds

## Local Development (optional)

```bash
npm install
npm start
```

Then open http://localhost:3000

## Deployment

This project is configured for Netlify.
- Build command: `npm run build`
- Publish directory: `build`
- The `netlify.toml` file handles this automatically.

## Making Updates with Claude

1. Share the current `App.jsx` file with Claude
2. Describe the changes you want
3. Download the updated file
4. Replace `src/App.jsx` in your GitHub repo
5. Netlify deploys automatically
