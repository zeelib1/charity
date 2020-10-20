import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";


const Blog = () => {
    const [users, setUsers ] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get('/users', {validateStatus:() => true}).then((response) => {
          
            if(response.status === 401) {
            //redirection to login
            setError(true);
            // return <Redirect to='/Home'/>
            }
            setUsers(response.data)
        
        });
            //two types of error can be here
            //either unauthorized, resource, 400 or
            //500 internal server error , problem with server
      
    },[]);
    return (
    //     <div>
    //    {error ? <Redirect to='/login'/> : books ? books.map((book, index)=>( 


    //     <div class="card-header border-0 font-weight-bold d-flex justify-content-between">
    //     <p class="mr-4 mb-0">About the author:</p>
    //     <ul class="list-unstyled list-inline mb-0">
    //       <li class="list-inline-item"><a href="" class="mr-3"><i class="fas fa-envelope mr-1"></i>Send message</a></li>
    //       <li class="list-inline-item"><a href="" class="mr-3"><i class="fas fa-user mr-1"></i>See profile</a></li>
    //       <li class="list-inline-item"><a href="" class="mr-3"><i class="fas fa-rss mr-1"></i>Follow</a></li>
    //     </ul>
    //   </div>

      
    
       
       
       
       
    //    )):null}     
    //     </div>
   
    <MDBContainer>
    <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
    {error ? <Redirect to='/login'/> : users ? users.map((elem, index)=>{

    return <p className="mr-4 mb-0">About the {elem.username}</p>
    }):null}
     
      <ul className="list-unstyled text-default list-inline mb-0">
        <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
        <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
        <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
      </ul>
    </MDBCardHeader>
    <MDBMedia className="p-4 bg-white">
      <MDBMedia >
        <img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
      </MDBMedia>
      <MDBMedia body>
        <h5 className="font-weight-bold text-default mt-0">
          Danny Newman
        </h5>
        <ul className="list-unstyled list-inline mb-2 pt-1">
          <li className="list-inline-item">
            <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
          </li>
          <li className="list-inline-item">
            <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
          </li>
          <li className="list-inline-item">
            <MDBIcon fab className="grey-text" size="lg" icon="google-plus" />
          </li>
          <li className="list-inline-item">
            <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
          </li>
          <li className="list-inline-item">
            <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
          </li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
        magnam.
      </MDBMedia>
    </MDBMedia>

  </MDBContainer>

    );
};

export default Blog;