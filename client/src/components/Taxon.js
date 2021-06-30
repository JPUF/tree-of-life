import '../App.css';
import React from 'react';

class Taxon extends React.Component{
    render() {
        return (
            <div>
              <h1 style={{'margin-bottom': '0%'}}>{this.props.name}</h1>
              <h2 style={{'margin-top': '0%'}}>Rank: {this.props.rank}</h2>
            </div>
          );
    }
}

export default Taxon;