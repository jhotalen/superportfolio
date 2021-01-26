import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Shop from "./components/ShopComponent";
import "./App.css";
import { SHOPITEMS } from "./shared/Shopitems";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      shopitems: SHOPITEMS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Cool Beans</NavbarBrand>
          </div>
        </Navbar>
        <Shop shopitems={this.state.shopitems}/>
      </div>
    );
  }
}

export default App;
