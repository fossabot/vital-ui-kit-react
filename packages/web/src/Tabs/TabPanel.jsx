/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.tab.panel.bg};
  color: ${({ theme }) => theme.tab.panel.color};
  font-size: 0.93333rem;
  padding: 10px;
`;

type Props = {
  children: React.Node
};

class TabPanel extends React.Component<Props> {
  render() {
    return (
      <Root>
        {this.props.children}
      </Root>
);
  }
}

export default TabPanel;
