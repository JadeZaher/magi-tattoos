import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
           "0%": {
              opacity: "0",
           },
           "100%": {
              opacity: "1",
           },
        },
    },
  },
},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#be123c",
          "secondary": "#F40000",
          "accent": "#fef08a",
          "neutral": "#ede9fe",
          "base-100": "#1c1917",
          "info": "#a3e635",
          "success": "#9f1239",
          "warning": "#be123c",        
          "error": "#9f1239"
        },
      },
    ],
  },
  plugins: [daisyui],
}

