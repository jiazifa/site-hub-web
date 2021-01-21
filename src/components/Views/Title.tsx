import * as React from "react";

interface ITitleProps {
  title: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
class Title extends React.Component<ITitleProps, {}> {
  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <h1 className="title">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export { Title };
