import React from "react";

export default function Signin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            <form action="/users/login" method="POST">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <a href="/users/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
