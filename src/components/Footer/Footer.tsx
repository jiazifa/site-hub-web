import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFooterProps {}

// eslint-disable-next-line @typescript-eslint/ban-types
class Footer extends React.Component<IFooterProps, {}> {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">{this.props.children}</div>
      </footer>
    );
  }
}

export { Footer };
