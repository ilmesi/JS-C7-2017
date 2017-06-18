import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const TodoList = React.createClass({
  propTypes: {
    items: PropTypes.array.isRequired
  },
  render() {
    const { items } = this.props;
    return (
      <div>
        {
          items.map(item => (
            <Item key={item.id} {...item} />
          ))
        }
      </div>
    );
  }
})

export default TodoList;
