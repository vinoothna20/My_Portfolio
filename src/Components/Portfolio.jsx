/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop-and-books.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Figma Website",
    description:
      "A fully responsive figma website, built using HTML, CSS, Bootstrap and JavaScript. It contains blogs and a signup page which overlays on the main page.",
    url: "https://figma-website-delta.vercel.app/",
  },
  {
    title: "Currency Converter",
    description:
      "This helps in coverting the curency value of one country to the other. I have bulit this using HTML, CSS and JavaScript.",
    url: "https://vinoothna20.github.io/Currency_Convertor/",
  },
  {
    title: "Split Payment",
    description:
      "In this user can split his/her bill with friends esaily. The User can also create groups to split among particular persons. This is done using HTML, CSS and JavaScript for the functionality. This is also fully responsive and user-friendly",
    url: "https://vinoothna20.github.io/Split_Payment/",
  },
  {
    title: "Add to Cart",
    description:
      "In the website user can add the products which he/she want to buy. They can also remove them whenever needed. For products I have used API Data. To make this I have used HTML, CSS and JavaScript.",
    url: "https://vinoothna20.github.io/Add_To_Cart/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
