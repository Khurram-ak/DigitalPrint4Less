import { Col, Container, Row, NavItem, NavLink, NavbarToggler, Navbar, Collapse, Nav } from "reactstrap";
import { useState,useEffect } from 'react'
import SmallMenu from "../SmallMenu";
import { Fade } from "react-reveal";
import './index.css'
import axios from 'axios'


export default function Menu() {

    const toggle = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);
    const [mainCategory,setMainCategory]=useState()
    const [menu, setMenu] = useState(false);

    useEffect(()=>{
        // http://erp.entertechsolutions.com/SubCategory/GetSkuSubCategory_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4&MainCategoryID=0506fa71-d383-40c3-bf41-767b33f0f350
        // fetch('http://erp.entertechsolutions.com/MainCategory/GetSkuMainCategory_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')    
        // .then(Response=> Response.json())
        // .then(Response=> ('ress',Response))

        
        axios.get('http://app.ghaarsay.com/MainCategory/GetSkuMainCategory_CustomerPage?companyID=0c5bd553-46c5-440d-8c5a-5ba3353dbf48').then((response) => {
            setMainCategory(response.data);
          });


    },[])

   const getData=(val)=>{
        setMenu(val)
    }


    return <>

        <Container fluid style={{ borderTop: "1px solid lightgray", }}>
            <Row style={{ width: "88%", margin: 'auto', padding: '2px' }}>
                <Col style={{ display: "flex",   }} >

                    <Navbar className="navbar" light expand="md" style={{width:"100%"}}>
                        <NavbarToggler className="toggler" onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto corner" navbar  style={{width:"100%"}}>
                                <div className="menu"  style={{width:"100%"}} >
                                    <NavItem  onMouseEnter={() => { setMenu(true) }} className="menu" >
                                        <NavLink style={{ color: 'black', }}>Products <i class="fas fa-angle-down caret"></i></NavLink>
                                        {menu && <div className="position"   ><Fade bottom><SmallMenu mainCategory={mainCategory} sendData={getData}/></Fade></div>}
                                    </NavItem>

                                    <NavItem  className="menu" >
                                        <NavLink style={{ color: 'black' }}>Design Lab <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem  className="menu" >
                                        <NavLink style={{ color: 'black' }}>Templates <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem  className="menu" >
                                        <NavLink style={{ color: 'black' }}>Fundraising <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                    <NavItem  className="menu" >
                                        <NavLink style={{ color: 'black' }}>Your Account <i class="fas fa-angle-down caret"></i></NavLink>
                                    </NavItem>

                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>

                </Col>
            </Row>


        </Container>




    </>
}
