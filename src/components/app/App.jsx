import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import Header from '../header/Header';
import AppRouter from '../appRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
