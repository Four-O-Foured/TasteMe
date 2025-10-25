import NavBar from "./components/NavBar"
import MainRoutes from "./routes/MainRoutes"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#2D2424] pt-5 px-8">

      <NavBar />

      <MainRoutes />

    </div>
  )
}

export default App
