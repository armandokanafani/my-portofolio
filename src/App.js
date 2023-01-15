// Import package
import { useState } from 'react';

// Import Component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {

  const [containerValue, setContainerValue] = useState("home");
  
  // console.log(containerValue);
  return (
    <div className='flex flex-col h-screen'>
      {/* Header */}
      <header className='fixed w-full top-0 left-0 z-50 '>
        <Navbar onValueChange={setContainerValue}/>
      </header>
        
      {/* Content */}
      <main className='mt-24 flex-grow'>
        <Container containerValue={containerValue}/>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
