import './Planner.css';
import Date from './Date';
import { useState } from 'react';
import moment from 'moment';

function Planner() {
  const [date, setDate] = useState(moment().format('MMM Do'));

  moment().add(1, 'days').calendar();
  return (
    <div>
      {[5, 4, 3, 2, 1].map((day) => (
        <Date />
      ))}
    </div>
  );
}

export default Planner;
