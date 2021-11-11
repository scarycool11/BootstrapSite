import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Alert, Breadcrumb } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Breadcrumb>
         <Breadcrumb.Item>Test</Breadcrumb.Item>
         <Breadcrumb.Item>Test</Breadcrumb.Item>
         <Breadcrumb.Item active>Test</Breadcrumb.Item>
       </Breadcrumb>
        <Alert variant="primary">This is a Button</Alert>
        <Button>Test Button</Button>
        
    
      </header>
    </div>
  );
}

export default App;
