import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { addCart } from './../../../actions';
import { useDispatch } from 'react-redux';
function Shoppin() {
  let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  const dispatch = useDispatch();

  let addToCart = obj => {
    dispatch(addCart(obj));
  };
  return (
    <Row>
      {products.length > 0 ? (
        products.map((p, key) => {
          return (
            <Col md={6} key={key}>
              <Card>
                <CardBody className="display-flex">
                  <img alt="product" src={p.image} style={{ width: 70, height: 70 }} />
                  <div className="m-l">
                    <h2 className="h4">{p.name}</h2>
                    <p className="text-muted">{p.price}</p>
                  </div>
                  <div className="ml-auto">
                    <button onClick={()=>addToCart(p)} className="btn btn-primary">Add to Cart</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })
      ) : (
        <p>No products found</p>
      )}
    </Row>
  );
}
export default Shoppin;
