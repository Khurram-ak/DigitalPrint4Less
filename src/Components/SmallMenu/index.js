import React, { useEffect, useState } from 'react'
import "./index.css"
import Fade from 'react-reveal'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function SmallMenu({ mainCategory, sendData }) {
    const navigate = useNavigate()
    const [subDisplay, setSubDisplay] = useState(false)
    const [subId, setSubId] = useState('');
    const [subIdToPass, setSubIdToPass] = useState('');
    const [subCategory, setSubCategory] = useState();


    // const [subCategoryNames, setSubCategoryNames] = useState();

    var subCategoryNames = [];
    // var mainID="844f1f46-0500-442a-ba3f-c3500cd2910b"
    useEffect(() => {
        subId &&
            axios.get(`http:///app.ghaarsay.com/SubCategory/GetSkuSubCategory_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48&MainCategoryID=${subId}`)
                .then((response) => {
                    response.data.data.map(item =>setSubIdToPass(item.ID));
                    setSubCategory(response.data);
                
                });

    }, [subId])


    subCategory && subCategory.data.map(item => subCategoryNames.push(item.SubCategoryName))

    const demoMethod = () => {
        sendData(false);
    }


    return <>

        <div onMouseLeave={demoMethod} style={{ display: "flex" }}>
            <div className='column' >
                {mainCategory && mainCategory.data.map((item, index) => {
                    return <>
                        <div onMouseEnter={() => {
                            setSubId(item.ID)
                            setSubDisplay(true)
                        }}
                            style={{ display: 'flex', }} className='hoverCategory'>
                            <div className='menuItem'>
                                <p>{item.MainCategoryName} </p>
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
                                    onClick={() => {   navigate(`/subCategoryPage/${subIdToPass}`) }}
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
