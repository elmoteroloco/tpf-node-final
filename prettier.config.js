// prettier.config.js
module.exports = {
    // Establece la longitud máxima de una línea antes de que Prettier la divida.
    printWidth: 120,

    // Usa comillas dobles en lugar de comillas simples.
    singleQuote: false,

    // Agrega punto y coma al final de cada declaración.
    semi: false,

    // Utiliza tabulaciones en lugar de espacios.
    useTabs: false,

    // El número de espacios por nivel de indentación.
    tabWidth: 4,

    // Agrega una coma al final de los objetos y arrays.
    trailingComma: "all",

    // Deja un espacio antes y después de las llaves en los objetos.
    bracketSpacing: true,

    // Pon el '>' de JSX en la última línea en lugar de la misma línea que la etiqueta.
    jsxBracketSameLine: false,

    // Agrega paréntesis a los parámetros de una función flecha si hay solo uno.
    arrowParens: "always",

    // Formatea los bloques de código incrustados en Markdown.
    embeddedLanguageFormatting: "auto",
};
