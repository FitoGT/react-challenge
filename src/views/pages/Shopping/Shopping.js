import React  from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

function Shoppin() {
  let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  return (
    <Row>
      {products.length > 0 ? (
        products.map((p,key) => {
          return (
            <Col md={6} key={key}>
              <Card>
                <CardBody className="display-flex">
                  <img src={p.image} style={{ width: 70, height: 70 }} />
                  <div className="m-l">
                    <h2 className="h4">{p.name}</h2>
                    <p className="text-muted">{p.price}</p>
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
