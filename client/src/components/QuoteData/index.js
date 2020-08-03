import React, { Component } from 'react'
import Moment from 'react-moment'
import style from './style.module.css'

const axios = require('axios')

class QuoteDetails extends Component {
  state = {  }

  getOneQuote = async () => {
    const token = localStorage.getItem('token')
    const id = this.props.match.params.id
    const url = `${process.env.REACT_APP_API_URL}/quote/${id}`
    const response = await axios.get(url, {headers: { token } })
    const data = await response.data
    this.setState({
      oneQuote: data[0]
    })
  }

  componentDidMount = async () => {
    this.getOneQuote()
  }
  
  render() { 
    const { oneQuote } = this.state
    if(!oneQuote) {
      return ( 
        <div className={style.quotedetailouterloading}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )
    } else {
      return (
        <>
        <div className={style.quotedetailouter}>
          <div className={style.titleouter}>
            <div>
              <h1 className={style.quotetitle}>Quote Details</h1>
            </div>
          </div>
          <div className={style.quotedetailcontainer}>
            <div className={style.userinfocontainer}>
              <h3>User Info</h3>
              <p>Name: {oneQuote.firstName} {oneQuote.lastName}</p>
              <p>Phone Number: {oneQuote.phoneNumber}</p>
              <p>Email: {oneQuote.email}</p>
            </div>
            <div className={style.dateinfo}>
              <h3>Date Info</h3>
              <p>Quote created at: <Moment local format="MMM DD, YYYY LT">{oneQuote.createdAt}</Moment></p>
              <p>Estimated pick up date: <Moment local format="MMM DD, YYYY LT">{oneQuote.dateAndTimePickup}</Moment></p>
            </div>
            <div className={style.aboutproduct}>
              <h3>Product Info</h3>
              <p>Type of product: {oneQuote.productType.map(product => <span>{product}, </span>)}</p>
              <p>Type of occasion: {oneQuote.eventType}</p>
              <p>Cake flavour: {oneQuote.cakeFlavour}</p>
              <p>Filling flavour: {oneQuote.cakeFilling}</p>
            </div>
            <div className={style.otherinfo}>
              <h3>Other Info</h3>
              <p>Number of guests: {oneQuote.numberOfGuests} people</p>
              <p>Other Information: {oneQuote.otherInfo}</p>
            </div>
          </div>
        </div>
        </>
      )
    }
  }
}

export default QuoteDetails