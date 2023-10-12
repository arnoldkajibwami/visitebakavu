import React from "react";
import Post1 from "./Post1";
import Post2 from "./Poste2";
import Post3 from "./Post3";
import Post4 from "./post4";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

    
const Posts = () => {
    return (
        <Container>
            <div style={{ height: "100px" }}></div>
            <div className="allBlogs">
                <div className="RowCol">
                    <div md={8} className="mb-4 mt-4">
                        <Post1 />
                    </div>
                    <div md={8} className="mb-4 mt-4">
                        <Post2 />
                    </div>
                    <div md={8} className="mb-4 mt-4">
                        <Post3 />
                    </div>
                    <div md={8} className="mb-4 mt-4">
                        <Post4 />
                    </div>
                </div>
                <div md={2} className="mt-4 float-right cardblogs">
                    <Card id="cardblog">
                        <Card.Body>
                            <Card.Title>Recent Posts</Card.Title>
                            <ul className="list-unstyled">
                                <li><Link id="postlink" to="/">Cloud Computing </Link></li>
                                <li><Link id="postlink" to="/">Consultance</Link></li>
                                <li><Link id="postlink" to="/">Voip Server</Link></li>
                                <li><Link id="postlink" to="/">Networking</Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Posts;