import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  imageOfProject  from '../assets/Untitled.png'
import  two  from '../assets/2.jpg'
import  three  from '../assets/3.jpg'

function Projects() {
    return (
        <div className="container div1">
           <h1 className="display-4">My projects</h1> 
           <p id="lead">Lorem ipsum dolor sit amet Duis maximus ultrices elementum. Nulla placerat sodales lorem, nec semper urna pretium quis. Maecenas ullamcorper luctus nislondimentum scelerisque.</p>
           <div className="container my-5">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-3 p-4 mt-2">
                        <div className="card shadow-lg">
                            <h4 className="card-header">Fragrance Picker</h4>
                            <img className="card-img-top" src={imageOfProject} alt="project random fragrance picker"></img>
                            <div className="card-body">
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn btn-sm btn-block btn-outline-secondary">View code</a>
                                <a href="http://ikorchev.github.io/randomiser" target="_blank" rel="noreferrer"  className="btn mx-1 btn-sm btn-block btn-outline-secondary">View project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-4 mt-2">
                        <div className="card shadow-lg">
                            <h4  className="card-header">First project</h4>
                            <img className="card-img-top" src={two} alt="Random  two"></img>
                            <div className="card-body">
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn btn-sm btn-block btn-outline-secondary">View project</a>
                                <a href="https://github.com/IKorchev/randomiser" target="_blank" rel="noreferrer" className="btn mx-1 btn-sm btn-block btn-outline-secondary">View code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 p-4 mt-2">
                        <div className="card shadow-lg">
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

export default Projects
