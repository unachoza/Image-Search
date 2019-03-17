import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { 
            term : ""
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form 
                onSubmit={this.handleSubmit}
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