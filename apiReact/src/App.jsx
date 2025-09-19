import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SiswaIndex from "./components/siswa";
import SiswaCreate from "./components/tambahSiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/siswa" />} />
        <Route path="/siswa" element={<SiswaIndex />} />
        {/* <Route path="/siswa/tambah" element={<SiswaCreate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;