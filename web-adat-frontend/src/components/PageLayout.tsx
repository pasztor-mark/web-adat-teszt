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
            <footer className='w-full bottom-0 p-3 bg-neutral-700'>
                <p>© 2023 My Application</p>
            </footer>
        </div>
    );
};

