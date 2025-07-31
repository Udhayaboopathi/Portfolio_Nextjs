import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Home from '@/pages/Home';

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;