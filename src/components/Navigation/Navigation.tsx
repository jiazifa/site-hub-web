import React from "react";
import { Link } from "react-router-dom";

interface INavigationPorps {
  isContainer?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
class Navigation extends React.Component<INavigationPorps, {}> {
  constructor(props: INavigationPorps) {
    super(props);
  }

  render() {
    const brand = (
      <div className="navbar-brand">
        <a href="#" className="navbar-item">
          <span>{/*Tool hub*/}</span>
        </a>
      </div>
    );

    const navEnd = (
      <div className="navbar-end">
        <Link to="/app" className="navbar-item">
          分类
        </Link>
        <Link to="/aboutMe" className="navbar-item">
          关于我
        </Link>
        <div className="navbar-item">
          <div className="buttons">
            <a href="/" className="button is-primary">
              <strong>注册</strong>
            </a>
            <a href="/" className="button is-light">
              登录
            </a>
          </div>
        </div>
      </div>
    );
    let body = (
      <nav className="navbar is-light" role="navigation">
        {brand}
        {navEnd}
      </nav>
    );
    if (this.props.isContainer === true) {
      body = (
        <nav className="navbar is-light" role="navigation">
          <div className="container">
            {brand}
            {navEnd}
          </div>
        </nav>
      );
    }
    return <div>{body}</div>;
  }
}

export { Navigation };
