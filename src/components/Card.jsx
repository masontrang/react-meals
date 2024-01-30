import './Card.css';
function Card(props) {
  return (
    <div
      className="Card"
      onClick={() => {
        props.onClick(props.title);
      }}
    >
      <div className="CardImage">Image</div>
      <div className="CardText">
        <h2 className="CardTitle">{props.title}</h2>
        <div className="CardFooter">
          <p>{props.difficulty}</p>
          <p>{props.category}</p>
          <p>{props.cuisine}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
