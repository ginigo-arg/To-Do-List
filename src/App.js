import "./App.css";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-center mt-20">
        <Container />
      </div>
    </>
  );
}

export default App;
