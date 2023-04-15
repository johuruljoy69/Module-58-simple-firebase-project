/**
 *              --------------------------
 *                      INITIAL INSTALLATION
 *              ---------------------------
 * 
 * 1. visit- console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. Danger: Do not publish or make firebase config to public by pushing to github
 *              ---------------------
 *                  INTEGRATION
 *              ---------------------
 * 7. visit: go to docs > build > authentication > web > get started
 * 8. export app from the firebase.config.j file: export default app
 * 9. login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *          ---------------------------------
 *                      PROVIDER SETUP
 *          ---------------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopup and pass auth and provider
 * 13. active sign-in method (google, facebook, github, etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * ---------------------------------
 *  More Auth Provider
 * ---------------------------------
 * 1. active the auth provider (crate app, provider redirect url, client id and client secret)
*/
