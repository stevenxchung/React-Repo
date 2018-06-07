class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

