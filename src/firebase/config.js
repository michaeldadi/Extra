import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	  apiKey: 'AIzaSyBR69GVMTNz_Q6zokBlUADG71nOACMkO9Y',
	  authDomain: 'extra-eccc2.firebaseapp.com',
	  databaseURL: 'https://extra-eccc2.firebaseio.com',
	  projectId: 'extra-eccc2',
	  storageBucket: 'extra-eccc2.appspot.com',
	  messagingSenderId: '243436682169',
	  appId: '1:243436682169:ios:1cd3ad301bbaf30eab9468',
};

if (!firebase.apps.length) {
	    firebase.initializeApp(firebaseConfig);
}

export { firebase };
