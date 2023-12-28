import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskList from './TaskList';


function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Header/>
          <AddTask/>
          <TaskList/>
        </Col>
      </Row>    
    </Container>
  );
}

export default App;
