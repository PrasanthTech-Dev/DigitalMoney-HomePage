# Money — Landing + Auth Pages

A React + Tailwind CSS project with a marketing landing page and full
authentication flow (Login, Sign Up, Forgot Password, Reset Password).

## Structure

```
src/
  assets/                  static assets (images, icons, etc.)
  components/
    LandingPage.jsx
    LoginPage.jsx
    SignUpPage.jsx
    ForgotPasswordPage.jsx
    ResetPasswordPage.jsx
  App.jsx                  routes between pages
  App.css
  index.css                Tailwind directives + global styles
  main.jsx                 React entry point
index.html
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Routes

| Path               | Page                |
| ------------------ | -------------------- |
| `/`                 | Landing page          |
| `/login`            | Login                 |
| `/signup`           | Sign up               |
| `/forgot-password`  | Forgot password        |
| `/reset-password`   | Reset password         |

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.
