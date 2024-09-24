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
  // useDrag will now return 'isDragging' to control the visual effect when dragged
  const [{ isDragging }, ref] = useDrag({
    type: ItemTypes.STEP,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
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

  // Style adjustments when the card is being dragged
  const cardStyle = {
    padding: '16px',
    marginBottom: '8px',
    backgroundColor: isDragging ? '#f0f0f0' : '#fff', // Light grey when dragging
    boxShadow: isDragging ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none', // Drop shadow when dragging
    opacity: isDragging ? 0.5 : 1, // Reduce opacity when dragging
    transform: isDragging ? 'scale(1.02)' : 'scale(1)', // Slightly increase size when dragging
    transition: 'all 0.2s ease', // Smooth transition
  };

  return (
    <Card ref={(node) => ref(drop(node))} style={cardStyle}>
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
