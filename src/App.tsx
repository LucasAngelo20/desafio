import DataShow from "./components/DataShow";
import Tab from "./components/Tab";
import CovidProvider from "./contexts/covid";

function App() {
  return (
    <CovidProvider>
      <div>
        <DataShow />
      </div>
    </CovidProvider>
  );
}

export default App;
