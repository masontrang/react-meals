import './CardGrid.css';
import Card from './Card';
import { useState } from 'react';
import Details from './Details';

function CardGrid(props) {
  const [selected, setSelected] = useState(false);

  function clickHandler(value) {
    // setSelected(data.filter((item) => item.title === value));
    const set = props.data.filter((item) => item.title === value);
    // console.log('selected', set);
    setSelected(set[0]);
    console.log('selected', selected);
  }

  return (
    <div className="CardGrid">
      {props.data.map((item) => (
        <Card
          className="Card"
          title={item.title}
          difficulty={item.difficulty}
          category={item.category}
          cuisine={item.cuisine}
          onClick={clickHandler}
        ></Card>
      ))}

      {selected && <Details selected={selected}></Details>}
    </div>
  );
}

export default CardGrid;
