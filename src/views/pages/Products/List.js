import React from 'react';
import { Table } from 'reactstrap';
import {useSelector} from 'react-redux'
function List(props) {
    let products = useSelector(state=>state.products)
    return (
        <Table >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((l,key) => {
                    return <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{l.name}</td>
                        <td>{l.price}</td>
                        <td>{l.image}</td>
                    </tr>
                    }   
                )}

            </tbody>
        </Table>
    );
}
export default List