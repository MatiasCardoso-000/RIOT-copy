import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Layout } from "./components/Layout/Layout";
import { App } from "./App";
import { Favorite } from "./components/Favorites/Favorite";

export const AppRouter = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-zinc-100 relative">
      <Routes>
        <Route path="/RIOT-copy" element={<Layout />}>
          <Route index element={<App />} />
          <Route
            path={`producto/descripcion/:id`}
            element={<ProductPage />}
          />
          <Route
            path={`favoritos`}
            element={<Favorite />}
          />
        </Route>
      </Routes>
    </main>
  );
};
