import React from 'react';

class SearchBar extends React.Component{
	state = {term: ''};

	onFormSubmit=(event)=>{
		event.preventDefault();
		this.props.onSubmit(this.state.term)
	}

	render(){
		/*no parenthesis becuase we don't want it called each time the render function is called*/
		return (
			<div className="ui segment"> 
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
						
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;