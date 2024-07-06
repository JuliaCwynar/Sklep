import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom'
import { useFilter } from '../contexts/filter-context';
import { useLocation, useNavigate  } from 'react-router-dom';

function Products (){
    const location = useLocation();
  const navigate = useNavigate();
const queryParams = new URLSearchParams(location.search);


    const [products, setProducts] = useState([]);
    const { filter, setFilter } = useFilter();
    const [queryParameters, setQueryParameters] = useState();

     useEffect(() => {
    let queryString = ''
Object.entries(filter).forEach(([key, value]) => {
  if (value.length > 0) {
    value.forEach(val => {
      queryString += `&${key}=${val}`;
    });
  }
});
    setCurrentPage(1);
    setQueryParameters(queryString)
    getData(1, queryString)

  }, [filter]);

    
    const [productsNumber, setProductsNumber] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     

    const getData = async (pageNumber, query) => {
        const { data } = await axios.get(`http://localhost:8000/styrofoams/?page=${pageNumber}${query}`);

        setProductsNumber(data['count'])
        setProducts(data['results']);
        setCurrentPage(pageNumber);
    };
    useEffect(() => {
        getData(1, queryParameters);
    }, []);

     const handlePageChange = (page) => {
        getData(page, queryParameters);
    };


    const productView = products.map(item => (
        <div className="item" key={item.id}>
            <div className="image">
                <img src={`http://localhost:8000${item.image}`}/>

            </div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.min_price}zł</h3>
            <Link to={`/item/t/${item.id}`}><button>Zobacz więcej</button></Link>
        </div>
    ));

    return (
        <div className="shop">
            <h2>Wszystkie produkty</h2>
            <div className="products">{productView}
                <div className="pagination-container">
                    <Pagination current={currentPage} total={productsNumber} pageSize={9} onChange={handlePageChange} />
                </div>

                </div>
        </div>
    );
}

export default Products