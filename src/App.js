// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from 'react';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => {
      unsuscribe();
    }
  }, [])

  return (
    <Router>
    
      <Routes>
        <Route path="/checkout" element={
          <>
          <Header />
          <Checkout/>
          </>
        }>
        </Route>
        <Route path="/login" element={

          <Login/>
        }>
        </Route>

        <Route path="/" element={
          <>
          <Header />
          <Home/>
          </>
        }>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
