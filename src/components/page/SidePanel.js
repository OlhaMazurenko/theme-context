import React, {Component} from 'react';
import {UserContecst} from '../../context';

class SidePanel extends Component {
  render() { 
    return ( 
      <div>
        This is {this.context.name} {this.context.lastName}!
      </div>
     );
  }
}

SidePanel.contextType = UserContecst;
 
export default SidePanel;