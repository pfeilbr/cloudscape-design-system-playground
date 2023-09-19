import logo from "./logo.svg";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";

import { useEffect, useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import Link from "@cloudscape-design/components/link";
import Box from "@cloudscape-design/components/box";
import Flashbar from "@cloudscape-design/components/flashbar";
import ExpandableSection from "@cloudscape-design/components/expandable-section";

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MyFlashBar = () => {
  const [items, setItems] = useState([
    {
      type: "success",
      content: "This is a success flash message.",
      action: <Button>View instance</Button>,
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      id: "message_1",
    },
  ]);
  return <Flashbar items={items} />;
};

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await sleep(1000);
      setData(people);
    };
    fetchData();
  });

  return (
    <SpaceBetween size="m">
      <Container>
        <Header variant="h1">Hello World!</Header>
        <SpaceBetween size="s">
          <span>Start editing to see some magic happen</span>
          <Input
            value={value}
            onChange={(event) => setValue(event.detail.value)}
          />
          <Button variant="primary">Click me</Button>
          <Alert
            header={
              <span>
                This is the alert header{" "}
                <Link href="https://example.com">with a link</Link>
              </span>
            }
          />

          {data.map((person, index) => (
            <Box margin="xxl" padding="xs" variant="code">
              <div key={index}>
                <span>{person.name}</span>
                <span>{person.age}</span>
              </div>
            </Box>
          ))}

          <MyFlashBar />
          <ExpandableSection defaultExpanded headerText="Static website hosting">
            After you enable your S3 bucket for static website hosting, web
            browsers can access your content through the Amazon S3 website
            endpoint for the bucket.
          </ExpandableSection>
        </SpaceBetween>
      </Container>
    </SpaceBetween>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
