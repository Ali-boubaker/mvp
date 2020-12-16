import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from "react-router-dom";

const Article = props => {
    const [title, setTitle] = useState("title");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    useEffect(() =>{
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorname(res.data.authorname)
        ])
        .catch(error => console.error(error))
    }, [props])
    return (
        <MainContainer>
            <h2>{title}</h2>
            <p>{article}</p>
            <p className="badge badge-secondary">{authorname}</p>
            <Link to="/" type="submit" className="btn btn-primary">Back to home</Link>
        </MainContainer>
    )
}

export default Article
//main container
const MainContainer =styled.div`
margin: 6rem auto;
padding: 3rem 14rem;
he{
    text-align: center;
    font-weight: 900;
    color: var(--dark-green);
}
.btn-primary {
    background: var(--dark-green);
    border: none;
    &:hover{
        background: var(--light-green);
    }
}
`