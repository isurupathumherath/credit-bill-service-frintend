import React from "react";

const NotFound = () => {
    return (
        <div class="container-fluid">
            <div class="text-center" style={{ marginTop: "150px" }}>
                <div class="error mx-auto" data-text="404">404</div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like Page is not Found</p>
                <br />
                <a href="/">&larr; Back to Dashboard</a>
            </div>

        </div>
    )
}

export default NotFound