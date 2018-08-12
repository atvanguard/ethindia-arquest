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
  SidePanel
} from '@aragon/ui'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'
import InvoiceSummary from './components/InvoiceSummary';

const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`
class CreatePayment extends React.Component {
  render () {
    return (
      <Button mode="strong">Create Payment</Button>
    )
  }
}

export default class App extends React.Component {
  render () {
    var rows = [{id: 'paymentId', status: 'Pending'}, {id: 'paymentId2', status: 'Accepted'}];
    return (
      <AragonApp className="app">
        <AppBar title="Invoices" endContent={<CreatePayment />} />
        <InvoiceSummary rows={rows}/>
      </AragonApp>
    )
  }
}

const ObservedCount = observe(
  (state$) => state$,
  { count: 0 }
)(
  ({ count }) => <Text.Block style={{ textAlign: 'center' }} size='xxlarge'>{count}</Text.Block>
)
