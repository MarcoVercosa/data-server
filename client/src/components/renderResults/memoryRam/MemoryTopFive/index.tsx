import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, ContainerNav } from './style';


interface IDataMemoryTopFive {
    data: {
        value: [
            {
                Name: string,
                Id: number,
                CPU: number,
                ProcessGB: number
            }
        ]
    }
}

interface IDataMemoryTopFiveMap {
    Name: string,
    Id: number,
    CPU: number,
    ProcessGB: number
}

export default function MemoryTopFive({ data }: IDataMemoryTopFive) {
    return (
        <>
            {
                data.value.map((dataMap: IDataMemoryTopFiveMap, index: number) => {
                    return (
                        <div>
                            <ContainerNav>
                                < Card sx={{ minWidth: 275, maxWidth: 275 }
                                }>
                                    <CardContent>
                                        <Container>
                                            <div>
                                                <h2>{index + 1} Place</h2>
                                            </div>
                                            <div>
                                                <h4>Name:</h4><p>{dataMap.Name}</p>
                                            </div>
                                            <div>
                                                <h4>ID:</h4><p>{dataMap.Id}</p>
                                            </div>
                                            <div>
                                                <h4>Process (GB):</h4><p>{dataMap.ProcessGB}</p>
                                            </div>
                                        </Container>
                                    </CardContent >
                                    <CardActions>
                                        <Button size="small">More</Button>
                                    </CardActions>
                                </Card >
                            </ContainerNav >
                        </div>
                    )
                })

            }
        </>
    )

}

