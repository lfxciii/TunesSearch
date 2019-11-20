import React, { Component } from 'react';
let renderer = require('react-test-renderer');
// import Tunes from '../components/Tunes';
import TuneList from '../components/TuneList';

// getting funny errors here. not sure why
test("tunes render test", () => {
    const tree = renderer
        .create(<Tunes />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test("tunes render test", () => {
    const tree = renderer
        .create(<TuneList 
            tunes={[{
                tarckId: 1,
                artistName: "Borderlands 3", 
                trackName: "best game ever",
                releaseDate: new Date().toString(),
                artworkUrl60: "",
                collectionCensoredName: "Hyperion",
                longDescription: "Awesome game",
                trackPrice: "0.00",
                previewUrl: ""                
            }]}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});