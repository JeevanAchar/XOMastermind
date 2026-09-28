# Project Rules & Guidelines

1. **Keep Conversation Log Updated**: Every user query and AI agent response MUST be appended to `geminiResp.txt` in the root of the project using the format:

```
=======================================

Query: [user query here]

Response: [agent response here]
```

2. **Follow the Design System**: All UI component creations and modifications must strictly follow the tokens and design rules defined in `design system.txt` and `src/constants/theme.ts`. Avoid hardcoded inline styling values that do not match the design system tokens.

3. **Packages**: Use lucide-react-native for icons

4. **Lint**: Do not use any as a type interface

5. **Type Script**: All the Types Should be defined inside the c-types folder When we are going to reuse the types few types are exception reason we will be using them in the same component

6. **Coding Pattern**: Code should be self explainatory, When the self explainatory is not possible Add Approirate comments So that any one can refer to the comments and work eaisly on the applciation

7. **UI Creation**: When we are building UI We are going to keep in mind which elements should be dynamic based on that we are going keep dynamicallyst

8. **Constants**: We need to store constants under the folder called constants eg: Logout, Login So we can resue them later

9. **Imports**: The component which we have developed should be imported via alias instead of path add the required path in the config and utilise them

10. **UI Creation**: When ever we are creating components create with tailwindcss(nativewind)
