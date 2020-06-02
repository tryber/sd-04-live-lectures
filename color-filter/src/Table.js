import React from 'react';


class Table extends React.Component {
  render() {
    const { colors, filter } = this.props;
    return (
      colors.filter(({ color }) => [color, 'all'].includes(filter))
        .map(({ color, value }) => (
          <li key={value}>
            {color} coded as {value}
          </li>
        ))
    )
  }
}


export default Table;