import { Routes, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Contact } from './views/Contact';

export function RoutesApp () {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
};
