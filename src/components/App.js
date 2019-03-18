import React, {Component} from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends Component{
    state = { images: [] }
 
    
    

     onSearchSubmit = async(term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 6b7198ae94debdaaa4a572ff5548c06da0c748f53dd039de22f8d80eb85188b7'
            }
        })

        this.setState({ images : response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found {this.state.images.length} images
            </div>
            )
    }
    

}
 

export default App