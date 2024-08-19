import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [user, setUser] = useState<any>({
        role: "STUDENT", // Default role
    });
    const navigate = useNavigate();

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUser({ ...user, role: e.target.value });
    };

    const signup = async () => {
        try {
            const currentUser = await client.signup({
                ...user,
                email: `${user.username}@neu.edu`,
                firstName: "NewUser", // Default first name
                lastName: user.username, // Default last name
            });
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="wd-signup-screen">
            <h1>Sign up</h1>
            {error && <div className="wd-error alert alert-danger">{error}</div>}
            
            <input 
                value={user.username} 
                onChange={(e) => setUser({ ...user, username: e.target.value })} 
                className="wd-username form-control mb-2" 
                placeholder="Username" 
            />

            <input 
                value={user.password} 
                onChange={(e) => setUser({ ...user, password: e.target.value })} 
                type="password" 
                className="wd-password form-control mb-2" 
                placeholder="Password" 
            />

            <label htmlFor="roleSelect">Select Role:</label>
            <select 
                id="roleSelect" 
                className="form-control mb-2" 
                value={user.role} 
                onChange={handleRoleChange}
            >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
            </select>

            <button 
                onClick={signup} 
                className="wd-signup-btn btn btn-primary mb-2"
            > 
                Sign up 
            </button>
            <br />
            <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
        </div>
    );
}
