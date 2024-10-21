import React from "react";

const ItemFoto = ({ categoria, fotos, setCategoriaSeleccionada }) => {
  return (
    <div>
      <section className="my-5 py-3 text-center bg-primary-subtle container-fluid">
        <h4>Fotos de {categoria}</h4>
      </section>

      <section className="container">
        <button
          className="btn btn-primary mb-4"
          onClick={() => setCategoriaSeleccionada(null)}
        >
          Volver
        </button>
        <div className="row">
          {fotos.map((foto) => {
            return (
              <div className="col-4 mb-4">
                <img src={foto.src} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ItemFoto;
