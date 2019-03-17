import React from 'react';
import CharacterComponent from './../../components/character-component/Character-Component';
import Search from './../../components/search/Search';


export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		const app = this;
		this.state = {
			rickMortyObj: [],
			rickMortyCards: [],
			rickMortySearchFix: []
		};
		app.getData = app.getData.bind(app);
		app.handleSearchTerm = app.handleSearchTerm.bind(app);
	}

	componentDidMount() {
		const app = this;
		app.getData();
	}

	getData() {
		const app = this;
		fetch('https://rickandmortyapi.com/api/character/')
			.then(response => {
				return response.json()
			})
			.then(result => {
				app.setState({
					rickMortySearchFix: result.results,
					rickMortyObj: result.results
				});
			});
	}

	handleSearchTerm(searchTerm) {
		const app = this;
		let characterObj = this.state.rickMortySearchFix;
		let characters = characterObj.filter((character) => {
			return character.name.includes(searchTerm);
		});

		app.setState({
			rickMortyCards: [],
			rickMortyObj: characters
		}, app.createCards);
	}

	createCards() {
		const app = this;
		let rickMortyArray = app.state.rickMortyObj;
		rickMortyArray.forEach((value, key) => {
			app.state.rickMortyCards.push(
				<CharacterComponent image={value.image}
				                    name={value.name}
				                    species={value.species}
				                    gender={value.gender}
				                    status={value.status}
				                    location={value.location.name}
				                    origin={value.origin.name}
				                    id={value.id}
				                    key={key}
				>
				</CharacterComponent>
			);
		});
	}

	render() {
		const app = this;
		app.createCards();
		return (
			<div className="[ row ]">
				<div className="[ col-sm-12 search ]">
					<h2>
						Search for a character:
					</h2>
				</div>
				<div className="[ col-sm-12 ]">
					<Search onSearchTerm={app.handleSearchTerm}></Search>
				</div>
				<div className="[ col-sm-12 ]">
					{app.state.rickMortyCards}
				</div>
			</div>
		);
	}
}
