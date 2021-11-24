import React, { useEffect } from "react";
import product1 from "../img/image1.png";
import product2 from "../img/image7.png";
import avatar from "../img/male.png";

function AboutMe() {
  useEffect(() => {
    window.$(".ui.rating").rating({ initialRating: 2 });
  }, []);

  return (
    <div className="latestReview">
      <h1>Recaro Seats</h1>

      <div className="pageContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        nemo. Fugiat, debitis a rem neque mollitia reprehenderit dolorem
        eligendi perferendis, harum quis, aliquid inventore hic facere deleniti
        qua Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo saepe,
        eos repellendus nam quidem praesentium reprehenderit quaerat numquam
        dignissimos natus impedit hic cumque, vel officia sunt, laudantium
        tenetur quas nesciunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita sequi nesciunt vitae doloribus aut! Nobis
        molestiae voluptate animi, saepe ex sunt id tempore quisquam expedita
        voluptatum laboriosam. Odio, temporibus velit?
      </div>
      <br></br>
      <br></br>

      <div>
        <img
          src={product1}
          alt="person icon"
          className="product1image2"
          width="540"
          height="450"
        />
        <img
          src={product2}
          alt="person icon"
          className="product1image1"
          width="540"
          height="450"
        />
      </div>
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
            <br></br>
            <br></br>
            <div className="ui massive star rating"></div>

            <div class="form-group">
              <br></br>
              <br></br>
              <button class="ui primary button">Post</button>
              <button class="ui button">Clear Fields</button>
            </div>
            <br></br>
            <br></br>
          </form>

          <div class="side active">
            <div class="ui card">
              <div class="image">
                <img src={avatar}></img>
              </div>
              <div class="content">
                <a class="header">Stevie Feliciano</a>
                <div class="meta">
                  <span class="date">Joined in 2014</span>
                </div>
                <div class="description">Great Product</div>
                <br></br>
                ⭐⭐⭐⭐⭐
              </div>
              <a></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
