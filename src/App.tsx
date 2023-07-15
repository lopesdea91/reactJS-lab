import { controllerApp } from './@core/controllers/AppControllers';
import { Form } from './@core/framework/shared/Form';
import { Table } from './@core/framework/shared/Table';
import { Data } from './@core/framework/shared/Data';
import { Level1 } from './@core/framework/shared/Level1';

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
