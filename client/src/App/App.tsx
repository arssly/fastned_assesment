import { Routes, Route, useLocation } from "react-router-dom";
import { Container, Header } from "@components";
import { LocationList, AddEditLocation, AddEditLocationModal } from "@pages";

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Header />
      <Container>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<LocationList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/locations/:id" element={<div />} />
          <Route path="/locations/add" element={<AddEditLocation />} />
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/locations/:id" element={<div />} />
            <Route path="/locations/add" element={<AddEditLocationModal />} />
          </Routes>
        )}
      </Container>
    </div>
  );
}

export default App;
