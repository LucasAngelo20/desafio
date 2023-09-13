import { SnackbarProvider } from "notistack";
import DataShow from "./components/DataShow";
import CovidProvider from "./contexts/covid";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <CovidProvider>
        <div
          style={{ width: "100%", height: "100vh", backgroundColor: "#F8F0E5" }}
        >
          <DataShow />
        </div>
      </CovidProvider>
    </SnackbarProvider>
  );
}

export default App;
