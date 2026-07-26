# Student Exercises

## Exercise 1: Add a policy type

Add `"Life"` to the `insuranceType` literal union in `src/demos/types.ts`. Add one Life policy to the end-to-end demo.

## Exercise 2: Trigger and fix a type error

Temporarily change `coverageAmount` from a number to a string in a policy object. Run:

```bash
npm run typecheck
```

Read the error, restore the number, and run the command again.

## Exercise 3: Add an optional property

Add the following field to `Policy`:

```ts
agentName?: string;
```

Add an agent name to only one policy and display it when available.

## Exercise 4: Extend the premium function

Add a third optional parameter named `discountPercent`. Apply the discount after calculating the base premium.

## Exercise 5: Create an NPM script

Add this script to `package.json`:

```json
"check": "npm run typecheck && npm run build"
```

Run it with:

```bash
npm run check
```

## Exercise 6: Inspect the build

Run `npm run build`. Open `dist/` and identify the generated HTML, JavaScript, and CSS assets.

## Reflection questions

1. What problems does TypeScript solve before the application runs?
2. Why should `package-lock.json` be committed?
3. Why should `node_modules` not be committed?
4. What is the difference between development mode and a production build?
5. What checks should a technical lead expect in CI?
