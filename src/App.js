// Import package
import { useState } from 'react';

// Import CSS
import './App.css';

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
      <header>
        <Navbar onValueChange={setContainerValue}/>
      </header>
        <Container containerValue={containerValue}/>
      {/* Content */}
      <main className='flex-grow'>

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
