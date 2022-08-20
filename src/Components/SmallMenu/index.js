import React, { useEffect, useState } from 'react'
import "./index.css"
import Fade from 'react-reveal'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function SmallMenu({ mainCategory, sendData }) {
    const navigate = useNavigate()
    const [subDisplay, setSubDisplay] = useState(false)
    const [subId, setSubId] = useState('');
    const [subNameToPass, setSubNameToPass] = useState('');
    const [mainNameToPass, setMainNameToPass] = useState('');
    const [subCategory, setSubCategory] = useState();


    // const [subCategoryNames, setSubCategoryNames] = useState();

    var subCategoryNames = [];
    // var mainID="844f1f46-0500-442a-ba3f-c3500cd2910b"
    useEffect(() => {
        subId &&
            axios.get(`http://api.screenprint4less.com/ProductSubCategory/GetProductSubCategoryByMCID/${subId}`)
                .then((response) => {
                    response.data.map(item =>{
                        setMainNameToPass(item.mainCategoryID)
                        setSubNameToPass(item.id)
                    });
                    setSubCategory(response.data);
                
                });

    }, [subId])


    subCategory && subCategory.map(item => subCategoryNames.push(item.subCategoryName))

    const demoMethod = () => {
        sendData(false);
    }


    return <>

        <div onMouseLeave={demoMethod} style={{ display: "flex" }}>
            <div className='column' >
                {mainCategory && mainCategory?.map((item, index) => {
                    return <>
                        <div onMouseEnter={() => {
                            setSubId(item.id)
                            setSubDisplay(true)
                        }}
                            style={{ display: 'flex', }} className='hoverCategory'>
                            <div className='menuItem'>
                                <p>{item.mainCategoryName} </p>
                            </div>
                            <div className="arrow" >
                                <i class="fas fa-angle-double-right"></i>
                            </div>
                        </div>

                    </>

                })}
            </div>

            {subDisplay &&
                <Fade bottom>
                    <div onMouseLeave={() => {
                        setSubDisplay(false)
                    }} className='subColumn'   >
                        {

                            subCategoryNames && subCategoryNames.map(item => {

                                return <div
                                    onClick={() => { navigate(`/subCategoryPage/${mainNameToPass}/${subNameToPass}`) }}
                                    style={{ display: 'flex', overflow: "auto", borderBottom: "2px solid lightgray" }} className='hoverCategory'>
                                    <div className='menuItem2'>
                                        <p> {item}</p>
                                    </div>
                                </div>

                            })

                        }

                    </div>
                </Fade>
            }
        </div>
    </>
}
