import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  console.log(params.get("url"));

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <img src={params.get("url")} width="250px" />
        {Array(count)
          .fill(0)
          .map((e, index) => (
            <Text key={index} />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      {/* <Button variant="success" onClick={addText}>Save</Button> */}
    </div>
  );
};

export default EditPage;
