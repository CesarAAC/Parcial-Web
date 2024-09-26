import Sport from "./Sport";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Sports(props) {
    const{nombre, bestRun, bestBycicle, bestSwim}=props;
 const [sports, setSport] = useState([]);
 useEffect(() => {
   const URL =
     "https://api.mockaroo.com/api/8a3cd590?count=30&key=d2793050";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
        setSport(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de Deportes</h2>
     <hr></hr>
     <Row>
       {sports.map((sport) => (
         <Col key={sport.id}>
           <Sport props={sport} />
         </Col>
       ))}
     </Row>
   </div>

   
 );
}

export default Mascotas;