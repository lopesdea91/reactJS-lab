import { controllerApp } from './controllers/AppControllers';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { Data } from './components/Data';
import { Level1 } from './components/Level1';

function App() {
  const getTodos = () => {
    console.log('... event App');

    controllerApp.getTodos()
  }

  return (
    <div>
      <h1>App</h1>

      <button onClick={getTodos}>getTodos</button>

      <Level1 />
      <Data />
      <Form />
      <Table />
    </div>
  );
}

export default App;
