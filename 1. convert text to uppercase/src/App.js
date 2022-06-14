import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm'

function App() {
  return (

        <>
          <Navbar title="textUtilssexy" AboutText="About TextUtils"/>
       
          <div className="container">
          <Textform heading="Enter the text to analyze"/>
          </div>
        </>  

  );
}

export default App;
