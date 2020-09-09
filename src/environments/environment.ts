// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDYGgobNwJCIZEovZTukfoh53StQYenhlc",
    authDomain: "budgetapp-94cbb.firebaseapp.com",
    databaseURL: "https://budgetapp-94cbb.firebaseio.com",
    projectId: "budgetapp-94cbb",
    storageBucket: "budgetapp-94cbb.appspot.com",
    messagingSenderId: "336815665638"
  }
};
