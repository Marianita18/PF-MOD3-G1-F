import "../css/carousel.css"

import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const Carrusel = () => {
  return (
    <>
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img  src="../public/imgindex/camino.jpg" className="d-block w-100 img-carousel"></img>
    <div class="container">
  <div className="row carousel-caption top-0">
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} 
    className=" col-lg-8 col-md-12">
      <h1 className='carouseltitle'>
     Descubre una experiencia
    única en el corazón de la ciudad </h1>
     </motion.div>
  
     <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} 
    className="disfruta col-lg-12 col-md-6">
      
      <h2 className="carouselsubtitle">
      Siente la comodidad que te mereces </h2><button className="explora">Explora Nuestras Habitaciones</button>
     
      
     </motion.div>

      

    
  </div>
</div>
    </div>
    <div class="carousel-item">
    <img  src="../public/imgindex/camino.jpg" className="d-block w-100 img-carousel" alt="img"></img>
    </div>
    <div class="carousel-item">
    <img  src="../public/imgindex/ciudad.jpg" className="d-block w-100 img-carousel" alt="img"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};
