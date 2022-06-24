import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styled from "styled-components"

interface IDetailDisk {
    data: {
        DeviceId: string
        MediaType: string
        BusType: string
        OperationalStatus: string
        SizeGB: number
        HealthStatus: string
    }
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function DiskDetail({ data }: IDetailDisk) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Container>
                    <div>
                        <h4>BusType:</h4><p>{data.BusType}</p>
                    </div>
                    <div>
                        <h4>DeviceId:</h4><p>{data.DeviceId}</p>
                    </div>
                    <div>
                        <h4>MediaType:</h4><p>{data.MediaType}</p>
                    </div>
                    <div>
                        <h4>OperationalStatus:</h4><p>{data.OperationalStatus}</p>
                    </div>
                    <div>
                        <h4>Size (GB):</h4><p>{data.SizeGB}</p>
                    </div>
                    <div>
                        <h4>HealthStatus:</h4><p>{data.HealthStatus}</p>
                    </div>
                </Container>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card >
    );
}


export const Container: any = styled.div`
    display: flex;
    flex-direction: column;
    div{
        padding: 17px;
        h4{
            display:inline-block;
            margin: 0
        }
        p{
            display:inline-block;
            margin: 0;
            margin-left: 10px;
            font-weight: bold;
            color: #707372
        }
    }

    
`