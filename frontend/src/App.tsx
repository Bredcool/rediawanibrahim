import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Portal from "./pages/Portal/Portal";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Portal />} />
      </Route>
    </Routes>
  );
}

export default App;