import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
import ReactDom from 'react-dom'


const Home = () => {
  return (
    <Container className="container" fluid>
      <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  {/* <Row>
    <Col className="rightColumn">
    <h1>ONLINE COOKING COMPETITION</h1>
    </Col>

    <Col className="leftColumn">2 of 2
    <img src="https://i.imgur.com/CvsXSrP.jpg" fluid/>
    </Col>
  </Row>  */}
</Container>
   
  )
}

export default Home;