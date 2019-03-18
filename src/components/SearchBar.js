import React, {Component} from 'react'


class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { 
            term : ""
        } 
        // this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form 
                onSubmit={this.handleFormSubmit}
                className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar