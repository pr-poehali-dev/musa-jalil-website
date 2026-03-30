
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tormysh from "./pages/Tormysh";
import Shakhsi from "./pages/Shakhsi";
import Sugыsh from "./pages/Sugыsh";
import Moabit from "./pages/Moabit";
import Jalilcheler from "./pages/Jalilcheler";
import Bugengekon from "./pages/Bugengekon";
import Ijat from "./pages/Ijat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tormysh" element={<Tormysh />} />
          <Route path="/shakhsi" element={<Shakhsi />} />
          <Route path="/sugыsh" element={<Sugыsh />} />
          <Route path="/moabit" element={<Moabit />} />
          <Route path="/jalilcheler" element={<Jalilcheler />} />
          <Route path="/bugengekon" element={<Bugengekon />} />
          <Route path="/ijat" element={<Ijat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;