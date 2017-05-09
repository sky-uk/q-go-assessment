import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { selectItems } from './selectors';
import messages from './messages';
import './styles.css';

export function ItemsList({ items }) {
  return (
    <div>
      <ul className={'itemsList-ul'}>
        { items.length < 1 &&
          <p id={'items-missing'}>
            <FormattedMessage {...messages.noItems} />
          </p>
        }
        { items.map(item => (
          <li key={item.id}>{ item.content }</li>
        )) }
      </ul>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  items: selectItems(),
})

export default connect(
  mapStateToProps,
)(ItemsList);
