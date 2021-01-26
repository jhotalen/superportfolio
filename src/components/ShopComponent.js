import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  onShopItemSelect(shopItem) {
    this.setState({ selectedItem: shopItem });
  }

  renderSelectedShopItem(shopItem) {
    if (shopItem) {
      return (
        <Card>
          <CardImg top src={shopItem.image} alt={shopItem.name} />
          <CardBody>
            <CardTitle>{shopItem.name}</CardTitle>
            <CardText>{shopItem.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const shop = this.props.shopitems.map((shopItem) => {
      return (
        <div key={shopItem.id} className="col-md-5 m-1">
          <Card onClick={() => this.onShopItemSelect(shopItem)}>
            <CardImg width="100%" src={shopItem.image} alt={shopItem.name} />
            <CardImgOverlay>
              <CardTitle>{shopItem.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
            {shop}
        </div>
        <div className="row">
            <div className="col-md-5 m-1">
                {this.renderSelectedShopItem(this.state.selectedItem)}
          </div>
        </div>
      </div>
    ); 

  }
}

export default Shop;
