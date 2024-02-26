import styled from "styled-components";
import { Container, Grid, Stack , Typography}  from "@mui/material";


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
          <p>원형 그래프</p>
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
  height: 200px;
  ${({theme}) => theme.FlexRow};
  align-items: center;
  justify-content: center;
  gap: 0 20px;
`;