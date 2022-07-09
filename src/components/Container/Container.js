import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer } from './Container.styled';

export default function Container({children}){
return <ResponsiveContainer>
          {children}
      </ResponsiveContainer>
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};


