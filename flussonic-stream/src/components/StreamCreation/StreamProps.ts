export interface StreamProps {
    streamData: { name: string; sourceURL: string };
    setStreamData: (newData: { name: string; sourceURL: string }) => void;
  }
export default StreamProps