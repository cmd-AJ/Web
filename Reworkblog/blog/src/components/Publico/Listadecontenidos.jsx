
import './Listadoconten.css'
import Contenido from './Content.jsx'
import { useState, useEffect } from "react";
import { conseguirPost } from '../Api/api_docker/controlador';

function Listacontent(){


    const [data, setdata] = useState([{
        "id": 1,
        "title": "Nombres De Los Carros Teslas Son Raros",
        "nombre_carro": "Model S,E,X,Y",
        "modelo_carro": "2024",
        "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
        "imagen": "",
        "fecha": "2024-04-04"
      },
      {
        "id": 2,
        "title": "BMW",
        "nombre_carro": "M5",
        "modelo_carro": "2024",
        "contenido": "VROOM",
        "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
        "fecha": "2024-04-01"
      },
      {
        "id": 3,
        "title": "Rayo Maqueen",
        "nombre_carro": "Corvette",
        "modelo_carro": "2024",
        "contenido": "VROOM",
        "imagen": "https://static.motor.es/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg",
        "fecha": "2024-04-01"
      }])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedPosts = await conseguirPost();
            setdata(fetchedPosts);
            
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []); 
    

    return (
        <div className='estructuralist'>

        {data.map((elemento) => (
          <>
            <div key={elemento.id}></div>
            <Contenido  id={elemento.id} name={elemento.title} modelo={elemento.nombre_carro} years={elemento.modelo_carro} descripcion={elemento.contenido} imagen={elemento.imagen}></Contenido>
          </>
        ))}
        
        </div>

    )

}
export default Listacontent

