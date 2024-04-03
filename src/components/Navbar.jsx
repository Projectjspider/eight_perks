import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
           <div> <Link to="/"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100.000000pt" height="56.000000pt" viewBox="0 0 100.000000 56.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 280 l0 -280 500 0 500 0 0 280 0 280 -500 0 -500 0 0 -280z m337
150 c51 0 10 -17 -52 -23 -74 -5 -70 -4 -80 -36 l-7 -24 34 27 c34 25 58 33
58 19 0 -4 -23 -31 -52 -60 -50 -51 -55 -53 -105 -53 l-53 0 0 35 c0 24 5 35
14 35 15 0 23 7 70 60 28 32 30 32 89 26 33 -3 71 -6 84 -6z m193 -65 c0 -43
-3 -55 -15 -55 -12 0 -15 12 -14 55 2 39 6 55 16 55 9 0 13 -16 13 -55z m130
40 c0 -8 6 -15 14 -15 16 0 26 -21 26 -56 0 -38 -30 -31 -31 9 l-1 32 -7 -29
c-11 -54 -31 -43 -31 18 0 43 3 56 15 56 8 0 15 -7 15 -15z m86 -10 c12 -12
12 -18 2 -36 -10 -17 -10 -23 0 -26 21 -8 13 -25 -10 -21 -20 3 -23 10 -26 51
-3 49 7 59 34 32z m-258 -32 c3 -18 -2 -23 -20 -24 l-23 -2 23 -4 c34 -7 26
-25 -10 -21 -26 2 -34 8 -36 26 -6 38 5 54 35 50 20 -2 29 -9 31 -25z m122
-22 c0 -49 -9 -61 -46 -61 -17 0 -19 30 -1 30 6 0 4 5 -5 11 -36 20 -15 69 29
69 21 0 23 -5 23 -49z m67 -70 c3 -13 11 -17 24 -14 21 6 25 -7 7 -25 -15 -15
7 -43 29 -35 10 4 11 8 3 13 -19 12 -7 45 18 48 18 3 23 -1 21 -15 -2 -10 0
-24 5 -31 4 -7 3 -19 -3 -26 -6 -7 -7 -17 -3 -21 4 -5 -2 -5 -12 -1 -12 4 -23
2 -28 -6 -6 -10 -8 -8 -8 5 0 9 -4 17 -10 17 -5 0 -10 -8 -11 -17 0 -14 -3
-12 -10 5 -7 18 -14 22 -29 17 -18 -6 -20 -2 -20 49 0 55 16 77 27 37z m-279
-29 c3 -26 -1 -34 -21 -41 -14 -6 -38 -26 -54 -45 -28 -36 -28 -36 -110 -36
-45 0 -84 4 -87 9 -7 11 17 21 50 21 15 0 22 5 18 13 -3 8 20 37 51 66 52 50
57 52 102 49 46 -3 48 -4 51 -36z m87 1 c16 -16 18 -16 27 0 11 21 41 22 58 2
20 -24 -1 -71 -31 -67 -13 1 -26 7 -29 12 -8 13 -60 -11 -60 -27 0 -7 -7 -13
-15 -13 -11 0 -15 12 -15 48 0 27 3 52 7 55 12 12 41 7 58 -10z m155 2 c0 -8
-4 -15 -10 -15 -5 0 -10 -11 -10 -25 0 -16 -6 -25 -15 -25 -10 0 -15 10 -15
33 0 19 3 37 7 40 12 13 43 7 43 -8z"/>
<path d="M570 356 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z"/>
<path d="M235 174 l-30 -25 29 3 c19 2 32 11 37 26 11 28 1 27 -36 -4z"/>
<path d="M450 214 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
-7 -10 -16z"/>
</g>
</svg>
</Link> </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">platforms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">investors</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/Adminhome">Admin</a></li>
                            <li><a className="dropdown-item" href="#">Employee</a></li>
                            <li><a className="dropdown-item" href="#">Manager</a></li>
                            <li><a className="dropdown-item" href="#">Guest</a></li>
                            <li><a className="dropdown-item" href="#">HR</a></li>
                        </ul>
                    </li>
                    
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

     );
}
 
export default Navbar;