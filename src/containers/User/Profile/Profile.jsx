import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { userData } from '../userSlice';
import "../Update/Update";


const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const navigate = useNavigate();

    return (
        <div class="grid grid-cols-2 gap-9 h-5/6">
            
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Nombre</label>
            <p className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_name}</p>
            
            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Apellido</label>
            <p className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_surname}</p>

            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_email}</p>


            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Direccion</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_address}</p>



            <label className="block text-gray-500 font-bold md:text-top mt-3 mb-3 pr-4">Telefono</label>
            <p className="block text-blue-500 font-bold md:text-top mt-3 mb-3 pr-4">{datosUsuario.user_phone}</p>


            <div class="flex  gap-9 items-center justify-center">
                <div className="block h-14 w-64 mt-6 bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/Update')}>Modificar Perfil</div>
            </div>

            <div class="flex  gap-9 items-center justify-center">
                <div className="button block   h-14 w-64 mt-6 bg-red-700 hover:bg-red-800 cursor-pointer text-white font-bold py-2 px-4 rounded"onClick={() => navigate('/Delete')}>Dar de Baja</div>
            </div>
        </div>

    )
}
export default Profile; 