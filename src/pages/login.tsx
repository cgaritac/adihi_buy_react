import { useState } from 'react';
import 'firebase/auth';
import { ButtonComponent } from '../components/common/button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

export const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
 

    const submit = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
    }

    return (
        <>
            <h1 className="flex justify-center text-6xl pt-24 mb-16 font-trade-winds">Inicio de sesión</h1>
            <label className="ml-[600px] text-2xl font-trade-winds">Usuario:</label>
            <input type="email" id='email' onChange={(ev) => setEmail(ev.target.value) } className="ml-[600px] mt-3 mb-7 text-2xl font-trade-winds"/>
            <label className="ml-[600px] text-2xl font-trade-winds">Contraseña:</label>
            <input type="password" id='password' onChange={(ev) => setPassword(ev.target.value) } className="ml-[600px] mt-3 mb-7 text-2xl font-trade-winds"/>
            <br />
            <div className='flex justify-center mt-16'>
                <ButtonComponent onClick={submit} className="hover:bg-red-800">
                    Iniciar sesión
                </ButtonComponent>
            </div>            
        </>
    )
}