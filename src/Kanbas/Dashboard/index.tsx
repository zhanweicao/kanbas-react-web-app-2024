export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/react.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
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
                </div>
            </div>
        </div>
    );}
