import React, {Component} from 'react';
import { UserContecst } from '../../context';

class Header extends Component {
  render() { 
    return ( 
      <div>
        Hello, {this.context.name} {this.context.lastName}!
      </div>
     );
  }
}
Header.contextType = UserContecst;
 
export default Header;