import React from 'react'
import { Link } from 'react-router-dom'

function Post(props) {
    return (
        <div className="card">
            <h1 style={{marginLeft: "45px" }}>
			<Link to={`/post-details/${props.postData.pid}`}>{props.postData.children[2].value}</Link>
		    </h1>
			 
            <h3 style={{marginLeft: "45px" }}>
			{props.postData.children[3].value}
		    </h3>


            <div className="post-foot">
                
                <p style={{ padding: "45px" }}>{props.postData.children[4].value}</p>
            </div>
            <hr />
            <span style={{ display: "flex", justifyContent: "flex-end" }}>
                <p className="post-date">{new Date(props.postData.children[0].value).toLocaleTimeString() + ' ' + new Date(props.postData.children[0].value).toLocaleDateString()}</p>
                
                <p>
                    {
                        props.postData.children[1].value ?
                            props.postData.children[1].value
                            : ""
                    }
                </p>
            </span>
        </div>
    )
}

export default Post
