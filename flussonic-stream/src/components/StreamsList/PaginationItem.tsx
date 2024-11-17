import { Pagination } from "react-bootstrap";
import StreamDataArr from "./StreamData.props"
const PaginationItem = ({
  streamData,
  selectPage,
}: {
  streamData: StreamDataArr;
  selectPage: (data: string | number) => Promise<void>;
}): JSX.Element => {
  return (
    <Pagination>
      <Pagination.Prev
        disabled={!streamData?.prev}
        onClick={() => selectPage(streamData?.prev!)}
      />
      <Pagination.Next
        disabled={!streamData?.next}
        onClick={() => selectPage(streamData?.next!)}
      />
    </Pagination>
  );
};

export default PaginationItem