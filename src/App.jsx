import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"



function App() {

  return (
    <>
     <Navbar></Navbar>
     <main className="min-h-screen">
      <Outlet/>
     </main>
     <footer>Footer</footer>
    </>
  )
}

export default App
