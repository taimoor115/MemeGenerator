import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";
import { createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  console.log(params.get("url"));
  const ref = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={ref} style={{ width: "800px", height: "480px" }}>
        <img src={params.get("url")} width="350px" />
        {Array(count)
          .fill(0)
          .map((e, index) => (
            <Text key={index} />
          ))}
      </div>
      <Button variant="dark" onClick={addText}>
        Add Text
      </Button>
      <Button
        variant="warning"
        className="m-3"
        onClick={() => exportComponentAsJPEG(ref)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
