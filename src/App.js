import styles from  './App.module.css';
import Educational from './components/Educational';
import Practical from './components/Practical';
import General from './components/General';

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
