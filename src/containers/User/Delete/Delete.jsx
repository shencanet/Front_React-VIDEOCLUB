import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, userData } from '../userSlice';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Delete = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        //<pre>{JSON.stringify(datosUsuario, null,2)}</pre>



    <div>
            <div>

                <h1 className="block text-red-500 font-bold md:text-top mt-3 mb-3 pr-4">Te echaremos de menos pero si todavia quieres irte pulsa el boton Rojo  </h1>
            </div>
            
            <div class="grid grid-cols-2 gap-11 bg-size-auto">



                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
                <p className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_name}</p>


                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_email}</p>


                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_address}</p>

                <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
                <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>


                <div class="flex  gap-9 items-center justify-center ">

                    <div className="block   h-14 w-60 mt-9 bg-red-800 hover:bg-red-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(deleteUser(datosUsuario))}>Baja Cliente</div>
                </div>
                <div class="flex  gap-9 items-center justify-center">

                    <div className="block   h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-900 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/')}>Atras</div>
                </div>




            </div></div>




    )
}
export default Delete; 