import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const SearchBox = (props) => {
  let textInput = React.createRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (textInput.current.value.length > 0) {
      props.searchHandler(textInput.current.value);
    }
  };
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label>Movie title:</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control ref={textInput} type="text"></Form.Control>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleClick}>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SearchBox;
