interface StreamDataArr {
    streams: Array<{
      name: string;
      stats?: {
        status?: string;
        online_clients?: number;
        input_bitrate?: number;
        output_bitrate?: number;
      };
    }>;
    prev?: string | number | null;
    next?: string | number | null;
  }


export default StreamDataArr