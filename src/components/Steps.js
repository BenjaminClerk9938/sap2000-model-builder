import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Step type constant for drag-and-drop
const ItemTypes = {
  STEP: "step",
};

const initialSteps = [
  { id: "step-1", content: "Set coordinates for plates - Step 1" },
  { id: "step-2", content: "Set coordinates for plates - Step 2" },
  { id: "step-3", content: "Set coordinates for plates - Step 3" },
  { id: "step-4", content: "Set coordinates for plates - Step 4" },
];

// Draggable step card component
const StepCard = ({ step, index, moveStep }) => {
  const [, ref] = useDrag({
    type: ItemTypes.STEP,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.STEP,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveStep(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <Card
      ref={(node) => ref(drop(node))}
      style={{ padding: "16px", marginBottom: "8px" }}
    >
      <Typography variant="body1">{step.content}</Typography>
    </Card>
  );
};

function Steps() {
  const [steps, setSteps] = useState(initialSteps);

  // Function to reorder steps when dragged
  const moveStep = (fromIndex, toIndex) => {
    const updatedSteps = Array.from(steps);
    const [movedStep] = updatedSteps.splice(fromIndex, 1);
    updatedSteps.splice(toIndex, 0, movedStep);
    setSteps(updatedSteps);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <Typography variant="h6" mb={2}>
          Steps
        </Typography>
        <Box style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              moveStep={moveStep}
            />
          ))}
        </Box>
      </Box>
    </DndProvider>
  );
}

export default Steps;
