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


var DeleteButton = React.createClass({
  deleteItem: function() {
    this.props.onDelete(this.props.index);
  },
  render: function() {
    return (
      <button onClick={this.deleteItem}>Delete</button>
    );
  }
});

function List(props) {
  return (<ul>
      {
      props.items.map(function(item, index) {
        return (<li id={index} key={index}>
            {item} 
            <DeleteButton index={index} onDelete={props.onDelete}/>
        </li>);
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
      term: '',
      items: [...this.state.items, this.state.term]
    });
  },
  onDelete: function(index) {
    this.state.items.splice(index, 1);
    this.setState({
      items: this.state.items
    })
  },
  render: function() {
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items} onDelete={this.onDelete}/>
      </div>
    );
  }
});


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);