import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors : {
        first : '#80B1AC',
        second : '#006258',
        third : '#005047',
        primary : {
          dark : '#006258',
          light : '#006258',
          hover : '#8AB7B2'
        },
        'primary-hover' : {
          dark : '#006258',
          light : '#3E8F77'
        },
        'primary-disabled' : {
          dark : '#006258',
          light : '#3E8F77'
        },
        secondary : {
          dark : '#FFFFFF',
          light : '#000000'
        },

        text : {
          primary : {
            dark : '#F7F7F8',
            light : '#OCOFOE'
          },
          secondary : {
            dark : '#ABAFB4',
            light : '#3B3B3B'
          },
          disabled : {
            dark : '#ABAFB4',
            light : '#ABAFB4'
          },
          button : {
            dark : '#ffffff',
            light : '#ffffff'
          },
        },

        'elevation-bg' : {
          dark : '#080A0B',
          light : '#F9F9F9'
        },
        'elevation-1': {
          dark : '#0C0E10',
          light : '#OCOE1O'
        },
        'elevation-2': {
          dark : '#111315',
          light : '#E8E8E8'
        },
        'elevation-3': {
          dark : '#16181A',
          light : '#DFDFDF'
        },

        states : {
          'success-main' : {
            dark : '#27D17F',
            light : '#28A745'
          },

          'success-elevation-1':{
            dark : '#27D17F',
            light : '#3E8F77'
          },

          'success-elevation-2':{
            dark : '#27D17F',
            light : '#27D17F'
          },

          error : {
            dark : '#F44336',
            light : '#F44336'
          },

          warning : {
            dark : '#FFC107',
            light : '#FFC107'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
