import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useHistory } from 'react-router'


export default function Gallery({ cols,gap,brandObj }) {

  return <>
    <Carousel cols={cols} rows={1} gap={gap} loop={true} autoplay={3000}>
      {brandObj && brandObj.map(item => {
        return <Carousel.Item>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
              <img
                width={120}
                height={120}
                src={item.image} alt='1' />
            </div>
            <div>
              <h5 style={{textAlign:"center",fontFamily:"Sharpsans2",paddingTop:"10px"}}>{item.name}</h5>
            </div>
          

        </Carousel.Item>
        

      })}
    </Carousel>
  </>
}



