import React from 'react'
import './NotFound.scss'

const Notfound = () => {
    return (
        <section className='notfound-container'>
            <div className='header'>
                <p>404 NOT FOUND</p>
            </div>

            <div className='main'>
                <div className="notfound-content">

                    <img src="https://stories.freepiklabs.com/storage/26832/oops-404-error-with-a-broken-robot-rafiki-2849.png" alt="scarecrow" />

                    <div className="info-error-content">
                        <h1>I have bad news for you</h1>
                        <p>The page you are looking for might be removed or is temporarily unavailable</p>
                        <button> Back to homepage </button>
                    </div>
                </div>
            </div>

        </section>


    )
}

export { Notfound }