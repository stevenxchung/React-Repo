class ProductList extends React.Component {
  // Initialize state to an empty array
  state = {
    products: [],
  };

  // Lifecycle method which is invoked after component has mounted to the page
  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  // Adds one vote to the item that was clicked on
  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    // Sort votes from largest to smallest
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    // Create an array of components using map
    const productComponents = this.state.products.map((product) => (
      // Passing down props from parent component to child
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    // Return the new array of components stored in productComponents
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      // Use props (this.props) that have been passed down from the parent component
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a>
            {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

// Instruct React to render ProductList inside an HTML element with the id of 'content'
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
