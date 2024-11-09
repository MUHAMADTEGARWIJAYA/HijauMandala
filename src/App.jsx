import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout"; // Layout untuk halaman login
import BuyerLayout from "./layout/BuyerLayout";
import Login from "./pages/buyer/LoginPage"; // Halaman login
import SingupPage from "./pages/buyer/SignupPage";
// import Header from './components/buyer/Home/Header'
import HalLayout from "./layout/HalLayout";
import HomeLayout from "./layout/Seller/HomeLayout";
import Universal from "./layout/Universal";
import Keranjang from "./pages/buyer/Keranjang";
import PendaftaranToko from "./pages/seller/PendaftaranToko";
import Verifikasi from "./pages/seller/Verifikasi";

import DetailPembayaran from "./pages/buyer/DetailPembayaran";

function App() {
  return (
    <Routes>
      {/* Rute untuk halaman login dengan AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingupPage />} />
      </Route>
      {/* Rute BuyerLayout */}
      <Route element={<BuyerLayout />}>
        <Route path="/utama" element={<div />} />
      </Route>
      {/* Route HalLayout */}
      <Route element={<HalLayout />}>
        <Route path="/halamanproduk" element={<div />} />
      </Route>
      {/* Universal Layout */}
      <Route element={<Universal />}>
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/pendaftarantoko" element={<PendaftaranToko />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        {/* <Route path="/side" element={<SidebarSeller />}/> */}
        <Route path="/detailpembayaran" element={<DetailPembayaran />} />
      </Route>

      <Route element={<HomeLayout />}>
        <Route path="/home" element={<div />} />
      </Route>
    </Routes>
  );
}
export default App;
