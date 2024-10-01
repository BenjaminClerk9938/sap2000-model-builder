import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import StepsTitle from "./StepsTitle";
import StepCard from "./StepCard";

// Step type constant for drag-and-dro

const initialSteps = [
  { id: "step-1", content: "Set coordinates for plates - Step 1" },
  { id: "step-2", content: "Set coordinates for plates - Step 2" },
  { id: "step-3", content: "Set coordinates for plates - Step 3" },
  { id: "step-4", content: "Set coordinates for plates - Step 4" },
];

function Steps() {
  //   const [steps, setSteps] = useState(initialSteps);
  const [selectedStep, setSelectedStep] = useState(null); // Track selected step

  const [steps, setSteps] = useState([
    { text: "Pin end supports for plates", completed: true },
    { text: "Set coordinates for plates", completed: false },
    { text: "Set soil pressure for plates", completed: false },
    { text: "Pin end supports for plates", completed: false },
  ]);

  const moveStep = (fromIndex, toIndex) => {
    const updatedSteps = [...steps];
    const [movedStep] = updatedSteps.splice(fromIndex, 1);
    updatedSteps.splice(toIndex, 0, movedStep);
    setSteps(updatedSteps);
  };

  const handleEditComplete = (index, newText) => {
    const updatedSteps = [...steps];
    updatedSteps[index].text = newText;
    setSteps(updatedSteps);
  };

  const handleDelete = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  // Function to reorder steps when dragged
    // const moveStep = (fromIndex, toIndex) => {
    //   const updatedSteps = Array.from(steps);
    //   const [movedStep] = updatedSteps.splice(fromIndex, 1);
    //   updatedSteps.splice(toIndex, 0, movedStep);
    //   setSteps(updatedSteps);
    // };
  const selectStep = (id) => {
    setSelectedStep(id); // Set the selected step
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <StepsTitle />
        <Box style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              moveStep={moveStep}
              onDelete={handleDelete}
              onEditComplete={handleEditComplete}
            />
          ))}
        </Box>
      </Box>
    </DndProvider>
  );
}

export default Steps;
