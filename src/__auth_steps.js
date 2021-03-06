/** 
    1. create project in firebase

    2. npm install firebase

    3. initialize firebase config file

    4. export auth from firebase config file

    5. enable email password auth or google

    6. create Login,Signup component, setup route

    7. attach form field handler and form submit handler

    8. npm install --save react-firebase-hooks

    9. useCreateUserWithEmailAndPassword from react-firebase-hooks

    10. if user is created redirect to the expected page(using useNavigate())

    11. useSignInWithEmailAndPassword for sign in

    12. create RequireAuth component to protect route
        --> destructuring children
        --> take user using useAuthState(auth)
        --> if user exist <Navigate to specific page
                -to    =/login
                -state =from:location (tracking user location) 
                -replace
        --> returning children

    13. wrap route with RequireAuth in app.js

    14. since we are redirected to login page ,thats why 'form' is declared in login page
        --> useNavigate()
        --> useLocation()
        --> if user exist 
                -navigate (from,{replace:true})


*/




/**
 * Firebase hosting/deploy steps
 * 1. npm install -g firebase-tools (one time for computer)
 * 2. firebase login (one time for computer)
 * 3. firebase init (one time for each project)
 * 4. npm run build (every time when deploying)
 * 5. firebase deploy (every time when deploying)
*/