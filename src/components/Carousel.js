import React, { useContext, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '@mui/material/Pagination';
import CountContext from '../context/countContext';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
      position: 'relative',
      width:'100%'
    },
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      backgroundColor: '#FEA900',
      height:''
    },
    slide2: {
      backgroundColor: '#B3DC4A',
    },
    slide3: {
      backgroundColor: '#6AC0FF',
    },
  };

  
export default function Carousel({children},props)
{
    const {count,setCount} = useContext(CountContext)
    const [index,setIndex] = useState(0);
    const [page,setPage] = useState(1);

    const handleChangeIndex = (_index) => {
        setPage(_index + 1);
        setIndex(_index);
    }

    const handleChangePage = (event, value) => {
      setPage(value);
      setIndex(value - 1);
    }

    return(
        <div style={{width:'100%',position:'relative',height:props.height}}>
            <AutoPlaySwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              interval={5000}
              enableMouseEvents
            >
                {children}
            </AutoPlaySwipeableViews>
            <div 
                style={{
                    display:'flex',
                    flexDirection:'row-reverse',
                    position:'absolute',
                    bottom:10,
                    right:10,
                    background:'#8f95a6',
                    borderRadius:15,
                    padding:2
                }}
            >
              <Pagination
                color="primary"
                sx={{color:'#FFF'}}
                count={count}
                page={page} onChange={handleChangePage}
              />
            </div>
        </div>
    )

}