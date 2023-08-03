import './assets/app.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Content from './components/Content';
import AppProvider from './provider';

function App() {
  return (
    <AppProvider>
      <div className='w-screen h-screen bg-gray-800 text-gray-200'>
        <Header />
        <Main>
          <Aside />
          <Content />
        </Main>
      </div>
    </AppProvider>
  );
}

export default App;
