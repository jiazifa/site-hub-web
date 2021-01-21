import React from "react";
import { Title } from "../../components/Views";
import "./SiteCollection.scss";

interface CardItem {
  key?: string;
  title: string;
  description?: string;
  url: string;
  thumb: string;
  tags?: Array<string>;
}

class SiteCollection extends React.Component {
  itemBuilder = (item: CardItem) => (
    <div className="card" key={item.key}>
      {item.thumb ? (
        <div className="card-image">
          <div className="image is-4by3">
            <a href={item.url}>
              <img src={item.thumb} alt={item.description} />
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="card-content">
        <div className="title is-size-5 pb-1 text-flow-ellipsis-single">
          {item.title}
        </div>
        <div className="subtitle is-size-7 text-flow-ellipsis-multiple-2">
          {item.description}
        </div>
      </div>
    </div>
  );

  rowBuilder = (items: Array<CardItem>) => {
    let children = items.map(this.itemBuilder);
    children = children.map((i) => (
      <div className="column is-one-third-desktop is-half-tablet" key={i.key}>
        {i}
      </div>
    ));
    return (
      <div className="section">
        <div className="columns is-multiline">{children}</div>
      </div>
    );
  };
  render() {
    let row: Array<CardItem> = [
      {
        key: "1",
        title: "ceshi方法水",
        description: "desc",
        url: "https://www.baidu.com",
        thumb: "",
      },
      {
        key: "2",
        title: "ceshi2",
        description: "desc2",
        url: "https://www.qq.com",
        thumb: "",
      },
      {
        key: "3",
        title: "ceshi1",
        description: "desc",
        url: "https://www.baidu.com",
        thumb: "",
      },
      {
        key: "4",
        title: "ceshi2",
        description: "desc2",
        url: "https://www.qq.com",
        thumb: "",
      },
    ];
    return (
      <div>
        <div className="block"></div>
        <Title title="网站收集"></Title>
        <div className="container is-10 is-offset-1">
          {this.rowBuilder(row)}
        </div>
      </div>
    );
  }
}

export { SiteCollection };
