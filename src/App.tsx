// import { controllerApp } from './@core/controllers/AppControllers';
import { Form } from './@core/framework/shared/Form';
import { Table } from './@core/framework/shared/Table';
import { Data } from './@core/framework/shared/Data';
import { Level1 } from './@core/framework/shared/Level1';

function App() {
  const getTodos = () => {
    // controllerApp.getTodos()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        App
      </h1>

      <button onClick={getTodos}>getTodos</button>

      <Level1 />
      <Data />
      <Form />
      <Table />
    </div>
  );
}

export default App;
