import { InputGroup, Form } from "react-bootstrap";
import StreamProps from "./StreamProps";
import React from 'react';

const StreamInputs = React.memo(({ streamData, setStreamData }: StreamProps): JSX.Element => {

  return (
    <>
      <InputGroup className="mb-3 mt-2" hasValidation>
        <InputGroup.Text>Name</InputGroup.Text>
        <Form.Control
          required   
          isInvalid={streamData.name.trim() === ''} 
          value={streamData.name}
          onChange={(e) => setStreamData({...streamData, name: e.target.value})}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3 mt-2" hasValidation>
        <InputGroup.Text>Source URL</InputGroup.Text>
        <Form.Control
          required
          isInvalid={streamData.sourceURL.trim() === ''} 
          value={streamData.sourceURL}
          onChange={(e) => setStreamData({...streamData, sourceURL: e.target.value})}
        />
      <Form.Control.Feedback  type="invalid">
            Please fill all inputs
          </Form.Control.Feedback>
      </InputGroup>
      
    </>
  );
});

export default StreamInputs;