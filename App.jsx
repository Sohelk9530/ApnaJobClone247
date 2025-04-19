import './App.css'
import DownloadApp from './downloadapp/DownloadApp';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import HireEmploy from './hire_employ/HireEmploy';
import ImportantLinks from './imp_links/ImportantLinks';
import Jobopen from './jobopen/Jobopen';
import Jobtype from './jobtype/Jobtype';
import Navbar from './navbar/Navbar';
import Testimonal from './testimonal/Testimonal';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Jobtype />
      <Jobopen />
      {/* others in between Like Jobroles*/}

      <Testimonal />
      <DownloadApp/>
      <HireEmploy/>
      <ImportantLinks/>
      <Footer/>
    </>
  );
}

export default App
