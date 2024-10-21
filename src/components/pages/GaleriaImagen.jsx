import ItemFoto from "./componentesfacu/ItemFoto";
import React, { useState } from "react";


const GaleriaImagen = () => {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const fotos = [
        {
          id: 1,
          categoria: "Habitaciones",
          fotoPrincipal: { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
          fotos: [
            { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            { src: "https://apartaltoverde.com.ar/system/images/habitacion4.jpg" }
          ],
        },
        {
          id: 2,
          categoria: "Eventos",
          fotoPrincipal: { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
          fotos: [
            { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            { src: "https://apartaltoverde.com.ar/system/images/evento4.jpg" }
          ],
        },
        {
            id: 1,
            categoria: "Patio",
            fotoPrincipal: { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            fotos: [
              { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
              { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
              { src: "https://apartaltoverde.com.ar/system/images/habitacion4.jpg" }
            ],
          },
          {
            id: 1,
            categoria: "Terraza",
            fotoPrincipal: { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
            fotos: [
              { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
              { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
              { src: "https://apartaltoverde.com.ar/system/images/habitacion4.jpg" }
            ],
          }
      ];

      const Click = (categoria) => {
        setCategoriaSeleccionada(categoria);
      };

  return (
    <div>
      <section className="my-5 py-4 text-center bg-warning container-fluid">
        <h4>Galeria de Imagenes</h4>
      </section>

      <section className="container">
        {/* Si no se ha seleccionado una categoría, mostrar todas las categorías */}
        {!categoriaSeleccionada ? (
          fotos.map((categoria) => (
            <div key={categoria.id} className="mb-4">
              <h5>{categoria.categoria}</h5>
              <img
                src={categoria.fotoPrincipal.src}
                alt={categoria.categoria}
                className="img-fluid w-50"
                onClick={() => Click(categoria)}
              />
            </div>
          ))
        ) : (

          <ItemFoto
            categoria={categoriaSeleccionada.categoria}
            fotos={categoriaSeleccionada.fotos}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
          />
        )}
      </section>
    </div>
  );
};

export default GaleriaImagen;
