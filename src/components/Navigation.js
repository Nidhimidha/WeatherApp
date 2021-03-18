import React from "react";
import { Navbar } from "react-bootstrap";
export const Navigation = () => {
  return (
    <Navbar className="bg-dark justify-content-between" variant="dark">
      <div>
        <i className="fas fa-rainbow"></i> <Navbar.Brand>Weather App</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Navigation;
