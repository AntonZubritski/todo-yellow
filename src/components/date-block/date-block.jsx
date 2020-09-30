import React from 'react'
import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import './date-block.css'
import 'react-datepicker/dist/react-datepicker.css'


const DateBlock = ({filter, filterFrom, filterTo}) => {
    const dispatch = useDispatch()

    return (
        <div className={filter ? 'date-form' : 'date-form-hide'}>
        <div className="date-form-input">
        <div className="date-input">
          Date from
          <DatePicker
            selected={filterFrom}
            className="date"
            dateFormat="dd.MM.yyyy"
            withPortal
            onChange={(date) => dispatch(actions.changeFilterFrom(date))}
          />
        </div>
        <div className="date-input">
          Date to
          <DatePicker
            selected={filterTo}
            className="date"
            dateFormat="dd.MM.yyyy"
            withPortal
            onChange={(date) => dispatch(actions.changeFilterTo(date))}
          />
          </div>
        </div>
      </div>
    )
}
export default DateBlock
