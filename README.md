# Next.js 15 App Directory Dynamic Import Error

This repository demonstrates a bug in Next.js 15's App Directory where using dynamic imports within components can lead to unexpected errors.  The error occurs when the component attempts to import a module dynamically, resulting in runtime issues.

**Steps to Reproduce:**

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the error in your browser's console.

**Expected Behavior:**

The application should render without errors, displaying 'Hello World!' successfully.

**Actual Behavior:**

The application throws an error related to dynamic imports within the App Directory context.  See the console for specific error messages.

**Solution:**

The solution involves restructuring the code to avoid dynamic imports or using a different import approach.  Check out the `bugSolution.js` file for a possible resolution.