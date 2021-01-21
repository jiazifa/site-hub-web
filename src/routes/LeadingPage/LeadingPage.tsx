import React from "react";
import { GET } from "src/utils/request";
import moment from "moment";
import { Navigation } from "../../components/Navigation";

interface ILeadingPageState {
  word?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ILeadingPageProps { }

class LeadingPage extends React.Component<
  ILeadingPageProps,
  ILeadingPageState
  > {
  constructor(props: ILeadingPageProps) {
    super(props);
    this.state = {
      word: "",
    };
  }
  clickToHomePage() {
    console.log("hi");
  }
  componentDidMount() {
    GET("/api/oneword/")
      .then((r) => { console.log(r); return r.data as string })
      .then((r: string) => this.setState({ word: r }));
  }

  render() {
    const today = moment().format("MMM Do YY");
    const site = "".toUpperCase();

    const { word } = this.state;
    const content = word;
    return (
      <div>
        <section className="hero is-medium is-primary is-bold is-fullheight">
          <div className="hero-head">
            <Navigation></Navigation>
          </div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{content}</h1>

              <h2
                className="subtitle"
                style={{ float: "right", marginTop: "1rem" }}
              >
                {site} {today}
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { LeadingPage };
