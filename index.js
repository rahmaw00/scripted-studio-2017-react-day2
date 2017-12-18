/*global React*/
/*global ReactDOM*/

//Part One: Implement the TODO App from here: https://goo.gl/vySbPk
//Part Two: Add a delete button to each list element.

function List(props) {
    return (<ul>
      {
        props.items.map(function(item, index) {
          return <li key={index}>{item}</li>;
        })}
    </ul>);
};

var App = React.createClass({
  getInitialState: function() {
    return {
      term: '',
      items: []
    };
  },
  onChange: function(event) {
    this.setState({ term: event.target.value });
  },
  onSubmit: function(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term]
    });
  },
  render: function() {
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);