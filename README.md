# Getting Started with Create React App

This project was initialized using [Create React App](https://github.com/facebook/create-react-app), a popular tool for creating single-page React applications.

To start working on the project, follow these steps in the project directory:

### `npm start`

This command launches the app in development mode. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

This application is hosted on Firebase and communicates with a Firebase function written in Express. It utilizes an API and has CORS enabled for two whitelisted URLs: the Firebase Hosting URL ([https://bouncechall-31e3f.web.app/](https://bouncechall-31e3f.web.app/)) and the local host ([http://localhost:3000/](http://localhost:3000/)).

While it's not best practice to allow communication with localhost in a live project, this setup simplifies the development process. Alternatively, you could create a separate project for development with minor changes to the CORS whitelist.

The Firebase cloud function, built with Express and Node.js, is available at [https://europe-west1-bouncechall-31e3f.cloudfunctions.net/api/country/{countryName}](https://europe-west1-bouncechall-31e3f.cloudfunctions.net/api/country/%7BcountryName%7D). Replace the `countryName` parameter in the URL with the desired country to obtain a JSON object containing extensive country information.

Once the application is running, you'll see a webpage hosted on port 3000 if you are utilising a windows machine, otherwise you may have to replace `"start": "set PORT=3000 && react-scripts start"`  with `"start": react-scripts start --port=3000"`  within the 'package.json' file . The page will automatically reload when you make changes, and lint errors will be displayed in the console.

### `npm test`

This command starts the test runner in interactive watch mode. For more information on running tests, visit the [official documentation](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Executing this command builds the app for production in the `build` folder. React is bundled in production mode, and the build is optimized for top performance. The output is minified, and filenames include hashes for cache management.

With the build complete, your app is ready for deployment! For further details on deployment, refer to the [official guide](https://facebook.github.io/create-react-app/docs/deployment).# Getting Started with Create React App

This project was initialized using [Create React App](https://github.com/facebook/create-react-app), a popular tool for creating single-page React applications.

To start working on the project, follow these steps in the project directory:

### `npm start`

This command launches the app in development mode. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

This application is hosted on Firebase and communicates with a Firebase function written in Express. It utilizes an API and has CORS enabled for two whitelisted URLs: the Firebase Hosting URL ([https://bouncechall-31e3f.web.app/](https://bouncechall-31e3f.web.app/)) and the local host ([http://localhost:3000/](http://localhost:3000/)).

While it's not best practice to allow communication with localhost in a live project, this setup simplifies the development process. Alternatively, you could create a separate project for development with minor changes to the CORS whitelist.

The Firebase cloud function, built with Express and Node.js, is available at [https://europe-west1-bouncechall-31e3f.cloudfunctions.net/api/country/{countryName}](https://europe-west1-bouncechall-31e3f.cloudfunctions.net/api/country/%7BcountryName%7D). Replace the `countryName` parameter in the URL with the desired country to obtain a JSON object containing extensive country information.

Once the application is running, you'll see a webpage hosted on port 3000 if you are utilising a windows machine, otherwise you may have to replace `"start": "set PORT=3000 && react-scripts start`  with `"start": react-scripts start --port=3000"`  within the 'package.json' file . The page will automatically reload when you make changes, and lint errors will be displayed in the console.

### `npm test`

This command starts the test runner in interactive watch mode. For more information on running tests, visit the [official documentation](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Executing this command builds the app for production in the `build` folder. React is bundled in production mode, and the build is optimized for top performance. The output is minified, and filenames include hashes for cache management.

With the build complete, your app is ready for deployment! For further details on deployment, refer to the [official guide](https://facebook.github.io/create-react-app/docs/deployment).