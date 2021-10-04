import './App.css';



function App() {

  let stringVariable = "Testing This let variable";

  const test2 = 20;

  let numberVariable = 100;

  let booleanVariable = true;

                        //  0         1     2     3

  let arrayVariable = ["javascript", 30, true, Date()]



  return (

    <div className="App">

      <header className="App-header">

        <p>{arrayVariable[3]}</p>
        <p>{stringVariable}</p>
        <p>{test2}</p>
        <p>{}numberVariable</p>
        <p></p>

      </header>

    </div>

  );

}



export default App;