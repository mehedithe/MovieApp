import { useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>

      <MovieContext.Provider value={{ cartData, setCartData }}>

       <Page/>
       <ToastContainer 
       
       />
      </MovieContext.Provider>

    </ThemeContext.Provider>
    </>
  );
}

export default App;
