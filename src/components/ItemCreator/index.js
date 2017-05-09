import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../logic/actions';
import messages from './messages';
import './styles.css';

export function ItemCreator({ onAdd }) {
  let inputField;

  return (
    <div className={'itemCreator'}>
      <input
        ref={(input) => { inputField = input; }}
        className={'itemCreator-input'}
        type="text"
        placeholder={messages.placeholder.defaultMessage}
      />
      <input
        className={'itemCreator-button'}
        type="button"
        value={messages.addAction.defaultMessage}
        onClick={() => {
          inputField.value && onAdd(inputField.value);
          inputField.value = '';
        }}
      />
    </div>
  );
}

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAdd: (newItem) => dispatch(addItem(newItem)),
});

export default connect(
  null, mapDispatchToProps
)(ItemCreator);
