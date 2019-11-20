import React, { Component } from "react";
import { Carousel, Card, Image, Button } from "react-bootstrap";

// this component displays favourites
export default class Favourites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let favourites = [...this.props.favourites];
    let favouritesList = null;

    if (favourites.length > 0) {
      favouritesList = favourites.map((tune, index) => {
        const favouritesList = (
          <Carousel.Item key={tune.trackId} style={{ backgroundColor: "white" }}>
            <div className="container d-inline-block w-100 shadow rounded"
              style={{
                height: 300
              }}>
              <br></br>
              <Card style={{ width: '15.8rem', backgroundColor: 'lightgray', height: 250 }}>
                <Card.Body>
                  <Image src={tune.artworkUrl60} />
                  <Card.Title>{tune.artistName} - {tune.trackName}</Card.Title>
                  <Button className="btn btn-primary m-1">${tune.trackPrice}</Button>
                  <Button href={tune.previewUrl} className="btn btn-warning m-1">Preview</Button>
                  <a
                    className="btn btn-danger"
                    onClick={this.props.remove.bind(this)}
                    id={tune.trackId}>-</a>
                </Card.Body>
              </Card>

            </div>
          </Carousel.Item>
        );
        return favouritesList;
      })
    }

    return (
      <div className="w-25 h-100 float-right rounded shadow"
      >
        <h2 style={{
          fontFamily: "Arial"
        }}><strong><i>Favourites</i></strong></h2>
        {
          (favouritesList !== null && favouritesList.length > 0) ?
            <Carousel style={{ height: 290 }} >{favouritesList}</Carousel> :
            <p><small><strong>Add some favourites!</strong></small></p>
        }
      </div>
    );
  }
}



