import React, { useState } from 'react';
import { SearchIcon,FilmIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logOut } from '../../containers/User/userSlice';
import { searchFilm } from './searchSlice';


const Header = () => {
    const [pelicula, setPelicula] = useState('');
    
    const credenciales = useSelector(userData);

    let navegador = useNavigate();
    const dispatch = useDispatch();
    



    const viajar = (destino) => {
        navegador(destino)
    };

    const cambiarPelicula = (e) => {
        setPelicula(e);
    };

    const buscarPelicula = () => {
        dispatch(searchFilm(pelicula));
        navegador('/login');
    };
    const cerrarSesion = () => {
        dispatch(logOut());
        viajar("/");
    }
    return(
        <div className="font-sans bg-gray-900 text-white">
                <nav className="border-b border-gray-800">
                    <div className="container mx-auto flex items-end justify-between px-4 py-6">
                        <div className='cursor-pointer' onClick={() => viajar("/")}>
                            <ul className="flex items-center" >
                                <li>
                                    <FilmIcon className="h-6 w-6 text-white" />
                                </li>
                                <li>
                                    <div className="text-white text-2xl font-bold">&nbsp;FilmClub</div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex'>
                            <div className="flex items-center">
                                <div className="relative">
                                    <input id="" type="text" onChange={(event) => cambiarPelicula(event.target.value)}  className="bg-gray-800 rounded-full w-48 px-4 py-1 focus:outline-none focus:shadow-outline" placeholder='Busca una pelicula'/>
                                </div>
                            </div>
                            <button onClick={() => buscarPelicula()}>
                                <SearchIcon className="cursor-pointer ml-4 h-6 w-6 text-white"/>
                                </button>
                            {!credenciales.user_role ?
                                <ul className="flex items-center">
                                    <li className='ml-16'>
                                        <div className="headerButton cursor-pointer" onClick={() => viajar("/login")}>Login</div>
                                    </li>
                                    <li className='ml-16'>
                                        <div className='textLink cursor-pointer' onClick={() => viajar("/register")}>Register</div>
                                    </li>
                                </ul>
                            :
                                <ul className="flex items-center">
                                    <li className='ml-16'>
                                        <div className='textLink cursor-pointer' onClick={() => viajar("/profile")}>Perfil</div>
                                    </li>
                                    <li className='ml-16'>
                                        <div className='textLink cursor-pointer' onClick={() => cerrarSesion()}>Cerrar sesión</div>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>
            </div>
    )
};

export default Header;