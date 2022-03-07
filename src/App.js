import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="dark:bg-slate-700 transition-all ease-in-out duration-700  h-screen w-screen overflow-auto">
        <header>
          <Header />
        </header>

        <secction className="flex flex-row justify-center items-center mt-20">
          <Container />
        </secction>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
