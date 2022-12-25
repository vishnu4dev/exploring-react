const heading = React.createElement("h1",null, "Namaste React Day 01");
const heading0 = React.createElement("h1",{id:"heading1"}, "Heading 1");
const heading1 = React.createElement("h1",{id:"heading2"}, "Heading 2");

const container = React.createElement("div",{id:"container"},[heading,heading0,heading1])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);