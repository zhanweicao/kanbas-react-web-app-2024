export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/react.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/2234/Home">
                                <img src="/images/python.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2234 Python
                                    </h5>
                                    <p className="card-text">
                                        Introduce to Programming Language
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/3234/Home">
                                <img src="/images/java.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3234 Java
                                    </h5>
                                    <p className="card-text">
                                        OOD Programming
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/4234/Home">
                                <img src="/images/cpp.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4234 CPP
                                    </h5>
                                    <p className="card-text">
                                        CPP Programming
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/5234/Home">
                                <img src="/images/sql.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5234 Database
                                    </h5>
                                    <p className="card-text">
                                        Introduce to Database Management
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/6234/Home">
                                <img src="/images/rstudio.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6234 R Studio
                                    </h5>
                                    <p className="card-text">
                                        Data Analysis
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/7234/Home">
                                <img src="/images/matlab.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS7234 Matlab
                                    </h5>
                                    <p className="card-text">
                                        Matlab in Engineering
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



{/* <div className="wd-dashboard-course">
                <img src="/images/java.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5004
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Design
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/python.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5001
                        </a>
                        <p className="wd-dashboard-course-title">
                            Intensive Foundations of CS
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/math.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5002
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discrete Structure
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/cpp.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5008
                        </a>
                        <p className="wd-dashboard-course-title">
                        Data Structures, Algorithms, and Their Applications Within Computer Systems
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/sql.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5200
                        </a>
                        <p className="wd-dashboard-course-title">
                            Database Management
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                <img src="/images/java.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5004 OOD programming
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Design
                        </p>
                        <a href="https://www.java.com/en/"> Go </a>
                    </div>
                </div> */}



