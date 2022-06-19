import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../views/Home';
import NavBar from '../components/NavBar';

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    )
};