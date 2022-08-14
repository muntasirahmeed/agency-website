import React from "react";
import '../assets/css/style.css'

const Specialization = () => {
  return (
    <div>
      <section class="section service" id="services">
        <div class="container">
          <h2 class="h2 section-title underline">Our Speciallization</h2>

          <ul class="service-list">
            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="telescope-outline"></ion-icon>
                </div>

                <h3 class="h3 title">Strategy & Research</h3>

                <p class="text">
                  Mauris ut felis malesuada eros varius tristique a at orci.
                  Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                  venenatis ipsum, et porttitor.
                </p>

                <button class="card-btn" aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </li>

            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="desktop-outline"></ion-icon>
                </div>

                <h3 class="h3 title">Web Development</h3>

                <p class="text">
                  Mauris ut felis malesuada eros varius tristique a at orci.
                  Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                  venenatis ipsum, et porttitor.
                </p>

                <button class="card-btn" aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </li>

            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="globe-outline"></ion-icon>
                </div>

                <h3 class="h3 title">Web Solution</h3>

                <p class="text">
                  Mauris ut felis malesuada eros varius tristique a at orci.
                  Nulla vulputate, leo sit amet rhoncus suscipit, enim ex
                  venenatis ipsum, et porttitor.
                </p>

                <button class="card-btn" aria-label="Show More">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Specialization;
