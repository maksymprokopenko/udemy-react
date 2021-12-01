import React, { Component } from 'react';

// components
import { CardListComponent, SearchBox } from './components';

// styles
import './App.css';

export class App extends Component {
    constructor() {
        super();

        this.state = {
            searchValue: '',
            monsters: [],
        };
    }

    componentDidMount() {
      this.fetchMonsters();
    }

    fetchMonsters() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((data) => data.json())
            .then((monsters) => this.setState({ monsters }));
    }

    handleChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        const { monsters, searchValue } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        return (
            <div className="app">
                <div className="app__search">
                    <SearchBox
                        placeholder="search monsters"
                        handleChange={ this.handleChange }
                    />
                </div>
                <CardListComponent monsters={ filteredMonsters }></CardListComponent>
            </div>
        );
    }
}

export default App;
