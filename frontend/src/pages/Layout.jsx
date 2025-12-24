import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 px-10 py-[95px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;