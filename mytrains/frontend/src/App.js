import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import TicketPage from './pages/Tickets';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import classes from './App.css'

function App() {
  return (
    <div>

      {/* <MainNavigation /> */}

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 text-uppercase text-primary">Ticket Finder</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <a href="" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="course.html" className="nav-item nav-link">Courses</a>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="detail.html" className="dropdown-item">Course Detail</a>
                            <a href="feature.html" className="dropdown-item">Our Features</a>
                            <a href="team.html" className="dropdown-item">Instructors</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        </div>
                    </div> */}
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                {/* <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">Join Us</a> */}
            </div>
        </nav>
    </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticketpage" element={<TicketPage />} />
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
      </Routes>

    </div>
  );
}

export default App;



