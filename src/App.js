import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
// import Post from './Components/Post';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetails from './Components/PostDetails';
import axios from 'axios';
import XMLParser from 'react-xml-parser';

function App() {

  const [posts, setPosts] = useState({});

  

  useEffect(() => {
	  
	  axios.get('blog_post_example.xml', {
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
         setPosts(oldPosts => {
          return jsonDataFromXml
        })	
       
           }); 
	  
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <section className="mainSection">
          <Switch>
            <Route path="/" exact={true}>
              <Main posts={posts}>
              </Main>
            </Route>
			 <Route path="/post-details/:postId" exact={true}>
              <PostDetails/>
            </Route>
            </Switch>
          <Nav></Nav>
        </section>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
