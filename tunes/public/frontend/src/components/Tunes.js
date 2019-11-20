import React, { Component } from "react";
import Search from "./Search";
import Favourites from "./Favourites";
import TuneList from "./TuneList";

// this component controls the logic and state for the entire app
export default class Tunes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: [],
            tunes: []
        };
    }

    // search request to api
    async searchTune(searchKeys) {
        let response = await fetch(`/itunes/search/${searchKeys.term}/${searchKeys.entity}`);
        // if not valid display error
        if (response.status !== 200) {
            alert("Search yielded no results, please try another search term or entity");
            this.setState({
                ...this.state.favourites,
                tunes: []
            });
        } else { // request success
            let tunesSearch = await response.json();

            this.setState({
                ...this.state.favourites,
                tunes: [...tunesSearch.results]
            });
        }
    }

    // gets tune clicked by id and add it to favourites
    addToFavourites(e) {
        // find item in list
        let fav = [...this.state.tunes].find((tune) => {
            return (tune.trackId === parseInt(e.target.id));
        });
        fav["isFav"] = true;// add dynamic property

        // add to fav list
        let favList = [...this.state.favourites];
        favList.push(fav);

        // update state to trigger refresh
        this.setState({
            ...this.state.tunes,
            favourites: favList
        });
    }

    // gets tune clicked by id and add it to favourites
    removeFromFavourites(e) {
        // find item in list        
        let fav = [...this.state.tunes].find((tune) => {
            return (tune.trackId === parseInt(e.target.id));
        });
        fav["isFav"] = false;// add dynamic property
        // remove item from favourites
        let newFavs = [...this.state.favourites].filter((tune) => {
            return (tune.trackId !== parseInt(e.target.id));
        });

        // update state to trigger refresh
        this.setState({
            ...this.state.tunes,
            favourites: newFavs
        });
    }

    render() {
        return (
            <div className="container rounded w-100">
                <Search
                    search={this.searchTune.bind(this)}
                />
                <div>
                    <TuneList
                        tunes={[...this.state.tunes]}
                        add={this.addToFavourites.bind(this)}
                        remove={this.removeFromFavourites.bind(this)}
                    />
                </div>
                <Favourites
                    favourites={[...this.state.favourites]}
                    add={this.addToFavourites.bind(this)}
                    remove={this.removeFromFavourites.bind(this)}
                />
            </div>
        );
    }
}