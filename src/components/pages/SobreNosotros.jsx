import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/nosotros.css";
import banner1 from "../imgNosotros/banner1.jpg";
import banner2 from "../imgNosotros/banner2.jpg";

const SobreNosotros = () => {
  return (
    <>
      <section className="container-fluid text-center bg-s1-nosotros">
        <h1 className="text-black fw-bolder">SOBRE NOSOTROS</h1>
        <div className="container">
          <p className="lead fs-3 text-black">
            El éxito de <b>Oasis Urbano</b> nace del sueño de ofrecer una
            experiencia única, donde la hospitalidad y el confort se fusionan
            con el lujo y detalle. Nuestros fundadores, comparten una pasión por
            la excelencia en el servicio y la creación de espacios que invitan a
            relajarse y disfrutar de momentos inolvidables.
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
      <section className="container-fluid bg-s2-nosotros">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              src={banner2}
              alt=""
              className="w-100 rounded banner2-nosotros"
            />
          </div>
          <div className="col-sm-12 col-lg-6 lead fs-4">
            Con una visión clara de redefinir la experiencia hotelera, unieron
            su amor por los viajes y su experiencia en el sector de la
            hospitalidad para crear un hotel que es mucho más que un lugar para
            hospedarse. Desde la exquisita atención al cliente hasta el diseño
            cuidado de cada rincón, su compromiso ha sido garantizar que cada
            huésped se sienta como en casa, pero rodeado de lujo y confort.
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNosotros;
