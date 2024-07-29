/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        danfo: ['Danfo', 'sans-serif'],
        lora: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        sevillana: ['Sevillana', 'cursive'],
        Lato: ["Lato", "san-serif"],
      },
      colors: {
        secondColor: {
          orange: "#EB3678",
          orangeDark: "#FB773C",
          darkblack: "#180161",
        },
      },
    },
  },
  plugins: [require('daisyui')],
}

