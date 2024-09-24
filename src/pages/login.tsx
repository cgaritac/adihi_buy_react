import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import appFire from '../../credentials';
import { ButtonComponent } from '../components/buttons/button-general';
import { Hero } from '../components/sections/hero';

export const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(appFire); 

    const submit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("Este es el user:" + user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
    }

    return (
        <>
            <Hero
                heroImage = "bg-home-hero"
            >
                Adihi
            </Hero>
            <section aria-labelledby='login-links' className='flex flex-col items-center pb-16'>
                <div className='grid mt-16 border border-4 border-adihi-red w-[700px] bg-red-200'>
                    <h1 id='login-links' className=" flex justify-center text-6xl pt-24 mb-16 font-trade-winds w-[700px]">Inicio de sesión</h1>
                    <label className="ml-[150px] text-2xl font-trade-winds">Usuario:</label>
                    <input type="email" id='email' onChange={(ev) => setEmail(ev.target.value) } className="ml-[200px] mr-[200px] mt-3 mb-7 text-2xl font-trade-winds"/>
                    <label className="ml-[150px] text-2xl font-trade-winds">Contraseña:</label>
                    <input type="password" id='password' onChange={(ev) => setPassword(ev.target.value) } className="ml-[200px] mr-[200px] mt-3 mb-7 text-2xl font-trade-winds"/>
                    <br />
                    <div className='flex justify-center w-full mb-16 w-[700px]'>
                        <ButtonComponent onClick={submit} className="hover:bg-red-800">
                            Iniciar sesión
                        </ButtonComponent>
                    </div>            
                </div>                
            </section>            
        </>
    )
}