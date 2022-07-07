
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Options from './components/Options';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Options />} />
      </Routes>
    </BrowserRouter >
  );
}




export default App;
