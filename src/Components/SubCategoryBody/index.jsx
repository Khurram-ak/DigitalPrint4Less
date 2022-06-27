import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import ProductCard from "../ProductCards";
import "./index.css"


import sample from '../../assests/sample.png'
import sample2 from '../../assests/sample2.png'
import sample3 from '../../assests/sample3.png'
import sample4 from '../../assests/sample4.png'

import { useNavigate, useParams } from "react-router-dom";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";


export default function SubCategoryBody() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [openType, setOpenType] = useState(true);
    const [openFeature, setOpenFeature] = useState(true);
    const [openBrand, setOpenBrand] = useState(true);
    const [openMaterial, setOpenMaterial] = useState(true);
    const [subCategorySku, setSubCategorySku] = useState([]);

    const navigate = useNavigate()

    const handleClick = (inputName) => {
        if (inputName === 'type') {
            setOpenType(!openType);
        }
        else if (inputName === 'material') {
            setOpenMaterial(!openMaterial)
        }
        else if (inputName === 'feature') {
            setOpenFeature(!openFeature)
        }
        else if (inputName === 'brand') {
            setOpenBrand(!openBrand)
        }

    }
    let { subCategoryId } = useParams();
    useEffect(() => {
        subCategoryId &&
            axios.get(`http:///app.ghaarsay.com/sku/GetSkuBySubCat_CustomerPage?page=1&pageSize=10&companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48&subCatID=${subCategoryId}`)
                .then((response) => {
                    setSubCategorySku(response.data.data)
                });

    }, [subCategoryId])
 

    return <>


        <Container style={{ backgroundColor: "#f6f6f6", height: "auto" }} fluid>
            <Row style={{ width: "92%", margin: "auto" }}>
                <Col>
                    <p style={{ fontSize: "15px", fontFamily: "sharpsans2", paddingTop: "10px" }} >All Products -- T-Shirts -- Short Sleeve T-Shirts </p>
                </Col>
            </Row>

            <Row style={{ width: "92%", margin: "auto", backgroundColor: "white" }}>
                <Col md='6'     >
                    <p style={{ fontSize: "18px", fontFamily: "sharpsans2", paddingTop: "20px " }} > Short Sleeve T-Shirts </p>
                </Col>
                <Col md='6' style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchRoundedIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" style={{ color: 'black', width: '302px' }} label="Search for t-shirts,hoodies,backpacks ..." variant="standard" />
                    </Box>

                </Col>
            </Row>
            <Row style={{ width: "92%", margin: "auto", backgroundColor: "white", marginTop: "1px" }}>
                <Col md='1' style={{ borderRight: "1px solid #f6f6f6", display: "flex", alignItems: "center", height: "60px", justifyContent: "center" }}     >
                    <p style={{ fontSize: "14px", fontFamily: "sharpsans2", }} ><FilterListIcon /> Filters </p>

                </Col>
                <Col style={{ borderRight: "1px solid #f6f6f6", display: "flex", alignItems: "center", height: "60px", }}     >
                    <p style={{ fontSize: "14px", fontFamily: "sharpsans1", }} > <SortIcon /> Sort By : Recommended <ExpandMoreIcon /></p>

                </Col>

            </Row>

            <Row style={{ width: "92%", margin: "auto" }}>

                <Col md="3" style={{ marginTop: "20px" }} >
                    <Row>
                        <Col style={{ backgroundColor: "white" }}>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemButton onClick={() => { handleClick('brand') }}>
                                    <ListItemText sx={{ pt: 1, pb: 1, }}  ><span style={{ fontFamily: 'sharpsans1' }}>Brand</span> </ListItemText>

                                    {openBrand ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openBrand} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Nike" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Sanmar" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Adidas" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Hanes" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Russels" />
                                        </ListItemButton>

                                    </List>
                                </Collapse>



                                <ListItemButton onClick={() => { handleClick('type') }}>
                                    <ListItemText sx={{ pt: 1, pb: 1, }}  ><span style={{ fontFamily: 'sharpsans1' }}>Type</span> </ListItemText>

                                    {openType ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openType} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Men" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Women" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Unisex" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Boys Under 14" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Girls Under 14" />
                                        </ListItemButton>

                                    </List>
                                </Collapse>

                                <ListItemButton onClick={() => { handleClick('feature') }}>
                                    <ListItemText sx={{ pt: 1, pb: 1, }}  ><span style={{ fontFamily: 'sharpsans1' }}>Features</span> </ListItemText>
                                    {openFeature ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openFeature} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="ECO Friendly" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Tiedie" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Vintage Wash" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="UV Protection" />
                                        </ListItemButton>

                                    </List>
                                </Collapse>

                                <ListItemButton onClick={() => { handleClick('material') }}>
                                    <ListItemText sx={{ pt: 1, pb: 1, }}  ><span style={{ fontFamily: 'sharpsans1' }}>Materials</span> </ListItemText>
                                    {openMaterial ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openMaterial} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="100% Poly" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox {...label} />
                                            <ListItemText primary="Cotton/Poly" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 1 }}>
                                            <Checkbox  {...label} />
                                            <ListItemText primary="100% Cotton" />
                                        </ListItemButton>


                                    </List>
                                </Collapse>


                            </List>
                        </Col>
                    </Row>

                </Col>

                <Col md="9">
                    <Row>
                        <Col style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                            {
                                subCategorySku.map(item => {
                                    return <ProductCard skuList={item} />
                                })
                            }


                        </Col>
                    </Row>


                </Col>
            </Row>
            <br />

        </Container>
        <Container fluid >
            <Row>
                <Col md='6' style={{ height: "25px", backgroundColor: "#0020A2" }}>

                </Col>
                <Col md='6' style={{ height: "25px", backgroundColor: "#161515" }}>

                </Col>
            </Row>
        </Container>



    </>
}
