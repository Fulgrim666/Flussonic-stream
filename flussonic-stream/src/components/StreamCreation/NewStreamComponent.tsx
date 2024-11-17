import { Container, Button, Alert,  } from "react-bootstrap";
import  StreamInputs  from "./StreamInputs";
import { useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router";

const NewStreamComponent = () => {
  const [values, setValues] = useState({ name: "", sourceURL: "" });
  const [error, setError] = useState('')
  const navigate = useNavigate()
 const sendData = () => {
  axios.put(`http://127.0.0.1:4010/streamer/api/v3/streams/${values.name}`, {inputs: [ values.sourceURL  ]})
  .then(resp => {
    if(resp.status === 200) {
      navigate('/streamsComponent')
    }
    else {
    setError("Unexpected server response")
    }
  })
  .catch(err => {
   setError(`Error: stream creation failed ${(err.response?.data?.message || err.message)}`)
  })
 }

  return (
    <>
      <Container>
        {error !== '' ? <Alert dismissible onClose={()=>setError('')} variant="danger">{error}</Alert> 
         :
        <>
        <StreamInputs streamData={values} setStreamData={setValues} />
        <Button 
        disabled={values.name.trim() === '' || values.sourceURL.trim() === '' ? true : false} 
        onClick={sendData}>
          Create stream
          </Button>
          </>}
      </Container>
    </>
  );
};

export default NewStreamComponent