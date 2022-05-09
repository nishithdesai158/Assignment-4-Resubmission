import React from 'react'
import Post from './Post'

function Main(props) {

     var i=0;
    console.log({
        propPost: props.posts
    });
	
    return (
        <main>
            <div className="blog-container">
                {
					
					props.posts.children===undefined?"":props.posts.children.length > 0 ?
					   
                        props.posts.children.map(post => {
							post.pid=i;
							i++;
                            return <Post postData={post} ></Post>
                        })
						
                        : ""
                }
            </div>
        </main>
    )
}

export default Main
