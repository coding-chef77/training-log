import React from "react";

export default function Logout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-out-alt"></i> Logout
            </h1>
            <form action="/users/logout" method="POST">
              <button type="submit" className="btn btn-primary btn-block">
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
