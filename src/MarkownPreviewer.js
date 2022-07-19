import { useState } from "react";
import { marked } from "marked";
import { Container, Row, Col } from "react-bootstrap";

function MarkdownPreviewer() {
  const defaultText = `# Hello World!
## Welcome to this React Markdown Previewer
## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.linkedin.com/in/rocio-girardini/), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

Built with ![React Js Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)

    `;

  const [text, setText] = useState(defaultText);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <h1 className="titulo">Markdown Previewer</h1>
      <Container>
        <Row>
          <Col>
            <h2 className="EditHeading">Editor</h2>
            <textarea
              name="text"
              id="editor"
              cols="50"
              rows="15"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Col>
          <Col>
            <h2 className="PrevHeading">Previewer</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(text),
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MarkdownPreviewer;
