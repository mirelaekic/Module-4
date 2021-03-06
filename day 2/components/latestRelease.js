import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import RomanceBooks from "../components/romance.json";
import HistoryBooks from "../components/history.json";
import SciFiBooks from "../components/scifi.json";
import "../components/latestRelease.css"

class LatestBooks extends Component {
  render() {
    const fewRomanceBooks = RomanceBooks.slice(16,17);
    const fewHistoryBooks = HistoryBooks.slice(4,6);
    const fewScifiBooks = SciFiBooks.slice(17,19);

    return (
    <Container className="mt-5 mb-5">
        <h3 className="title mb-5">Everyone's talking about...</h3>
        <div className="row-gallery">
        {fewRomanceBooks.map((BooksDetail) => (
            <div className="column">
              <Image src={BooksDetail.img} thumbnail />
              
            </div>
        ))}
        <div className="column1">
        {fewHistoryBooks.map((HistoryBook) => (
            <div>
              <Image src={HistoryBook.img} thumbnail />
              
            </div>    
        ))}
        </div>
        <div className="column2">
        {fewScifiBooks.map((ScifiBook) => (
            <div>
              <Image src={ScifiBook.img} thumbnail />
            </div>
        ))}
        </div>
        </div>
      </Container>
    );
  }
}

export default LatestBooks;
