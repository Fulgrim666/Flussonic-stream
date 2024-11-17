import { Navbar, Container, Nav, } from "react-bootstrap"
import {   useNavigate } from "react-router-dom"

export const NavbarComponent = () : JSX.Element => {
  const navigate = useNavigate()
    return (
        <>
          <Navbar>
      <Container>
        <Navbar.Brand>Flussonic</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link onClick={()=>navigate('/streamsComponent')}>
            Streams
              </Nav.Link>
            <Nav.Link onClick={()=>navigate('/newStreamComponent')}>
             Create stream
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}