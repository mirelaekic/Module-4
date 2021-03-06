import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Books from "../components/fantasy.json";
import "../components/latestRelease.css"

class FantasyBooks extends Component {
    render() {
        const OnlyFewBooks = Books.slice(14,20)
        return(
            <Container className="mt-5">
                <h3 className="title mb-5">Fantasy</h3>
                <Row>
                {OnlyFewBooks.map((BooksDetail) =>(
                    <Col lg={2}>
                    <Card className="book-card"style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={BooksDetail.img} />
                    <Card.Title className="cards-title">{BooksDetail.title}</Card.Title>
                      <Card.Text>Price ${BooksDetail.price}
                      </Card.Text>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
};

export default FantasyBooks;