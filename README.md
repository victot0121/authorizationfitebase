# Simple Chat App

Welcome to the **Simple Chat App** project! This project showcases a basic chat application with a primary focus on authorization using Firebase. 

## Live Project

Check out the live project [here](https://authorizationfitebase-7pov.vercel.app/).

## Project Overview

This chat application allows users to:

- Sign up and log in using Firebase Authentication.
- Join and participate in multiple chat rooms.
- Send and receive messages in real-time.

## Features

- **Authentication**: Users can sign up, log in, and access chat rooms only when authenticated.
- **Real-time Messaging**: Messages are sent and received in real-time using Firebase Firestore.
- **Multiple Chat Rooms**: Users can join different chat rooms and have separate conversations.

## Technologies Used

- **React**: For building the user interface.
- **Firebase**: For authentication and real-time database.
- **React Router**: For routing.
- **Tailwind CSS**: For styling.
- **DaisyUI**: For additional UI components.
- **Vite**: For bundling and development server.
- **TypeScript**: For type checking.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js and npm installed.
- Firebase account and a Firebase project set up.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/simple-chat-app.git
   cd simple-chat-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up Firebase:

   - Create a new Firebase project in the Firebase console.
   - Enable Firebase Authentication and Firestore.
   - Create a `.env` file in the root directory and add your Firebase configuration:

     ```sh
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

### Running the Project

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To create a production build, run:

```sh
npm run build
```

## Project Structure

- **src/**: Contains the source code.
  - **components/**: Reusable UI components.
  - **context/**: Context for authentication.
  - **pages/**: Different pages of the app.
  - **firebase.ts**: Firebase configuration and initialization.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint for code linting.
- `npm run preview`: Previews the production build.

## Dependencies

### Production

- **@types/firebase**: Type definitions for Firebase.
- **axios**: For making HTTP requests.
- **daisyui**: Tailwind CSS components.
- **firebase**: Firebase SDK.
- **react**: React library.
- **react-dom**: React DOM library.
- **react-router-dom**: Routing library for React.

### Development

- **@types/react**: Type definitions for React.
- **@types/react-dom**: Type definitions for React DOM.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: ESLint parser for TypeScript.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: Linter for JavaScript and TypeScript.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Refresh.
- **postcss**: Tool for transforming CSS with JavaScript.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: TypeScript language.
- **vite**: Next-generation frontend tooling.

## Contributing

Feel free to fork the repository and submit pull requests. If you find any issues, please report them.

## License

This project is licensed under the MIT License.

---

Thank you for checking out the Simple Chat App! If you have any questions or feedback, feel free to open an issue or reach out.

Enjoy chatting! 🎉
