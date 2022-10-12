import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CreateTemplate from "./components/createTemplate";

function App() {
  return (
    <div className="App">
      {/* <Header name="Template List" button /> */}
      <CreateTemplate />
    </div>
  );
}

export default App;
