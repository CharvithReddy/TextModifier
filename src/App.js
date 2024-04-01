import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2000);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-danger")
  // }

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils";
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" /><Alert alert={alert} /><TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} /> </>
    },
    {
      path: "/about",
      element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" /><Alert alert={alert} /><About mode={mode} /></>
    },
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;


{/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" /> */}
{/* <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} /> */}
{/* <About /> */}

