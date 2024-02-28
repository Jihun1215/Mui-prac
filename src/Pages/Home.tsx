import styled from "styled-components";
import { Container, Grid, Stack , Typography }  from "@mui/material";
import { PieChart, LineChart } from '@mui/x-charts';


// material-ui
// import { Button, Container, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { DefaultCard } from 'components/common';
// // assets
// import Left from 'assets/icons/left.svg?react';
// import Setting from 'assets/icons/setting.svg?react';
// import Headset from 'assets/icons/headset.svg?react';
// import Info from 'assets/icons/info.svg?react';
// import Notification from 'assets/icons/notification.svg?react';
// import Comment from 'assets/icons/comment.svg?react';
// import World from 'assets/icons/world.svg?react';
// type

// project import


export const Home = () => {
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

  return (
    <Container component="main" maxWidth="lg">
      <Stack sx={{ mb: 10 }} alignItems="center">
          <Typography component="h1" variant="h5">
            MUI CSS Group
          </Typography>
      </Stack>

      <Row>
        <Group>
         <Grid style={{ width: "300px", 
                        height: "200px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)" }} sm={6} md={3} >
           <p>토글 버튼</p>
         </Grid>
      {/* xs={20} sm={6} md={3} 이건 반응형 관련  */}
         <Grid style={{ width: "300px", 
                        height: "200px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)" }} sm={6} md={3} >
           <PieChart
                series={[
                     {
                        data: [
                         { id: 0, value: 20, label: 'series A' },
                         { id: 1, value: 25, label: 'series B' },
                         { id: 2, value: 50, label: 'series C' },
                            ],
                    },
                         ]}
                width={400}
                height={200}
                style={{cursor: "pointer"}}
            />
          </Grid>     


          <Grid style={{ width: "300px", 
                        height: "200px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)"
                         }} sm={6} md={3} >
              <Typography variant="h6">3</Typography>
          </Grid>        

          <Grid style={{ width: "300px", 
                        height: "200px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)" }} sm={6} md={3} >
              <Typography variant="h6">4</Typography>
          </Grid>     
        </Group>

        <Group>
        <Grid style={{ width: "100%", 
                        height: "400px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.15)" }} sm={6} md={3} >
            
            <LineChart
                width={500}
                height={300}
                series={[
                 { data: pData, label: 'pv' },
                 { data: uData, label: 'uv' },
                ]}
                 xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
          </Grid>     

        </Group>


         </Row>
         


    </Container>
  )
}

const Row = styled.div`
  width: 100%;
  height: 90%;
  ${({theme}) => theme.FlexCol};
  align-items: center;
`;

const Group= styled.div`
  width: 100%;
  height: 400px;
  ${({theme}) => theme.FlexRow};
  align-items: center;
  justify-content: center;
  gap: 0 20px;
`;