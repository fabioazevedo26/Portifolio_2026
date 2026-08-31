/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--accent-cyan)",
        secondary: "var(--accent-purple)",
        accent: {
          cyan: "var(--accent-cyan)",
          blue: "var(--accent-blue)",
          orange: "var(--accent-orange)",
          purple: "var(--accent-purple)",
        },
        background: "var(--bg-primary)",
        surface: "var(--surface)",
        "surface-glass": "var(--surface-glass)",
        "border-glass": "var(--border-glass)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "unit": "4px",
        "margin-desktop": "64px"
      },
      backgroundImage: {
        'network-grid': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 20.5V18H0v-2h20v-2h2v4h18v2H22v2.5h-2zm-2-7.5V10H0V8h18V5h2v5h-2zm12 5V13h8v-2h-8v-3h-2v7h2zm-4 10v-3h12v-2H26v-2h-2v7h2zm-14-3v-2H0v-2h12v-3h2v7h-2z\" fill=\"%23cfbcff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
      },
      fontFamily: {
        display: ['Geist', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'code-sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}