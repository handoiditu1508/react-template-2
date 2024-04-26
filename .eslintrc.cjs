module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "import",
    "react"
],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "linebreak-style": [
      "warn",
      "windows"
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-multi-spaces": "warn",
    "no-trailing-spaces": "warn",
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "space-in-parens": [
      "warn",
      "never"
    ],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "semi": [
      "off",
      "always"
    ],
    "@typescript-eslint/semi": [
      "warn",
      "always"
    ],
    "object-curly-spacing": [
      "off",
      "always"
    ],
    "@typescript-eslint/object-curly-spacing": [
      "warn",
      "always"
    ],
    "comma-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "@typescript-eslint/comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "warn",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "warn",
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3
        }
      }
    ],
    "@typescript-eslint/indent": [
      "off",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3
        }
      }
    ],
    "quotes": [
      "off",
      "double"
    ],
    "@typescript-eslint/quotes": [
      "warn",
      "double"
    ],
    "comma-dangle": [
      "off",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "only-multiline",
        "functions": "only-multiline"
      }
    ],
    "@typescript-eslint/comma-dangle": [
      "warn",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "only-multiline",
        "functions": "only-multiline",
        "enums": "only-multiline",
        "generics": "ignore",
        "tuples": "only-multiline"
      }
    ],
    "padding-line-between-statements": [
      "off",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "*",
        "next": [
          "return",
          "interface",
          "type"
        ]
      }
    ],
    "keyword-spacing": [
      "off",
      {
        "before": true,
        "after": true
      }
    ],
    "@typescript-eslint/keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        "additionalHooks": "useUpdateEffect"
      }
    ],
    "react/jsx-tag-spacing": [
      "warn",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "import/newline-after-import": "warn"
  },
}
