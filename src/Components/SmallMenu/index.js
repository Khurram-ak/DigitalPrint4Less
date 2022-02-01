import React, { useEffect, useState } from 'react'
import "./index.css"
import Fade from 'react-reveal'
import { useNavigate } from "react-router-dom";


export default function SmallMenu(props) {
    const navigate = useNavigate()
    const [subDisplay, setSubDisplay] = useState(false)


    return <>

        <div style={{ display: "flex" }}>
            <div className='column'   >
                <div onMouseEnter={() => {setSubDisplay(true) }}
                 style={{ display: 'flex',borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                    <div className='menuItem'>
                        <p > T-Shirts For Men  </p>
                    </div>
                    <div className="arrow" >
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                </div>
                <div onMouseEnter={() => {setSubDisplay(true) }}
                 style={{ display: 'flex',borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                    <div className='menuItem'>
                        <p > Brands </p>
                    </div>
                    <div className="arrow" >
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                </div>
                <div onMouseEnter={() => {setSubDisplay(true) }}
                 style={{ display: 'flex',borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                    <div className='menuItem'>
                        <p > Polo/Knits</p>
                    </div>
                    <div className="arrow" >
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                </div>
            </div>  
            {subDisplay && 
                <Fade bottom>
                    <div onMouseLeave={() => { setSubDisplay(false) }} className='subColumn'   >
                        <div
                            onClick={() => { navigate(`/subCategoryPage`) }}
                            style={{ display: 'flex', overflow: "auto",borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                            <div className='menuItem2'>
                                <p > Short Sleeve T-Shirts</p>
                            </div>
                        </div>
                        <div
                            style={{ display: 'flex', overflow: "auto",borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                            <div className='menuItem2'>
                                <p > Long Sleeves T-Shirts</p>
                            </div>
                        </div>
                        <div
                            style={{ display: 'flex', overflow: "auto",borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                            <div className='menuItem2'>
                                <p > Soft Tri-blend T-Shirts</p>
                            </div>
                        </div>
                        <div
                            style={{ display: 'flex', overflow: "auto",borderBottom:"2px solid lightgray" }} className='hoverCategory'>
                            <div className='menuItem2'>
                                <p > Tops & Sleeveless</p>
                            </div>
                        </div>
                        {/* <Divider style={{ border: '1px solid black' }} /> */}
                    </div>

                </Fade>
            }
        </div>
    </>
}
