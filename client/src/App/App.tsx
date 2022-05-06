import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@components";
import {
  LocationList,
  AddEditLocation,
  AddEditLocationModal,
  EditLocation,
  EditLocationModal,
} from "@pages";

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <div className="App">
      <Container>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<LocationList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/locations/:id" element={<EditLocation />} />
          <Route path="/locations/add" element={<AddEditLocation />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/locations/:id" element={<EditLocationModal />} />
            <Route path="/locations/add" element={<AddEditLocationModal />} />
          </Routes>
        )}
      </Container>
    </div>
  );
}

export default App;
