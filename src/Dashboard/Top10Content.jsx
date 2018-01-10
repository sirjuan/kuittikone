import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTop10Items } from 'store/actionCreators'
import { Table } from 'reactstrap'
import { dispatch } from 'store'
import { formatNumber } from '../utils'

class Dashboard extends Component {


  componentWillMount = () => {
    dispatch(getTop10Items())
  }

  render = () => {
    const { items } = this.props;
    return (
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Tavara</th>
              <th>Lkm</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.item.name}</td>
                <td>{formatNumber(item.number)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
  )}
}

const mapStateToProps = state => {
  const { top10Items: items = [] } = state;
  return { items };
}

export default connect(mapStateToProps)(Dashboard);
