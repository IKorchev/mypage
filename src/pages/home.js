import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {useSpring, animated } from 'react-spring'




function Home() {
  


    const iconSize = 30
    
    return (
        <>
        <div className="p-5 p-md-5  text-center bg-light shadow jumbo-image" >
            <div className="col-md-5 p-lg-2 mx-auto">
                <h1 className="display-5 text-white"><b>Ivaylo Korchev</b></h1>
                <p className="lead font-weight-normal text-white">Hello! Welcome to my page. My name is Ivaylo and I am an Aspiring React Developer. I have experience building apps with <strong className="stronk">React JavaScript Html CSS.</strong></p>
                <br></br>
                <p className="lead font-weight-normal text-white">Check out the <Link to="/Projects" id="p-link">Projects </Link> page for more information </p>
                <div className="container d-flex justify-content-center">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="icons mx-2"><FaLinkedin size={iconSize}></FaLinkedin></a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="icons mx-2"><FaGithub size={iconSize}></FaGithub></a>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col-md-3 p-4 mt-2">
                <div className="card shadow-lg">
                        <h4 className="card-header">First project</h4>
                        <div className="card-body">
                            <h1 className="card-title">About</h1>
                            <ul className="list-unstyled mt-3 mb-2">
                                <li>Blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                            </ul>
                            <button className="btn btn-md btn-block btn-outline-secondary">Click me</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-4 mt-2">
                <div className="card shadow-lg">
                        <h4 className="card-header">Second project</h4>
                        <div className="card-body">
                            <h1 className="card-title">About</h1>
                            <ul className="list-unstyled mt-3 mb-2">
                                <li>Blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                            </ul>
                            <button className="btn btn-md btn-block btn-outline-secondary">Click me</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-4 mt-2">
                <div className="card shadow-lg">
                        <h4 className="card-header">Third project</h4>
                        <div className="card-body">
                            <h1 className="card-title">About</h1>
                            <ul className="list-unstyled mt-3 mb-2">
                                <li>Blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                                <li>blabla</li>
                            </ul>
                            <button className="btn btn-md btn-block btn-outline-secondary">Click me</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Home

