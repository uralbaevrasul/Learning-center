import img1 from "../images/photo_2025-06-16_02-31-05.jpg";
function Navbar() {
    return <>
    <div className="navbar  text-orange-600 sticky top-0 z-50 max-w-[1540px] w-full mx-auto  rounded-2xl bg-orange-200/20 backdrop-blur-md shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-orange-50 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="./courses.jsx">Kurs haqida</a></li>
        <li>
        <a href="#results">Natijalar</a>
        </li>
        <li><a href="#statistik">Statistika</a></li>
        <li><a href="#prices">Narxlar</a></li>
      </ul>
    </div>
    <img src={img1} className=" w-10" alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#courses">Kurs haqqida</a></li>
      <li>
 <a href="#results">Natijalar</a>
      </li>
      <li><a href="#statistik">Statistika</a></li>
      <li><a href="#prices">Narxlar</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="#footer" className="btn bg-orange-500 border-0">Ulanish</a>
  </div>
</div>
    </>
}
export default Navbar