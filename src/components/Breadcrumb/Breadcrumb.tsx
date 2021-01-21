import React from "react";

class BreadCrumb extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="breadcrumb" aria-label="breadcrumb">
          <ul>
            <li><a href="#">Bulma</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Components</a></li>
            <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
          </ul>
        </div>
      </section>

    );
  }
}

export { BreadCrumb }
