import styles from '../css/Carrosel.module.css'
import Noticia1 from '../imagens/Noticia 1.png'
import Noticia2 from '../imagens/Noticia 2.png'
import Noticia3 from '../imagens/noticia 3.png'
import Noticia4 from '../imagens/Noticia 4.png'
import Carousel from 'react-bootstrap/Carousel';


// function Carrosel(){
//     return(


    import React, { Component } from "react";
    import Slider from "react-slick";
    
    export default class SwipeToSlide extends Component {
      render() {
        const settings = {
          className: "center",
          infinite: true,
          centerPadding: "-50px",
          slidesToShow: 5,
          swipeToSlide: true,
          afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #000; color: #000`
            );
          }
        };
        return (
          <div>
            <h2>Swipe To Slide</h2>
            <Slider {...settings}>
              <div>
                <img src={Noticia1} alt="m" />
              </div>
              <div>
                <img src={Noticia2} alt="m" />
              </div>
              <div>
                <img src={Noticia3} alt="m" />
              </div>
              <div>
                <img src={Noticia4} alt="m" />
              </div>
              <div>
                <img src={Noticia1} alt="m" />
              </div>
              <div>
                <img src={Noticia2} alt="m" />
              </div>
              <div>
                <img src={Noticia3} alt="m" />
              </div>
              <div>
                <img src={Noticia3} alt="m" />
              </div>
              <div>
                <img src={Noticia2} alt="m" />
              </div>
            </Slider>
          </div>
        );
      }
    }