import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { setSearchField, onSearchSubmit } from '../redux/actions/index';
import { bindActionCreators } from 'redux';

class App extends Component {
  state = { images: [] };

  

  render() {
    console.log('thisisiprops', this.props.setSearchField)
    console.log('thisisistate',  this.state)
    
    return (
      <div className="ui container " style={{ marginTop: '20px' }}>
        <SearchBar onChange={this.props.setSearchField} onSearchSubmit={this.props.onSearchSubmit} />
        {/* <ImageList onSearchSubmit={this.props.onSearchSubmit} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchImages.searchField,
    images: state.onSearchSubmit
  };
};
const mapDisptchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchField: e => setSearchField(e.target.value),
      onSearchSubmit:(e, state) => onSearchSubmit( e, state),
      
    },
    dispatch
  );

export default connect(mapStateToProps, mapDisptchToProps)(App);
