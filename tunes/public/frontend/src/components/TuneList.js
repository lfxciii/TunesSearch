import React, { Component } from "react";

import {
    Card, Button, Image, Accordion
} from 'react-bootstrap';

// this component displays a list of tunes
export default class TuneList extends Component {

    render() {
        let tunes = [...this.props.tunes];
        let cards = null;

        if (tunes.length > 0) {
            cards = tunes.map((tune, index) => {
                return (
                    <Accordion defaultActiveKey="1">
                        <Card
                            id={index}
                            key={index}
                            className="m-1">
                            <Card.Header style={{
                                backgroundColor: "black",
                                opacity: "0.8"
                            }} as="h5">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {tune.artistName} - {tune.trackName} ({new Date(tune.releaseDate).toLocaleDateString()})
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{
                                    backgroundColor: "lightgray"
                                }}>
                                    <Image src={tune.artworkUrl60} />
                                    <Card.Title>{tune.collectionCensoredName}</Card.Title>
                                    <Card.Text>
                                        {tune.longDescription}
                                    </Card.Text>
                                    <Button className="btn btn-primary">Price ${tune.trackPrice}</Button>
                                    <Button href={tune.previewUrl} className="btn btn-warning m-1">Preview</Button>
                                    {
                                        (!tune.isFav) ?
                                            <Button
                                                id={tune.trackId}
                                                onClick={this.props.add}
                                                className="btn btn-success">+</Button>
                                            :
                                            <Button
                                                id={tune.trackId}
                                                onClick={this.props.remove}
                                                className="btn btn-danger">-</Button>
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                );
            });
        } else {
            cards = (
                <h4><em>No search results</em></h4>
            );
        }
        return (
            <div className="float-left w-75 d-inline-block rounded"
            >
                {cards}
            </div>
        );
    }
}



