import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="example1">Example1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/example2">Example2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/example3">Example3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/example4">Example4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar