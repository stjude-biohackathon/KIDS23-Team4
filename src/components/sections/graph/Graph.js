import StyledDiv from "./Graph.styled";

import { default as data } from "../../../data/Data";
import CytoscapeComponent from "react-cytoscapejs";
import { useEffect } from "react";

console.log(data);

export default function Graph() {
  let cyRef;

  const addToGroup = (el) => el.addClass("isGrouped");

  useEffect(() => {
    console.log(cyRef);
    cyRef.on("tap", "node", (e) => {
      addToGroup(e.target);
    });
  });

  return (
    <StyledDiv>
      <CytoscapeComponent
        cy={(cy) => (cyRef = cy)}
        layout={{ name: "circle" }}
        stylesheet={[
          {
            selector: "node",
            style: {
              "background-color": "tomato",
              label: "data(id)",
            },
          },
          {
            selector: "node[?isMutated]",
            style: {
              shape: "star",
            },
          },
          {
            selector: ".isGrouped",
            style: {
              "background-color": "green",
            },
          },
        ]}
        elements={data}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </StyledDiv>
  );
}
