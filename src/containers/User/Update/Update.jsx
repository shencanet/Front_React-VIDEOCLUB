import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, userData } from '../userSlice';







const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //Hooks

    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_email: datosUsuario.user_email,
        user_address: datosUsuario.user_address,
        user_city: datosUsuario.user_city,
        user_phone: datosUsuario.user_phone,
        user_token: datosUsuario.user_token

    })
    const [msgError, setMsgError] = useState("")


    //handkeys

    const handlerInputs = (e) => {
        console.log("target", e.target.value)
        setPerfilUsuario({ ...perfilUsuario, [e.target.name]: e.target.value })
        console.log("perfil usuario update", perfilUsuario);
        console.log("datos user", datosUsuario);

    }
    /*
        const EditDetails = () => {
            
                dispatch(updateUser(datosUsuario.perfilUsuario),
                    navigate('/')
                )
            }*/

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (datosUsuario.token === "") {
            navigate('/')
        }
    })

    return (

    <div>
        <div>
            <h1 className="block text-green-500 font-bold md:text-top mt-3 mb-3 pr-4">Los cambios seran efectivos despues de cerrar sesion  </h1>
        </div>
        <div class="grid grid-cols-2 gap-7 bg-size-auto ">

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
            <input type="text" className="text-center rounded block w-44 text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4" value={perfilUsuario.user_name} name='user_name' title='user_name' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Apellido</label>
            <input type="text" className="text-center rounded block w-44 text-blue-500 font-bold md:text-top mt-3 mb-3" value={perfilUsuario.user_surname} name='user_surname' title='user_surname' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
            <input type="text" className="text-center rounded block w-44 text-black-900 font-bold md:text-top mt-3 mb-3 pr-4" value={perfilUsuario.user_email} name='user_email' title='user_email' disabled onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
            <input type="text" className="text-center rounded block w-44 text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4" value={perfilUsuario.user_address} name='user_address' title='user_address' onChange={handlerInputs}></input>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <input type="text" className="text-center rounded block w-44 text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4" value={perfilUsuario.user_phone} name='user_phone' title='user_phone' onChange={handlerInputs}></input>
            
            <div class="flex  gap-9 items-center justify-center">
                <div className="block   h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/profile')}>Atras</div>
            </div>

            <div class="flex  gap-9 items-center justify-center">
                <div className="block h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(updateUser(datosUsuario, perfilUsuario))}>Guardar</div>
            </div>

            
        </div>
    </div>

    )
}
export default Profile; 