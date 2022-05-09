import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Post from "./Post";
import axios from 'axios';
import XMLParser from 'react-xml-parser';

function PostDetails(props) {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({})
     var i=0;
	
  useEffect(() => {
	  
	  axios.get('../blog_post_example.xml', {
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
		 console.log(jsonDataFromXml);
         setPostDetails(oldPosts => {
          return jsonDataFromXml
        })	
       
           }); 
	  
  }, [postId])
	
	

    return (
        <div className="post-details-container">
            {
			   
               postDetails.children===undefined?""
			   :postDetails ?
                 postDetails.children.map(post => {
							post.pid=i;
                            return postId==i++?<Post postData={post} ></Post>:""
                        })
			  : ""
            }
        </div>
    )
}

export default PostDetails;