import './Details.css';
import Collapse from './Collapse';

function Details(props) {
  return (
    <div className="Details">
      <div className="DetailHeader">
        <div className="DetailImage">Image</div>
        <h1>{props.selected.title}</h1>
        <div className="DetailHeaderInfo">
          <p>{props.selected.difficulty}</p>
          <p>{props.selected.category}</p>
          <p>{props.selected.cuisine}</p>
        </div>
      </div>
      <div className="DetailsContents">
        <div className="DetailContent">
          <h3>Description</h3>
          <p className="DetailDescription">{props.selected.description}</p>
        </div>
        <div className="DetailContent">
          <div className="DetailContentItems">
            <div className="DetailContentItem">
              <Collapse title="Ingredients"></Collapse>
            </div>
            <div className="DetailContentItem">
              <Collapse title="Steps"></Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
