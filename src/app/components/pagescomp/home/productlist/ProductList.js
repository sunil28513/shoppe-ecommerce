"use client"
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
// import CartIcon from '../../../../SvgIcons'
import ProductCard from './ProductCard';
const ProductList = () => {

    const products = [
        {
          id: '1',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-1.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '2',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-2.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '3',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-3.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '4',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-4.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '5',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-5.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '6',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-6.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '7',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-7.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        {
          id: '8',
          title: 'Whitetails Women Open Sky',
          thumb:'/assets/img/product/2/prodcut-8.jpg',
          store: 'Whitetails Store',
          rating: 5,
          newPrice: '340.00',
          oldPrice: '475.00'
        },
        
      ];

  return (
    <>
            <section class="tp-product-area pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="tp-section-title-wrapper-2 text-center mb-35">
                                <span class="tp-section-title-pre-2">
                                All Product Shop
                                <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M81 14.5798C0.890564 -8.05914 -5.81154 0.0503902 5.00322 21" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-miterlimit="3.8637" stroke-linecap="round"/>
                                </svg>
                                </span>
                                <h3 class="tp-section-title-2">Customer Favorite Style Product</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                   <div className='container'>
                        <div className='row'>
                            <div className='tp-product-tab-2 tp-tab mb-50 text-center'>
                                <Nav className='nav nav-tabs justify-content-center gap-3'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All Collection</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="shoes">Shoes</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="clothing">Clothing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="bags">Bags</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                            <Tab.Content>
                                <Tab.Pane eventKey="all">
                                    <div className='row'>
                                        {products.map(product => (
                                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                                <div class="tp-product-item-2 mb-40">
                                                    <div className="product-list">
                                                        <ProductCard key={product.id} product={product} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="shoes">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="clothing">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="bags">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </div>
                   </div>
                </Tab.Container>
            </section>
    </>
  )
}

export default ProductList
