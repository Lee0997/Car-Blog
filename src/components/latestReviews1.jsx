import React from "react";
import product1 from "../img/image1.png";
import product2 from "../img/image7.png";
import "semantic-ui-css/semantic.min.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../style.css";

function AboutMe() {
  return (
    <div className="latestReview">
      
      <AliceCarousel autoPlay autoPlayInterval="100">
        <img src={product1} className="sliderimg" alt="" />
        <img src={product2} className="sliderimg" alt="" />
      </AliceCarousel>
  
      <div class ="pageContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam beatae ipsa. Illum ducimus autem, provident consequuntur eaque dolorem, corrupti harum eligendi at inventore ipsum fuga voluptatem architecto a quae!

      <div class container="row mt-4">
        <div class="col-md-6">
          <br></br>
          <br></br>
          <h2>Create a new post</h2>

          <br></br>
          <br></br>

          <form class="form new-post-form">
            <div class="form-group">
              <label for="post-title">Title:</label>
              <input
                class="form-input"
                type="text"
                id="post-title"
                name="post-title"
              />
            </div>
            <div class="form-group">
              <br></br>
              <br></br>
              <label for="post-content">Content:</label>
              <textarea
                class="form-input"
                id="post-content"
                name="post-content"
              ></textarea>
            </div>
            <div class="form-group">
              <br></br>
              <br></br>
              <button type="submit" class="btn btn-primary">
                Post
              </button>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;