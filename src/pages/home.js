import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

function Home() {
    return (
        <div className="p-3 p-md-5 m-md-3 text-center bg-light shadow">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4">Check me out!</h1>
                <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages</p>
                <a className="btn btn-outline-secondary">Click this!</a>
            </div>
        </div>
    )
}

export default Home

