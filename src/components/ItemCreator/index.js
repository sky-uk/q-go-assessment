import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../logic/todos';
import './styles.css';

export const ItemCreator = ({ onAdd }) => {
  let inputField;

  return (
    <div className="itemCreator">
      <input
        ref={(input) => {
          inputField = input;
        }}
        className="itemCreator-input"
        type="text"
        placeholder="What do you need to do?"
      />
      <input
        className="itemCreator-button"
        type="button"
        value="Add Task"
        onClick={() => {
          inputField.value && onAdd(inputField.value);
          inputField.value = '';
        }}
      />
    </div>
  );
};

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (newItem) => dispatch(addItem(newItem)),
});

export default connect(null, mapDispatchToProps)(ItemCreator);
