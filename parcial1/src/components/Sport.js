import { Card, Row } from "react-bootstrap";
function Sport(props){
    const {deporte, ciudad, distancia, tiempo}=props;
    <Row>
     <Card style={{ width: "18rem" }}>
       <Card.Body className="mb-3">
         <Card.Title>{deporte}</Card.Title>
         <Card.Text>Ruta por {ciudad}</Card.Text>
         <Card.Text>Distancia {distancia}</Card.Text>
         <Card.Text>Tiempo Estimado {tiempo}</Card.Text>
       </Card.Body>
     </Card>
   </Row>
}
export default Sport;