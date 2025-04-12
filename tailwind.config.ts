import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        },
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: "#00ACB1",
        secondary: "#FAFF00",
        dark: {
          DEFAULT: '#1C1F22',
          600: '#323638',
          700: '#292E32',
          800: '#222629',
          900: '#1C1F22'
        },
        gray: {
          DEFAULT: '#BABABA',
          light: '#BABABA',
          dark: '#818181',
        },
        white: {
          DEFAULT: '#FFFFFF',
          "off-light": '#DDD',
          off: '#DCDCDC',
          dark: '#939393',
        },
        disabled: "#BDBDBD"
      },
      fontFamily: {
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
        baloo2: ["var(--font-baloo-2)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "btn-primary": "linear-gradient(100deg, #C5C900 7.4%, #82D755 26.98%, #00ACB1 87.32%)",
        "btn-primary-hover": "linear-gradient(100deg, #FAFF00 7.4%, #9DE475 26.98%, #4DCACF 87.32%)",
        'hero': "linear-gradient(180deg, rgba(0, 29, 32, 0.81) 0%, rgba(7, 146, 149, 0.00) 38.01%), url('/assets/bg/hero.png')",
        'create-your-dream-trip': "url('/assets/bg/create-your-dream-trip.png')",
        'create-your-journey': "url('/assets/bg/create-your-journey.png')",
      },
      boxShadow: {
        'button': '0px 4px 0px 0px #111F3C',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "float-x": {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.2)' },
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        "float-x": 'float-x 3s ease-in-out infinite',
        blink: 'blink 1.5s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
    },
  },
  plugins: [tailwindcssAnimate, fluid],
};
export default config;
