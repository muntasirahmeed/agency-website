import React from 'react';
import aboutBanner from "../assets/images/about-banner.png" ;

const WhyOurAgency = () => {
    return (
        <div>
            
      <section class="section about" id="about">
        <div class="container">

          <figure class="about-banner">
            <img src={aboutBanner} width="700" height="532" loading="lazy" alt="about banner"
              class="w-100 banner-animation"/>
          </figure>

          <div class="about-content">

            <h2 class="h2 section-title underline">Why Our Agency</h2>

            <p class="about-text">
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec
              volutpat metus
              lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus
              hendrerit ut a odio.
            </p>

            <p class="about-text">
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante,
              vehicula condimentum
              arcu.
            </p>

            <ul class="stats-list">

              <li class="stats-card">
                <p class="h3 stats-title">9875</p>

                <p class="stats-text">Satisfied Clients</p>
              </li>

              <li class="stats-card">
                <p class="h3 stats-title">7894</p>

                <p class="stats-text">Project Lunched</p>
              </li>

              <li class="stats-card">
                <p class="h3 stats-title">65</p>

                <p class="stats-text">Years Completed</p>
              </li>

            </ul>

          </div>

        </div>
      </section>
        </div>
    );
};

export default WhyOurAgency;