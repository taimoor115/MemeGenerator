import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = ({ img, title }) => {

  return (
    <Card style={{ width: "15rem", height: "20rem", margin: "25px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
