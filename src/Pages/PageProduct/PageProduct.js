import './PageProduct.css';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';
import Head from '../../components/Header/Head/Head';
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter';


function PageProduct () {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
       fetch('https://api.escuelajs.co/api/v1/products')
       .then((response) => response.json())
       .then((result) => {
        setProducts(result);
       })
    }, []);

    return (
      <div id="header_1">
        <Head />
        <Filter />
          <div className="Card-container">
            {
              products.map((item, index) => {
                return <div key={index}>
                          <Product title={item.category.name}
                                 name={item.title}
                                 id={item.id}
                                 img={item.category.image}
                                 prise={item.price}/>
                        </div>
              })
            }
          </div>
          <a className="Page-up" href='#header_1'>#Вернуться к началу#</a>
        <Footer />
      </div>
    )
}

export default PageProduct;