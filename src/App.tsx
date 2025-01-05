import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { Blog } from '@/components/sections/Blog';
import { Feedback } from '@/components/sections/Feedback';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Blog />
        <Feedback />
        <FAQ />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}

export default App;