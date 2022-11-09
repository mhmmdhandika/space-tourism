import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages';
import pages from './data/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 0 to get home/root page url */}
        <Route path={pages[0].url} element={<Layout />}>
          {/* iterate whole pages */}
          {pages.map((item, index) => {
            if (index === 0) {
              return <Route index element={item.element} key={index} />;
            }
            return <Route path={item.url} element={item.element} key={index} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
