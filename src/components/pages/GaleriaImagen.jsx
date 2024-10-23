import ItemFoto from "./componentesfacu/ItemFoto";
import React, { useState } from "react";

const GaleriaImagen = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const fotos = [
    {
      id: 1,
      categoria: "Habitaciones",
      fotoPrincipal: {
        src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg",
      },
      fotos: [
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
      ],
    },
    {
      id: 2,
      categoria: "Eventos",
      fotoPrincipal: {
        src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg",
      },
      fotos: [
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/evento4.jpg" },
      ],
    },
    {
      id: 1,
      categoria: "Patio",
      fotoPrincipal: {
        src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg",
      },
      fotos: [
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
      ],
    },
    {
      id: 1,
      categoria: "Patio",
      fotoPrincipal: {
        src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg",
      },
      fotos: [
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
      ],
    },
    {
      id: 1,
      categoria: "Patio",
      fotoPrincipal: {
        src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg",
      },
      fotos: [
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
        { src: "https://apartaltoverde.com.ar/system/images/pileta1.jpg" },
      ],
    },
  ];

  const Click = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <section className="my-3 py-2 text-center bg-warning container-fluid">
        <h3>Galeria de Imagenes</h3>
      </section>

      <section className="container my-3 py-3">
        <div className="row justify-content-around">
          {!categoriaSeleccionada ? (
            fotos.map((categoria) => (
              <div key={categoria.id} className="col-10 col-md-6 col-lg-4 foto">
                <h5>{categoria.categoria}</h5>
                <img
                  src={categoria.fotoPrincipal.src}
                  alt={categoria.categoria}
                  className="img-fluid rounded foto"
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
        </div>
      </section>
    </div>
  );
};

export default GaleriaImagen;
