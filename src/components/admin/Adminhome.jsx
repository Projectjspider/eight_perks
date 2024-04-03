import { Link } from "react-router-dom"
const Adminhome = () => {
    return (
        <>
            <div className="admin">
                <div className="card" >
                    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="admin img" />
                    <div className="card-body">
                        <h2 className="card-title">j j thomson</h2>
                        <h5 className="card-title">from 17-sep-2004</h5>

                        <a href="#" className="btn btn-primary">edit</a>
                    </div>
                </div>
                <div className="list-group">
                    
                        <ul className="nav flex-column">
                            <li className="nav-item">
                            <Link to="/addemp">Add Employee</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/addtask">Finance</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/addtask">Tech Team</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/addtask">Management</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/addtask">Human Resource</Link>
                            </li>

                        </ul>
                </div>
                <div className="card" >
                    <img src="https://www.boldbi.com/wp-content/uploads/2023/10/employee-turnover-analysis-featured.webp" className="card-img-top" alt="tunover-logo" />
                    <div className="card-body">
                        <h5 className="card-title">Turnover Servey</h5>
                        <p className="card-text">The Bureau of Labor Statistics (BLS) provides an easy-to-use online tool to obtain current and historical turnover rates by industry.</p>
                        <a href="#" className="btn btn-primary">take a view</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Adminhome;