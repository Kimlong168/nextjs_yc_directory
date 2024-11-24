import type {Config} from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";
const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	container: {
    		center: true,
    		padding: '1rem'
    	},
    	extend: {
    		screens: {
    			xs: '475px',
    			sm: '640px',
    			md: '768px',
    			lg: '960px',
    			xl: '1350px',
    			'1xl': '1550px',
    			'2xl': '1736px',
    			'3xl': '1920px'
    		},
            colors: {
                primary: {
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
            },
    		fontFamily: {
    			'work-sans': ["var(--font-work-sans)"]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			'100': '2px 2px 0px 0px rgb(0, 0, 0)',
    			'200': '2px 2px 0px 2px rgb(0, 0, 0)',
    			'300': '2px 2px 0px 2px rgb(238, 43, 105)'
    		}
    	}
    },
    plugins: [typography, tailwindcssAnimate],
};

export default config;