import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import  './app.css'

function App() {
  const [show,setShow] = useState(false);

  const handeltoggle = () => {
    setShow((prev) => !prev)
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handeltoggle}>{show ? 'Show Fictional Books' : 'Show Non-Fiction Books'}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {show ? <NonFiction prop={'Non-Fiction Books'}/> : <Fiction prop={'Fiction Books'}/>}
      </div>
    </div>
  );
}

export default App;
