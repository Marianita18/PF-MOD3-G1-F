import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../estilos/nosotros.css'
import banner1 from '../imgNosotros/banner1.jpg'

const SobreNosotros = () => {
    return (
        <>
        <section className="container-fluid text-center bg-s1-nosotros">
      <h1 className="text-black fw-bolder">SOBRE NOSOTROS</h1>
      <div className="container">
      <p className="lead fs-3 text-black">
        El éxito de <b>Oasis Urbano</b> nace del sueño de ofrecer una experiencia
        única, donde la hospitalidad y el confort se fusionan con el lujo y
        detalle. Nuestros fundadores, comparten una pasión por la excelencia en 
        el servicio y la creación de espacios que invitan a relajarse y
        disfrutar de momentos inolvidables.
      </p>
      </div>
      <div className="w-100 container">
        <img
          src={banner1}
          alt=""
          className="w-100 img-fluid banner1-nosotros rounded"
        />
      </div>
    </section>
        </>
    );
};

export default SobreNosotros;