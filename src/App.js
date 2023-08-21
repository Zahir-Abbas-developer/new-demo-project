import logo from './logo.svg';
import './App.css';
import Todos from './components/PracticeProject';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()
function App() {
  return (
<QueryClientProvider client={queryClient}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Todos/>
      </QueryClientProvider>
  );
}

export default App;
