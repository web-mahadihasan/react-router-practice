
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const navigation = useNavigation()

  return (
    <>
      <div className="app-grid">
        <Navbar></Navbar>
        <div className="column">
          {navigation.state === "loading" ? (
            <p>Loading...</p>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
