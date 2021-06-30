import '../App.css';

function Taxon(props) {
  return (
    <div>
      <h1 style={{'margin-bottom': '0%'}}>{props.name}</h1>
      <h2 style={{'margin-top': '0%'}}>Rank: {props.rank}</h2>
    </div>
  );
}

export default Taxon;