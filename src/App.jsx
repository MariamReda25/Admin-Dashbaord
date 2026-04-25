import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GloabalStyles from "./style/GlobalStyles";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Loader from "./ui/Loader";

const User = lazy(() => import("./pages/User"));
const Products = lazy(() => import("./pages/Products"));
const Orders = lazy(() => import("./pages/Orders"));
const Order = lazy(() => import("./pages/Order"));
const Settings = lazy(() => import("./pages/Settings"));
const Customers = lazy(() => import("./pages/Customers"));
const Account = lazy(() => import("./pages/Account"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <GloabalStyles />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="orders/:id" element={<Order />} />
                <Route path="settings" element={<Settings />} />
                <Route path="customers" element={<Customers />} />
                <Route path="account" element={<Account />} />
                <Route path="user" element={<User />} />
              </Route>
              <Route path="login" element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
