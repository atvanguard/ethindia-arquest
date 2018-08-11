import React from 'react'
import {
  AragonApp,
  Button,
  Text,
  AppBar,
  observe
} from '@aragon/ui'

import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'

const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  render () {
    return (
      <AppContainer>
        <div>
          <ObservedCount observable={this.props.observable} />
          <Button onClick={() => this.props.app.decrement(2)}>Decrement</Button>
          <Button onClick={() => this.props.app.createPaymentRequest('Meet', 789)}>Create Payment</Button>
        </div>
      </AppContainer>
    )
  }
}

const ObservedCount = observe(
  (state$) => state$,
  { count: 0 }
)(
  ({ count }) => <Text.Block style={{ textAlign: 'center' }} size='xxlarge'>{count}</Text.Block>
)
