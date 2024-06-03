# MyApp

This project is a React application deployed on GitHub Pages.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)

### Installation

1. Clone the repository

```bash
git clone https://github.com/zachary-mor/qcc-ase-p2.git
```

2. Navigate to the project directory

```bash
cd qcc-ase-p2
```

3. Install the dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

The app should now be running on http://localhost:3000.

## Folder Structure

The project structure is as follows:

```
repo-name/
  ├── public/
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── index.js
  │   └── components/
  │       ├── Header.js
  │       ├── Footer.js
  │       ├── Home.js
  │       ├── About.js
  │       ├── Services.js
  │       └── Contact.js
  ├── package.json
  └── README.md
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

### GitHub Pages

To deploy the project to GitHub Pages, follow these steps:

1. Update the `homepage` field in your `package.json` to:

```json
"homepage": "https://username.github.io/repo-name"
```

2. Add the `basename` prop to the `Router` component in `App.js`:

```jsx
<Router basename="/repo-name">
```

Replace `/repo-name` with the actual name of your GitHub repository.

3. Install the `gh-pages` package if you haven't already:

```bash
npm install --save gh-pages
```

4. Add the following scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

5. Deploy the app to GitHub Pages:

```bash
npm run deploy
```

Your app should now be accessible at `https://username.github.io/repo-name`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.
