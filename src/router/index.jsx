import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Cases from '../components/Cases';
import Skills from '../components/Skills';

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="#cases" element={<Cases />} />
        <Route path="#skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default Router;
