import { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={() => setEditMode(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={() => setEditMode(true)}>{value} </h1>
      )}
    </Draggable>
  );
};

export default Text;
