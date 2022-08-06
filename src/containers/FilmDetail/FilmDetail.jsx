import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { takeData } from './detailSlice'; 
import axios from 'axios';
import moment from 'moment';

const FilmDetail = () => {
    const [alquiler, setAlquiler] = useState();
    let detallesPelicula = useSelector(takeData);
    let credenciales = useSelector(userData);
    let navegador = useNavigate();
    useEffect(()=>{
        
        console.log(detallesPelicula);
    },[]);

    const alquilar = async () => {
        
        let orderDate = moment().format('YYYY-MM-DD');
        let returnDate = moment().add(7, 'days').format('YYYY-MM-DD');
        if(!credenciales.user_role){
            navegador('/login');
        }
        else{
            let config = {
                headers: {Authorization: `Bearer ${credenciales.token}`}
            };
            console.log(detallesPelicula._id)
            let body = {
                "orderDate": orderDate,
                "returnDate": returnDate,
                "userId": credenciales.user_id,
                "filmId": detallesPelicula._id
            }
            let order = await axios.post("https://videoclub-proyecto5.herokuapp.com/api/orders",body, config);
            console.log(order.data.message);
            if(order.data.message === "Order created succesfully"){
                setAlquiler(true);
            }else{
                setAlquiler(false);
            }
        }
    }
     return (
         <div className='movie-info border-b border-gray-800'>
            <div className="container mx-auto px-4 py-16 flex">
                <img src={detallesPelicula?.image} alt="" className='w-96'/>
                <div className="ml-24">
                    <h2 className="text-4xl flex font-semibold">{detallesPelicula.title}</h2>
                    <div className="flex items-center text-gray-400 mt-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                        <span className='ml-1'>{detallesPelicula.rating}</span>
                        <span className='mx-2'>|</span>
                        <span>Género: {detallesPelicula.genre}</span>
                    </div>
                    <div className="flex text-left text-gray-300 mt-8">{detallesPelicula.description}</div>
                    <div className="mt-12">
                        <h4 className="flex text-white font-semibold">Reparto</h4>
                        <div className="flex mt-4">
                            {
                                detallesPelicula.actors.map((actor, index)=>{
                                    return( 
                                    <div className="mr-6">
                                        <div key={index} className='text-sm text-gray-400'>{actor}</div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mt-12 flex'>
                        <button type="button" onClick={()=> alquilar()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Alquilar</button>
                    </div>
                    {alquiler==true &&
                        <div className="mt-12 flex text-lime-400">
                            Alquiler realizado correctamente
                        </div>
                    }
                    {alquiler==false &&
                        <div className="mt-12 flex text-red-600">
                            Ya tienes una pelicula alquilada
                        </div>
                    }
                </div>
            </div>
         </div>
     )
}
export default FilmDetail;