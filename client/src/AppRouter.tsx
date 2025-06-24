import { Route, Routes} from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./components/Catalog/Catalog";



export const AppRouter = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-zinc-100 relative">
    <Header/>
    <Routes>
      <Route path="/RIOT-copy" element={<Catalog />} />
      <Route path={`/RIOT-copy/producto/descripcion/:id`} element={<ProductPage />} />
    </Routes>
    <Footer/>
    </main>
  );
}