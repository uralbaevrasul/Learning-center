import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './kompanents/navbar.jsx'
import Hero from './kompanents/hero.jsx'
import Result from './kompanents/results.jsx'
import Courses from './kompanents/courses.jsx'
import Prices from './kompanents/prices.jsx'
import Statistics from './kompanents/statistik.jsx'
import Footer from './kompanents/footer.jsx'
createRoot(document.getElementById('root')).render(
<div className='bg-orange-50'>
<Navbar/>
<div className='container mx-auto bg-orange-200'>
<Hero/>
<Courses/>
</div>
<Result/>
<div className="container mx-auto bg-orange-200">
<Prices/>
<Statistics/>
<Footer/>
</div>
</div>
)
