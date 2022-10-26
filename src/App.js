import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// layouts
import Layout from './layouts/Layout';

// Views
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import About from './pages/About';

export default function App() {
  const [title, setTitle] = useState('VN-Inspection');

  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route element={<Layout />}>
            <Route path='/' element={<Home setTitle={setTitle} />} />
            <Route path='/about' element={<About setTitle={setTitle} />} />
            <Route path='/services/:slug' element={<Service setTitle={setTitle} />} />
            <Route path='/products/:slug' element={<Product setTitle={setTitle} />} />
          </Route>
          <Route
            path='*'
            element={<Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
