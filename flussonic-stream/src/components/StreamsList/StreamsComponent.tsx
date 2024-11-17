import { Container, Table,  Alert } from "react-bootstrap"
import { useQuery } from "react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import PaginationItem from "./PaginationItem"
import StreamDataArr from "./StreamData.props"



const StreamsComponent  = () : JSX.Element => {
    const [streamsData, setStreamsData] = useState<StreamDataArr>()
    const {isLoading, isError, data } = useQuery ({
        queryKey: 'streams',
        queryFn: async () => {
            const response = await axios.get(
              "http://127.0.0.1:4010/streamer/api/v3/streams?limit=100"
            );
            return response.data;
          },
        keepPreviousData: true,
        refetchInterval: 10000,
    })

useEffect(()=>{setStreamsData(data)},[data])


async function selectPage (cursor : string | number) : Promise<void>  {
 await axios.get(`http://127.0.0.1:4010/streamer/api/v3/streams?limit=100&cursor=${cursor}`)
.then(resp => {
    if(resp.status === 200) {
        setStreamsData(resp.data)
    }
    if (resp.status !== 200) {
        throw new Error('Ошибка загрузки данных')
    }
})
}

if (isLoading) {
    return (
        <Container>
        <Alert variant="primary">Loading data</Alert>
        </Container>
    )
}

if (isError) {
    return (
        <Container>
        <Alert variant="danger">Failed to load data</Alert>
        </Container>
    )
  
}

return (
    <Container className="stream-table-div">
    <Table size="sm" hover responsive>
        <thead>
        <tr>
         <th>№</th>
         <th>Name</th>
         <th>Status</th>
         <th>Clients</th>
         <th>Input bitrate</th>
         <th>Output bitrate</th>   
         </tr>
        </thead>
        <tbody>
            {streamsData?.streams?.map((stream, index) => {
                return(
                    <tr key={stream.name}>
                    <td>{index + 1}</td>
                    <td>{stream.name}</td>
                    <td>{stream.stats?.status}</td>
                    <td>{stream.stats?.online_clients}</td>
                    <td>{stream.stats?.input_bitrate}</td>
                    <td>{stream.stats?.output_bitrate}</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
    <PaginationItem selectPage={selectPage} streamData={streamsData!} />
    </Container>
)
}

export default StreamsComponent