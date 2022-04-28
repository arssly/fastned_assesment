import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@components";
import { LocationList } from "@pages";

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Header />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<LocationList />} />
        <Route path="/locations" element={<LocationList />} />
        <Route path="/locations/:id" element={<div />} />
        <Route path="/locations/add" element={<div />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/locations/:id" element={<div />} />
          <Route path="/locations/add" element={<div />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
