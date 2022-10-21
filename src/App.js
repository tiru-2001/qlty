import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Parent from './pages/Parent';
import About from './pages/About';
import Error from './pages/Error';
import Services from './pages/Services';
import Contact from './pages/Contact';
function App() {
    return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Parent/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='*'element={<Error/>}/>
    </Route>
  </Routes>
</BrowserRouter>
    );
}

export default App;