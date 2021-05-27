import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDzhmzdoB3C7jDsuugQ8LTjIi6IkQ0pkVU',
    authDomain: 'letters-social-d8683.firebaseapp.com'
};

try {
    firebase.initializeApp(config);
} catch (e) {
    console.error('Error initializing firebase — check your source code');
    console.error(e);
}

export { firebase };
