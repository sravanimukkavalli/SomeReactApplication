import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Counter from './Components/Counter';
import GetRequest from './Components/GetRequest';
import PostMethod from './Components/PostMethod';

import './App.css';

const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
         <Route  path="/" element={<Counter />} />
         <Route path="/Get" element={<GetRequest />} />
         <Route path='/Post' element={<PostMethod />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
