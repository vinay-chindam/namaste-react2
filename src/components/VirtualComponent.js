import { FixedSizeList } from "react-window";
import { data } from "../dummyData";

function VirtualComponent() {

  const Row = ({ index, style }) => (
    <div
      style={{
        ...style,
        padding: "10px",
        borderBottom: "1px solid #ccc"
      }}
    >
      {data[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemSize={40}
      itemCount={data.length}
    >
      {Row}
    </FixedSizeList>
  );
}

export default VirtualComponent;