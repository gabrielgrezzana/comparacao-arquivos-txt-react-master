import { useFilePicker } from "use-file-picker";
import React from "react";

export default function Body1(props) {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".txt",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => openFileSelector()}>Selecione um arquivo</button>
      {filesContent.map((file, index) => (
        <>
          <h2>{file.name}</h2>
          {props.getValue(1, file.content)}
        </>
      ))}
    </div>
  );
}
