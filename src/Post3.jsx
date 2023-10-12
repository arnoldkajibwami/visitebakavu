import { Card } from "react-bootstrap";
import image2 from "./images/6.jpg"
import { Link } from "react-router-dom";

const Post3 = () => {
    return (
        <Card className="card">
            <Card.Img className=""
                variant="top"
                src=
                {image2}
            />
            <Card.Body className="text">
                <Card.Title className="h3" >Voip Server</Card.Title>
                <Card.Text className="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi.
                </Card.Text>
                <Link href="#" className="btn btn-primary" style={{background:"#7B57FF"}}>Read More</Link>
            </Card.Body>
        </Card>
    )
}

export default Post3;
