import { Box, Container, Typography } from "@mui/material"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css" //"slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../components/Carousel";
import CenterMode from "./carouselSlick";

export default function Technologies()
{
    return(
        <Container>
            <Typography variant="h3" component='h2' sx={{fontWeight:'bold',textAlign:'center'}}>Tecnologías con las que trabajamos</Typography>
            <br/><br/><br/>
            <CenterMode/>
            <br/><br/><br/>
        </Container>
    )
}