import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useHistory } from 'react-router'


export default function Gallery({ cols, images, type, gap }) {


  return <>
    <Carousel cols={cols} rows={1} gap={gap} loop={true} autoplay={3000}>
      {images && images.map(item => {
        return <Carousel.Item>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
              <img
                width={120}
                height={120}
                src={item} alt='1' />
            </div>
          

        </Carousel.Item>

      })}
    </Carousel>
  </>
}



