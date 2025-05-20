---

## ✅ Himani Parmar – Entry Test Submission
---

### 📝 Summary of Work Completed

1. ✅ **Cypress Test File Included & Passing**
    - Located in `cypress/e2e/login.cy.js`
    - Covers:
      - Presence of form fields and button
      - Successful login redirects to `/welcome`
      - Invalid login shows `"Invalid credentials"` message

2. ✅ **Bug Fixed – Login Redirect**
    - Login now correctly redirects using React Router's `useNavigate()` after successful login
    - Redirect was previously not working because the form submission caused a full page reload due to missing `e.preventDefault()`

3. ✅ **Error Message Handling**
    - Added state-driven error display using `setError()`
    - Error rendered in DOM using:
      ```jsx
      {error && <p data-cy="login-error">{error}</p>}
      ```
    - Tested using Cypress with `[data-cy="login-error"]` selector

---

### 🔧 Brief Bug Explanation

> The issue was caused by the form submission triggering a full page reload, which prevented React from managing state or routing correctly. I fixed it by adding `e.preventDefault()` in the `handleSubmit` function and using React Router's `useNavigate()` to perform a client-side redirect after login.

---

### 🤖 AI Tool Usage (Optional Bonus)

I used **ChatGPT** during the assignment to:
- Understand why Cypress wasn't detecting error messages
- Confirm that the missing `e.preventDefault()` was causing a page reload
- Get help on using `data-cy` attributes for more stable test selectors

> Example Query Used:  
> *"Why is my form in React reloading the page instead of using useNavigate redirect?"*

---

✅ All required tasks have been completed. You’ll find all working code, tests, and this write-up in the repo.
---
> ✅ Scroll down to see the original project instructions and structure from the zipBoard repo.

# zipBoard Junior Position Test Project

This is a test repository for the zipBoard junior position application process. This project demonstrates a simple React application with a login form and Cypress testing setup.

## Important Note

This repository is for testing purposes only. Please fork this repository to your own account and do not modify this original repository. All your work should be done in your forked version.

## Required Technologies

To run this project locally, you need to have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

## Getting Started

1. Fork this repository to your own account
2. Clone your forked repository:
   ```bash
   git clone <your-forked-repo-url>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing with Cypress

This project uses Cypress for end-to-end testing. To run the tests:

1. Make sure the development server is running (`npm start`)
2. In a new terminal, you can run Cypress in two ways:

   ### Open Cypress Test Runner (Interactive Mode)
   ```bash
   npm run cypress:open
   ```
   This will open the Cypress Test Runner UI where you can:
   - Choose your preferred browser
   - See all test files
   - Run tests interactively
   - Watch tests run in real-time

   ### Run Tests in Headless Mode
   ```bash
   npm run cypress:run
   ```
   This will run all tests in the terminal without opening the UI.

   ### Run Tests with Dev Server
   ```bash
   npm run test:e2e
   ```
   This command will:
   1. Start the development server
   2. Wait for it to be available
   3. Run all Cypress tests
   4. Shut down the server when done

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── LoginForm.css
│   │   ├── Welcome.js
│   │   └── Welcome.css
│   ├── App.js
│   └── App.css
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
└── package.json
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the React testing suite
- `npm run build` - Builds the app for production
- `npm run cypress:open` - Opens Cypress Test Runner
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Runs Cypress tests with the dev server

## License

This project is for testing purposes only and is not licensed for public use.
