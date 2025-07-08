export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                Against: ['"Against"', 'cursive'], // now you can use className="font-Against"
            },
        },
    },
    plugins: [],
}
