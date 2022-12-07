import { Box } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import laravel_logo from '../../assets/images/technologies/laravel.png';
import react_logo from '../../assets/images/technologies/react.png';
import reactnative_logo from '../../assets/images/technologies/reactnative.png';
import node_logo from '../../assets/images/technologies/node.png';
import mysql_logo from '../../assets/images/technologies/mysql.png';
import php_logo from '../../assets/images/technologies/php.png';

export default class CenterMode extends Component {
  render() {
    
    const logos = [
        react_logo,
        reactnative_logo,
        node_logo,
        mysql_logo,
        php_logo,
        laravel_logo
    ];
    
    const settings = {
      //className: "center",
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return (
      <div>
        <Slider {...settings}>
            {
                logos.map(item =>
                    <Box component='div' style={{display:'flex',flexDirection:'row',justifyContent:'center',width:200,background:'#000'}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <img style={{width:150}} src={item} alt={item}/>
                        </div>
                    </Box> 
                )
            }
        </Slider>
      </div>
    );
  }
}