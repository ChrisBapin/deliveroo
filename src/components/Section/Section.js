import React, { Component } from "react";

import "./Section.css";

import Card from "./Card/Card";

class Section extends Component {
  state = {
    default: null
  };

  render() {
    return (
      <section className="">
        <h3>{this.props.sectionTitle}</h3>
        <div className="cards-container">
          {this.props.menus.map((e, index) => {
            return (
              <Card
                key={index}
                title={e.title}
                description={e.description}
                price={e.price}
                picture={e.picture}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Section;
