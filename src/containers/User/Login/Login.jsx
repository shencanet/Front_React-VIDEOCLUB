import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData} from "../userSlice";

const Login = () => {

    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});
    const [msgError, setMsgError] = useState("");

    //Variables 
    let navigate = useNavigate();
    //Dispatch va a ser un método necesario de Redux que vamos a usar
    const dispatch = useDispatch();
    const credenciales = useSelector(userData);

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }                                      


    //Funciones de estado
    useEffect(()=>{
        //Comprobamos si poseemos token...
        
        if(credenciales?.token !== ''){
            navigate("/");
            console.log("sin token");
        };
        // eslint-disable-next-line 
    },[]);


    useEffect(() => {
        if (credenciales?.token !== "") {
            navigate('/');
        }
    });

    //Funciones
    const logeame = () => {
        
        //Primero compruebo que los campos sean correctos

            //Esta expresión regular ayuda a validar un email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
            setMsgError('Introduce un e-mail válido');
            return;
        }

            //Esta expresión regular ayuda a validar un password (numero + letras en este caso)
        
        if(credentials.password.length > 4){

            if (! /[\d()+-]/g.test(credentials.password) ) {
            
                setMsgError('Introduce un password válido');
                return;
            };
            
        }else{
            setMsgError('El password debe de tener como mínimo 4 caracteres');
            return;
        }

        //Por si acaso teníamos algo referenciado como error, lo limpiamos
        setMsgError("");

        //Dispatch es el método de redux que ejecuta el reducer
        dispatch(loginUser({email: credentials.email,
            password: credentials.password}
        ));

        setTimeout(()=>{
            navigate("/");
        },1000)

    };

     return (
         <div className='flex flex-col content-center items-center align-middle h-128 w-64 ml-auto mr-auto'>
            <label className="block h-12 text-gray-500 font-bold md:text-top mt-6 pr-4">Correo</label>
            <input type='email' className="w-64 h-12 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" 
                name='email' title='email' onChange={updateCredentials} lenght='30' placeholder='email@email.com'/>
            <label className="block h-12 text-gray-500 font-bold md:text-top mt-6 pr-4">Contraseña</label>
            <input  className="w-64 h-12 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700"
                type='password'  name='password' title='password' onChange={updateCredentials} lenght='30' placeholder='*******'/>
            <div className="content-center h-12 w-64 mt-6 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=>logeame()}>Login</div>
            <div className='mt-2'>{msgError}</div>
         </div>
         
     )
}
export default Login;