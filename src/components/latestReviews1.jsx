import React from "react";
import product1 from "../img/image1.png";
import product2 from "../img/image7.png";
import "semantic-ui-css/semantic.min.css";


function AboutMe() {
  return (
    
    <div className="latestReview">
      <div>
        <img src={product1} alt="person icon" className="product1image2"
        width="500" 
        height="450"
        />
        <img src={product2} alt="person icon" className="product1image1"
        width="500" 
        height="450"

        /></div>
        <div class="row mt-4">

  <div class="col-md-6">
  <br></br>
<br></br>
    <h2>Create a new post</h2>
<br></br>
<br></br>

    <form class="form new-post-form">
      <div class="form-group">
        <label for="post-title">Title:</label>
        <input class="form-input" type="text" id="post-title" name="post-title" />
      </div>
      <div class="form-group">
      <br></br>
<br></br>
        <label for="post-content">Content:</label>
        <textarea class="form-input" id="post-content" name="post-content"></textarea>
      </div>
      <div class="form-group">
      <br></br>
<br></br>
        <button type="submit" class="btn btn-primary">Post</button>
      </div>
      <br></br>
<br></br>
      <div class="ui star rating" data-rating="3"></div>
    </form>
  </div>
      </div>
      </div>


  );
}

export default AboutMe;