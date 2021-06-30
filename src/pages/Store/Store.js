import React from 'react'
import { Container, Card, CardBody, Row, Col, Collapse, CardHeader, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

// Import Product Images
import product1 from 'assets/images/product/img-1.png'
import product2 from 'assets/images/product/img-2.png'
import product3 from 'assets/images/product/img-3.png'
import product4 from 'assets/images/product/img-4.png'
import product5 from 'assets/images/product/img-5.png'
import product6 from 'assets/images/product/img-6.png'

const Store = props => {
  const breadcrumbItems = [
    { title: 'Xen Electronics', link: '#' },
    { title: 'Products', link: '#' }
  ]

  return (
        <React.Fragment>
            <div className="page-content" style={{ marginTop: 0 }}>
                <Container fluid>

                    <Breadcrumbs title="Products" breadcrumbItems={breadcrumbItems} />

                    <Row>
                        <Col xl={3} lg={4}>
                            <Card>
                                <CardHeader className="bg-transparent border-bottom">
                                    <h5 className="mb-0">Categories</h5>
                                </CardHeader>

                                <CardBody>
                                    <div id="accordion" className="custom-accordion categories-accordion mb-3">
                                        <div className="categories-group-card">
                                            <Collapse isOpen={true} id="collapseOne">
                                                <div>
                                                    <ul className="list-unstyled categories-list mb-0">
                                                        <li><Link to="#"><i className="mdi mdi-circle-medium mr-1"/> Mobile</Link></li>
                                                        <li><Link to="#"><i className="mdi mdi-circle-medium mr-1"/> Mobile accessories</Link></li>
                                                        <li><Link to="#"><i className="mdi mdi-circle-medium mr-1"/> Computers</Link></li>
                                                        <li><Link to="#"><i className="mdi mdi-circle-medium mr-1"/> Laptops</Link></li>
                                                        <li><Link to="#"><i className="mdi mdi-circle-medium mr-1"/> Speakers</Link></li>
                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={9}>
                            <Card>
                                <CardBody>
                                    <div>
                                        <Row>
                                            <Col md={6}>
                                                <div>
                                                    <h5>Gadgets & Accessories</h5>
                                                    <Breadcrumb listClassName="p-0 bg-transparent mb-2">
                                                        <BreadcrumbItem ><Link to="#">Fashion</Link></BreadcrumbItem>
                                                        <BreadcrumbItem ><Link to="#">Clothing</Link></BreadcrumbItem >
                                                        <BreadcrumbItem active>T-shirts</BreadcrumbItem >
                                                    </Breadcrumb>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="form-inline float-md-right">
                                                    <div className="search-box ml-2">
                                                        <div className="position-relative">
                                                            <Input type="text" className="form-control rounded" placeholder="Search..."/>
                                                            <i className="mdi mdi-magnify search-icon"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>

                                        <ul className="list-inline my-3 ecommerce-sortby-list">
                                            <li className="list-inline-item"><span className="font-weight-medium font-family-secondary">Sort by:</span></li>
                                            <li className="list-inline-item active ml-1"><Link to="#">Popularity</Link></li>
                                            <li className="list-inline-item ml-1"><Link to="#">Newest</Link></li>
                                            <li className="list-inline-item ml-1"><Link to="#">Discount</Link></li>
                                        </ul>

                                        <Row className="no-gutters">
                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-ribbon badge badge-warning">
                                                            Trending
                                                        </div>
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart-outline"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product1} alt="" className="img-fluid mx-auto d-block"/>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Blue color, T-shirt</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Full sleeve T-shirt</Link></h5>

                                                        <h5 className="mt-3 mb-0">$240</h5>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-ribbon badge badge-primary">
                                                            - 25 %
                                                        </div>
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart-outline"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product2} alt="" className="img-fluid mx-auto d-block"/>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Half sleeve, T-shirt</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Half sleeve T-shirt </Link></h5>

                                                        <h5 className="mt-3 mb-0"><span className="text-muted mr-2"><del>$240</del></span>$225</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart text-danger"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product3} alt="" className="img-fluid mx-auto d-block"/>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Green color, Hoodie</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Hoodie (Green)</Link></h5>

                                                        <h5 className="mt-3 mb-0"><span className="text-muted mr-2"><del>$290</del></span>$275</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart-outline"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product4} alt="" className="img-fluid mx-auto d-block"/>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Gray color, Hoodie</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Hoodie (Green)</Link></h5>

                                                        <h5 className="mt-3 mb-0"><span className="text-muted mr-2"><del>$290</del></span>$275</h5>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart text-danger"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product5} alt="" className="img-fluid mx-auto d-block"/>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Blue color, T-shirt</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Full sleeve T-shirt</Link></h5>

                                                        <h5 className="mt-3 mb-0">$242</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} sm={6}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <div className="product-ribbon badge badge-primary">
                                                            - 22 %
                                                        </div>
                                                        <div className="product-like">
                                                            <Link to="#">
                                                                <i className="mdi mdi-heart-outline"></i>
                                                            </Link>
                                                        </div>
                                                        <img src={product6} alt="" className="img-fluid mx-auto d-block"/>

                                                    </div>

                                                    <div className="text-center">
                                                        <p className="font-size-12 mb-1">Black color, T-shirt</p>
                                                        <h5 className="font-size-15"><Link to="#" className="text-dark">Half sleeve T-shirt </Link></h5>

                                                        <h5 className="mt-3 mb-0"><span className="text-muted mr-2"><del>$240</del></span>$225</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
  )
}

export default Store
