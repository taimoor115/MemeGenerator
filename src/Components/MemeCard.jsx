import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "15rem", margin: "25px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          onClick={() => navigate(`/edit?url=${props.img}`)}
          variant="dark"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
