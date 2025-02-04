# FrontEnd - MERN Stack - Project TaskFlow

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Screenshots](#screenshots)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description
TaskFlow is a modern task management application built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript. The frontend is developed using React and enhanced with React Query for efficient data fetching, Tailwind CSS for styling, and TypeScript for type safety. This application helps users organize their tasks, manage projects, and improve productivity through an intuitive user interface.

## Features
- User authentication (login/register)
- Task creation, editing, and deletion
- Task categorization and filtering
- Project management
- Drag and drop task organization
- Real-time updates using React Query
- Responsive design for all devices
- Dark/Light theme support
- Task priority levels and due dates
- Search functionality
- Task progress tracking

## Technologies
- React 18
- TypeScript
- React Query
- Tailwind CSS
- Axios
- React Router DOM
- React Hook Form
- Zod (for validation)
- React Icons
- DnD Kit (for drag and drop)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running (TaskFlow Backend)

### Installation
1. Clone the repository
```bash
git clone https://github.com/fer8614/TaskFLow-FrontEnd
```

2. Navigate to the project directory
```bash
cd taskflow-frontend
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Create a .env file in the root directory
```env.local
VITE_API_URL=http://localhost:4000/api
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Usage
After starting the development server, the application will be available at `http://localhost:5173`. You can:

1. Register a new account or login
2. Create new tasks and organize them into projects
3. Set task priorities and due dates
4. Track task progress
5. Filter and search tasks
6. Manage your profile settings

## Directory Structure
```
src/
├── assets/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── hooks/
├── pages/
├── services/
├── store/
├── types/
├── utils/
└── App.tsx
```

## Screenshots
![image alt](https://github.com/fer8614/TaskFLow-FrontEnd/blob/776bddfd7b5b34ee7cf7b8106ca9fd9658c8420c/taskflow.png)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [React Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [DnD Kit](https://dndkit.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)

---

**Note:** Make sure to replace placeholders (like repository URLs and screenshots) with actual content relevant to your project.

Feel free to customize this README according to your specific implementation and additional features of your TaskFlow application.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
