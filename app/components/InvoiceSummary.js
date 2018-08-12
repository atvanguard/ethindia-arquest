import React from 'react'
import {
  AragonApp,
  Button,
  Text,
  AppBar,
  observe,
  AppView,
  ContextMenu, ContextMenuItem,
  Table, TableHeader, TableRow, TableCell,
  Card,
  SidePanel
} from '@aragon/ui'
import { Grid, Row, Col } from 'react-flexbox-grid';
// // import Aragon, { providers } from '@aragon/client'
// import styled from 'styled-components'
// import AppLayout from './components/AppLayout'


class ObjectRow extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   id: this.props.id,
    //   status: this.props.status
    // };
  }
  render() {
    return (
      <TableRow>
        <TableCell>
            <Text>{this.props.id}</Text>
        </TableCell>
        <TableCell>
            <Text>{this.props.status}</Text>
        </TableCell>
      </TableRow>
    )
  }
}

export default class InvoiceSummary extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     rows: [{id: 'paymentId', status: 'Pending'}, {id: 'paymentId2', status: 'Accepted'}]
  //   };
  // }
  render () {
    var rows = [];
    for (var i = 0; i < this.props.rows.length; i++) {
        var row = this.props.rows[i];
        rows.push(<ObjectRow key={i} id={row.id} status={row.status} />);
    }
    return (
      
              <Table
                    header={
                      <TableRow>
                        <TableHeader title="Invoices" />
                      </TableRow>
                    }
              >
                  {rows}
              </Table>
    )
  }
}