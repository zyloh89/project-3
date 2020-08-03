import React from 'react';
import Moment from 'react-moment'
import style from './style.css'
import { withRouter } from 'react-router-dom'

  const quoteData = withRouter(({ history, data, id }) => (
        <tr key={data._id} onClick={() => history.push(`/QuoteDetail/${data._id}`)} className={style.tablerow}>
          <th key={data._id} scope="row" className="indexNumber">{ id + 1 }</th>
          <td key={data.firstName} className="firstName" >{data.firstName}</td>
          <td key={data.lastName} className="lastName" >{data.lastName}</td>
          <td key={data.phoneNumber} className="phoneNumber" >{data.phoneNumber}</td>
          <td key={data.pickUpDateAndTime}><Moment local format="MMM DD, YYYY LT">{data.pickUpDateAndTime}</Moment></td>
          <td key={data.createdAt}><Moment local format="MMM DD, YYYY LT">{data.createdAt}</Moment></td>
        </tr>
));


export default quoteData;