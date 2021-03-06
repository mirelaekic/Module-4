/*Create a SingleBook component as a function. The component receives a
book object as a prop, and displays the cover and the title of the book.
Use react-bootstrap Cards to display a book (The book object can be read
from the one of the .json book files we gave you yesterday)
*/

import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import MyBadge from './MyBadge';
import './SingleBook.css';

const SingleBook = (props) => {
    return (
        <> 
                <Col className="mt-3">
                    <Card style={{ width: '18rem' }} className="card">
                        <Card.Img variant="top" src={props.book.img} className="books-image" />
                        <Card.Body>
                            <Card.Title className="title" >{props.book.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center text-center mt-2">
                                <MyBadge text={props.book.category} colour="success"></MyBadge>
                                <small className="text-muted">${props.book.price}</small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
};
export default SingleBook;