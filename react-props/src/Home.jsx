import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import CreateForm from './CreateForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [],
      text: ''
    };
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }
  handleFinish(itemId, e) {
    this.setState(prevState => ({
      items: prevState.items.map(item => {
        if(item.id !== itemId) {
          return item;
        }
        return {
          ...item,
          status: 'done'
        }
      })
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      items: prevState.items.concat({
        text: prevState.text,
        id: prevState.items.length + 1,
        finish: this.handleFinish.bind(this, prevState.items.length + 1),
        status: 'active'
      }),
      text: ''
    }));
  }
  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <div className="header">
          <h2>{ name } - TODO List</h2>
          <CreateForm
            submit={this.handleSubmit}
            text={this.state.text}
            updateText={this.handleChange}
          />
          <TodoList items={this.state.items} />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home;
