import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routes />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
