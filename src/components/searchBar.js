import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    


    render() {
        return (
            <div className="d-flex justify-content-center search-bar">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search Video</span>
                    </div>
                    <input className="form-control" aria-label="Large" 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    />
                    
                </div>
            </div>

          
        )
    }


    onInputChange(term)  {
        this.setState({term})
         
        console.log(term)

        this.props.onVideoSearch(term)

    }

    
      
}


export default SearchBar;