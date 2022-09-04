import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CampDetail from "./pages/CampDetail";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camp/:id" element={<CampDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
