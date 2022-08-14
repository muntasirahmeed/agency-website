import React from "react";
const OurBlogs = () => {
  const blogs = [
    { id: 1, img: "https://i.ibb.co/w0dJfXG/blog-1.jpg" },
    { id: 1, img: "https://i.ibb.co/Sd5dnJd/blog-2.jpg" },
    { id: 1, img: "https://i.ibb.co/X3rkQxJ/blog-3.jpg" },
    { id: 1, img: "https://i.ibb.co/8PHNDFR/blog-4.jpg" },
  ];

  return (
    <section class="section blog" id="blog">
      <div class="container">
        <h2 class="h2 section-title underline">Our Blog & News</h2>

        <ul class="blog-list">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div class="blog-card">
                <figure class="banner">
                  <a href="#">
                    <img
                      src={blog.img}
                      width="750"
                      height="350"
                      loading="lazy"
                      alt="Vestibulum massa arcu, consectetu pellentesque scelerisque."
                      class="img-cover"
                    />
                  </a>
                </figure>

                <div class="content">
                  <h3 class="h3 title">
                    <a href="#">
                      Vestibulum massa arcu, consectetu pellentesque
                      scelerisque.
                    </a>
                  </h3>

                  <p class="text">
                    Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                    massa et, consequat laoreet erat nam ac imperdiet.
                  </p>

                  <div class="meta">
                    <div class="publish-date">
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="2022-03-07">7 March, 2022</time>
                    </div>

                    <button class="comment" aria-label="Comment">
                      <ion-icon name="chatbubble-outline"></ion-icon>

                      <data value="15">15</data>
                    </button>

                    <button class="share" aria-label="Share">
                      <ion-icon name="share-social-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
     
        </ul>
      </div>
    </section>
  );
};

export default OurBlogs;
