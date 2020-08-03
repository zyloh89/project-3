import React, { Component } from "react";
import style from "./style.module.css";

class Quote extends Component {
  state = {
    productType: []
  };

  handleInput = e => {
    let productArray = this.state.productType;
    if (e.target.id === "productType") {
      productArray.push(e.target.value);
      this.setState({
        producType: productArray
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  };
  
  handleQuote = async (e) => {
    e.preventDefault();
    const result = await this.props.createNewQuote(this.state);
    console.log(result)
    if (result) {
      this.props.history.push('/')
    }
  };

  render() {
    return (
      <>
      <div className="container">
        <div className={style.quotecontainer}>
          <div className={style.quoteinner}>
            <form>
              <div className={style.quotecontent}>
                <div>
                  <p>
                    I am based in Modbury. Please fill in the form below and I will be in touch within 2 business days.
                  </p>
                </div>
              </div>
              <div>
                <label>What would you like to order?</label>
              </div>
              <div className={style.checkbox}>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="productType"
                      id="productType"
                      value="Standard Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Standard Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="productType"
                      id="productType"
                      value="Custom Cakes"
                      onChange={this.handleInput}
                    />
                    <span> Custom Cakes</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="productType"
                      id="productType"
                      value="Cupcakes"
                      onChange={this.handleInput}
                    />
                    <span> Cupcakes</span>
                  </label>
                </div>
              </div>
              <div className={style.guests}>
                <label>Number of Guests</label>
                <input
                  className={style.guestinput}
                  type="number"
                  name="numberOfGuests"
                  id="numberOfGuests"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.occasion}>
                <label>What is your occasion?</label>
                <input
                  type="text"
                  name="eventType"
                  id="eventType"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.flavour}>
                <label>Cake Flavour</label>
                <input
                  type="text"
                  name="cakeFlavour"
                  id="cakeFlavour"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.filling}>
                <label>Filling Flavour</label>
                <input
                  type="text"
                  name="cakeFilling"
                  id="cakeFilling"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.email}>
                <label>Email Address</label>
                <input
                  className={style.emailinput}
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.completename}>
                <div className={style.first}>
                  <label>First Name</label>
                  <input
                    className={style.firstinput}
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={this.handleInput}
                  />
                </div>
                <div className={style.last}>
                  <label>Last Name</label>
                  <input
                    className={style.lastinput}
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={this.handleInput}
                  />
                </div>
              </div>

              <div className={style.dateevent}>
                <label>Pickup Date</label>
                <input
                  className={style.dateinput}
                  type="date"
                  name="datePickup"
                  id="datePickup"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.time}>
                  <label>Time of Pick Up</label>
                  <input
                    className={style.timeinput}
                    type="time"
                    name="pickUpTime"
                    id="pickUpTime"
                    onChange={this.handleInput}
                  />
              </div>
              <div className={style.phone}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={this.handleInput}
                />
              </div>
              <div className={style.message}>
                <label>Any other information</label>
                <textarea
                  className={style.messageinput}
                  name="otherInfo"
                  id="otherInfo"
                  onChange={this.handleInput}
                />
              </div>

              <div className={style.quotesub}>
                <input
                  type="submit"
                  value="Submit"
                  onClick={this.handleQuote}
                />
              </div>
            </form>
            <div className={style.errorquote}>
              {this.props.errorMessage && <h2>{this.props.errorMessage}</h2>}
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Quote;
