# Zenith Support Website

React + Tailwind website ready for Cloudflare Pages.

## Local test

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank if uploading this project folder

## Edit contact details

Open `src/App.jsx` and update:

```js
const contact = {
  email: "hello@zenithsupport.com.au",
  phone: "+61 000 000 000",
  location: "Australia & New Zealand"
};
```
