import React, { Component } from 'react';
import { Navbar, NavDropdown, Button, FormControl, Form, Nav } from "react-bootstrap";

// this component handles the inputs and delegates submission to parent through props b
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeys: {
                term: "jack johnson",
                entity: "all"
            }
        }
    }

    // signal parent to search based on keywords
    searchTuneHandler() {
        // validation
        let searchKeys = { ...this.state.searchKeys };
        if (searchKeys.term === "" ||
            searchKeys.entity === "") {
               alert("Please enter a valid search term and a valid filter entity");
        }else{// notify parent            
            this.props.search({ ...this.state.searchKeys });
        }       
    }

    // updates state entity from dropdowns
    searchEntityHandler(e) {
        this.setState({
            searchKeys: {
                ...this.state.searchKeys,
                entity: e.target.id
            }
        });
    }

    // updates state term
    searchTermHandler(e) {
        this.setState({
            searchKeys: {
                ...this.state.searchKeys,
                term: e.target.value
            }
        });
    }

    render() {        

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><strong>Search for a tune on <em>ITunes!</em></strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Filter by media" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="all">All</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="movie">Movies</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="podcast">Podcast</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="music">Music</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="audiobook">Audio books</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="shortFilm">Short films</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="tvShow">TV Shows</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="software">Software</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.searchEntityHandler.bind(this)} id="ebook">E-books</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text"
                            onChange={this.searchTermHandler.bind(this)}
                            placeholder="Search a term"
                            className="mr-sm-2" />
                        <Button
                            onClick={this.searchTuneHandler.bind(this)}
                            variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}