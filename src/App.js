import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="dark:bg-slate-700 transition-all ease-in-out duration-700 h-screen">
        <Header />
        <div className="flex flex-row justify-center items-center mt-20">
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
