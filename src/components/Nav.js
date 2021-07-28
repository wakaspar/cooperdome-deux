import * as React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

function MyNav() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
      <Nav style={{backgroundColor: "black"}} variant="pills" activeKey="1" onSelect={handleSelect}>
        <NavDropdown title="Menu" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Paint</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Print</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Merch</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">About</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }

  export default MyNav;