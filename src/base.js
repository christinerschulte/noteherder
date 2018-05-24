import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

const config = {
    apiKey: "AIzaSyBDep8EpawcMpXb3o7UQhDMul6PFW2TiEc",
    authDomain: "noteherder-f55b0.firebaseapp.com",
    databaseURL: "https://noteherder-f55b0.firebaseio.com",
    projectId: "noteherder-f55b0",
    storageBucket: "noteherder-f55b0.appspot.com",
    messagingSenderId: "556850868441"
}
 const app = firebase.initializeApp(config)

 export const githubProvider = new firebase.auth.GithubAuthProvider()
 export const auth = firebase.auth()

 export default Rebase.createClass(app.database())