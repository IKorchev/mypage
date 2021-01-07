import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'
import imageOfProject from '../assets/Untitled.png'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import imageOfProject2 from '../assets/TravelAgency.png'

function Home() {
  
    
    return (
        <div className="main">
            <div className="container pt-5 text-center">
                <h1 className="h1 pt-5 pb-4" id="jtext"><b>Ivaylo Korchev</b></h1>
                <p className="lead font-weight-normal text-white" id="jtext">Hello! Welcome to my page. My name is Ivaylo and I am an Aspiring React Developer. <br></br> I have experience building apps with <strong className="stronk">React JavaScript Html CSS.</strong></p>
                <br></br>
                <p className="lead font-weight-normal text-white" id="jtext">Check out the <Link to="/Projects" id="p-link">Projects </Link> page for more information </p>
            </div>
            <div className="container my-5">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-3">
                        <div className="card shadow-lg align-items-center mt-5">
                            <h4 className="card-header">Fragrance Picker</h4>
                            <img className="card-img-top" src={imageOfProject} alt="project "></img>
                            <div className="card-body">
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn btn-sm btn-block btn-outline-secondary">View code</a>
                                <a href="http://ikorchev.github.io/randomiser" target="_blank" rel="noreferrer"  className="btn mx-1 btn-sm btn-block btn-outline-secondary">View project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-lg align-items-center mt-5">
                            <h4  className="card-header">First project</h4>
                            <img className="card-img-top" src={imageOfProject2} alt="Random  two"></img>
                            <div className="card-body">
                                <a href="https://github.com/IKorchev/travel-agency" target="_blank" rel="noreferrer" className="btn btn-sm btn-block btn-outline-secondary">View code</a>
                                <a href="http://ikorchev.github.io/travel-agency" target="_blank" rel="noreferrer" className="btn mx-1 btn-sm btn-block btn-outline-secondary">View project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-lg align-items-center mt-5">
                            <h4 className="card-header">First project</h4>
                            <img className="card-img-top" src={three} alt="Random  three"></img>
                            <div className="card-body">
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn btn-sm btn-block btn-outline-secondary">View project</a>
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn mx-1 btn-sm btn-block btn-outline-secondary">View code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

