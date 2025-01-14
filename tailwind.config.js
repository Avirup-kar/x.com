// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         'xs': '480px',  // Custom breakpoint
//         'xi': '919px',  // Custom breakpoint
//         '3xl': '1600px' // Another custom breakpoint
//       }
//     }
//   }
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint
        'xi': '919px',  // Custom breakpoint
        '3xl': '1600px' // Another custom breakpoint
      }
    }
  },
  plugins: [],
}
