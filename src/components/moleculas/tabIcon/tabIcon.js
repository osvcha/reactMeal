import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  focused: false,
  title: '',
  iconName: '',
};

const TabIcon = props => (
  <Icon
    name={props.iconName}
    size={30}
    color={props.focused ? 'black' : 'grey'}
  />
);

TabIcon.propTypes = propTypes;
TabIcon.defaultProps = defaultProps;

export default TabIcon;
