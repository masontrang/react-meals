import './CardGrid.css';
import Card from './Card';
function CardGrid(props) {
  return (
    <div className="CardGrid">
      {props.data.map((item) => (
        <Card
          className="Card"
          title={item.title}
          difficulty={item.difficulty}
          category={item.category}
          cuisine={item.cuisine}
          onClick={props.onClick}
        ></Card>
      ))}
    </div>
  );
}

export default CardGrid;
