import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ProjectHeader from "./ProjectHeader";
import ProjectComponent from "./ProjectComponent";
// import StepCard from "./StepCard";

// Step type constant for drag-and-dro

const initialComponents = [
  { title: "CP7", time: "9:35am, Tuesday, Sep 27" },
  { title: "CP8", time: "9:35am, Tuesday, Sep 27" },
  { title: "CP8", time: "9:35am, Tuesday, Sep 27" },
];

function ProjectsComponent() {
  const [components, setComponents] = useState(initialComponents);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <ProjectHeader />
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          gap={2}
          sx={{
            "& .MuiCard-root": {
              // Target all direct children with class 'MuiCard-root'
              // Example styles:
              border: "1px solid black",
              borderRadius: "8px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {components.map((project, index) => (
            <ProjectComponent
              key={index}
              name={project.title}
              time={project.time}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </DndProvider>
  );
}

export default ProjectsComponent;
