import React from "react";
// import {BsSearch} from "react-icons/bs";
// import {FaFilter,FaDownload} from "react-icons/fa";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

export const SearchResults = () => {
    return (
        <div>
        <ul className="nav justify-content-end">
            <li classNameName="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>
        <br />
        <div className="my-4 d-flex justify-content-center">
            <div className="col-sm-6 d-flex flex-row">
                <input id="input1" className="form-control form-control-lg position-relative" type="text" placeholder="Search" aria-label=".form-control-lg example" />
                <div className="my-auto"><button className="border-0 bg-transparent"><i className="fa-solid fa-magnifying-glass"></i></button></div>
            </div>
        </div>
        <div>
            <div className="d-flex flex-row me-5">
                <div className="col-11"></div>
                <div className="col-1">
                    <div className="dropdown">
                        <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-filter me-md-1"></i>Filter by
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">A to Z</a></li>
                            <li><a className="dropdown-item" href="#">Z to A</a></li>
                            <li><a className="dropdown-item" href="#">Most visited</a></li>
                            <li><a className="dropdown-item" href="#">Latest to oldest</a></li>
                            <li><a className="dropdown-item" href="#">Oldest to latest</a></li>
                          </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row border-b">
                <div className="col">
                    <p className="fs-2">Search Results</p><br />
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    <div className="col.child">
                        <div className="row">
                            <p className="fs-5"><b>Here goes the link</b></p>
                            <div className="d-flex flex-row">
                                <div className="me-1">author,</div> <div className="me-1">author,</div> <div className="me-1">author</div>
                            </div>
                            <div className="row d-flex flex-row">
                                <div className="col-10 text-truncate">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary float-right border"><i className="fa-solid fa-download"></i>   Download</button>
                                </div>
                            </div>   
                        </div>
                        <div className="row d-flex flex-row">
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-up"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-thumbs-down"></i></button>
                            <button className="border-0 bg-transparent"><i className="fa-regular fa-bookmark"></i></button>
                            <div className="col text-body-tertiary"> timestamp </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
      );
}