import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, NotFound } from './pages';
import pages from './data/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 0 to get home/root page url */}
        <Route path={'/'} element={<Layout />}>
          {pages.map(item => {
            if (item.url === '/') {
              return <Route index element={<item.element />} key={item.name} />;
            }
            return (
              <Route
                path={item.url}
                element={<item.element />}
                key={item.name}
              />
            );
          })}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
