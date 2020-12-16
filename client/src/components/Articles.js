import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";

function Articles({posts}) {
    const [article, setArticle] = useState([])
    // delete article by id 
    const deleteArticle = id =>{
        axios.delete(`/articles/${id}`)
            .then(res => alert(res.data))
            setArticle(article.filter(item =>item._id !== id));
    }
    var data = Array.from(posts);
    return (
        <MainContainer>
          {  console.log('gggggggggggg',data.map((x)=> x._id))}
          
            {data && data.map((article, key) =>(
               <div className="container" key={key}>
                  <Link     to={{pathname: `/article/${article._id}`}}>
           
                    <h2>{article.title}</h2>
                   </Link> 
                
                <p>{article.article}</p>
                <span className="badge badge-secondary p-2">{article.authorname}</span>
                <div className="row my-4">
                    <div className="col-sm-2">
                        <Link to={`/update/${article._id}`} className="btn btn-outline-success">Edit Article</Link>
                    </div>
                    <div className="col-sm-2">
                        <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">Delete Article</button>
                    </div>
                </div>
                </div>
            ))}
         </MainContainer>
    )
};

export default Articles

//main container
const MainContainer = styled.div`
margin: 7rem 0;

`;
