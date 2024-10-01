import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Box, Button, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const ItemTypes = {
  STEP: "step",
};

const StepCard = ({ step, index, moveStep, onDelete, onEditComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(step.completed || false);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState(step.text);
  const [isRunning, setIsRunning] = useState(false);
  // Drag and Drop logic
  const [{ isDragging }, drag] = useDrag({
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCompleteEdit = () => {
    setIsEditing(false);
    onEditComplete(index, inputValue);
    setIsCompleted(true); // Mark as completed after editing
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Box
        ref={(node) => drag(drop(node))}
        sx={{
          "&::before": {
            content: '"="', // Empty content for the pseudo-element
            position: "absolute",
            fontSize: "14px",
            left: "-12px",
            zIndex: 1,
          },
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          //   backgroundColor: isHovered ? "#f0f0f0" : "#ffffff",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          height: "32px",
          opacity: isDragging ? 0.5 : 1,
          boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          cursor: "move",
          fontSize: "12px",
          borderBottom: isCompleted ? "2px solid #4CAF50" : "1px solid #ccc",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isEditing ? (
          <>
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              fullWidth
              variant="standard"
              InputProps={{
                inputProps: {
                  style: {
                    padding: 0, // Set padding to 0
                  },
                },
              }}
              //   sx={{ padding: "0 10px", lineHeight: "16px" }}
            />
            <Button
              sx={{
                padding: "0",
                height: "10px",
                fontSize: "10px",
                minWidth: "32px",
                minHeight: "12px",
              }}
              onClick={handleCompleteEdit}
            >
              <CheckIcon />
            </Button>
          </>
        ) : (
          <>
            <Box
              sx={{
                height: "32px",
                flexGrow: 1,
              }}
              alignItems={"center"}
              display={"flex"}
            >
              {inputValue}
            </Box>
            {isHovered && (
              <>
                <Button
                  sx={{
                    padding: "0",
                    height: "32px",
                    fontSize: "12px",
                    minWidth: "32px",
                    // minHeight: "16px",
                  }}
                  onClick={handleEdit}
                >
                  <EditIcon fontSize="16px" />
                </Button>
                <Button
                  sx={{
                    padding: "0",
                    height: "32px",
                    fontSize: "12px",
                    minWidth: "32px",
                    // minHeight: "16px",
                  }}
                  onClick={() => onDelete(index)}
                >
                  <DeleteIcon fontSize="16px" />
                </Button>
              </>
            )}
          </>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          color="inherit"
          sx={{
            padding: 0,
            minWidth: "16px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="#F3F3F3" />
            <path
              d="M12.9167 11.9105C12.9167 11.344 12.9167 11.0608 13.0348 10.9046C13.1377 10.7686 13.295 10.6844 13.4653 10.6743C13.6607 10.6626 13.8964 10.8197 14.3677 11.1339L20.5018 15.2233C20.8913 15.483 21.086 15.6128 21.1539 15.7764C21.2133 15.9195 21.2133 16.0803 21.1539 16.2234C21.086 16.387 20.8913 16.5168 20.5018 16.7765L14.3677 20.8659C13.8964 21.1801 13.6607 21.3372 13.4653 21.3256C13.295 21.3154 13.1377 21.2313 13.0348 21.0952C12.9167 20.9391 12.9167 20.6558 12.9167 20.0893V11.9105Z"
              stroke="#292929"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

export default StepCard;
