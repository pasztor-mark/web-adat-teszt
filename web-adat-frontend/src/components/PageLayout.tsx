import { Outlet } from 'react-router';
import Navigation from './Navigation';

export default function PageLayout() {
    return (
        <div>
            <header>
                <Navigation/>
                
            </header>
            <main className='p-3'>
                <Outlet />
            </main>
        </div>
    );
};

