import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
//import quotes from "../../server/data/quote-data";

class Quote extends Component {
  state = {
    quotes: [
      {
        header: "It does not matter how slow you go so long as you do not stop",
        author: "Confucius",
      },
      {
        header: "We're all looking for an idea to take shape",
        author: "Chris Do",
      },
      { header: "meet them where they are", author: "Natalie Manuel Lee" },
      {
        header:
          "we have to extend compassion. we have to extend empathy. we have to extend grace",
        author: "Natalie Manuel Lee",
      },
      {
        header:
          "it's better to be prepared for an opportunity and not have one than to have an opportunity and not be prepared",
        author: "Whitney M. Young",
      },
      { header: "quote6", author: "author6" },
    ],
  };

  createQuote = (header, author) => {
    return (
      <React.Fragment>
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          <Card.Description>{author}</Card.Description>
        </Card.Content>
        {console.log(header, author)}
      </React.Fragment>
    );
  };

  render() {
    return (
      <Card.Group>
        {this.state.quotes.map((q) => (
          <Card centered key={this.state.quotes.indexOf(q)}>
            {this.createQuote(q.header, q.author)}
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default Quote;
