import * as React from 'react';
import { Checkbox, Container, Grid2 as Grid, Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function Question() {
    return (
        <Container>
            <Paper elevation={3} sx={{ p:'25px'}}>
                <Typography pl={'25px'}>
                    Which Types of exercises do you prefer?
                </Typography>
                <Grid container spacing={2} p={"25px"}>
                    <Grid size={6}>
                        <Item>
                            Running
                            <Checkbox /> 
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            Swimming
                            <Checkbox />
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            Dancing
                            <Checkbox />
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            Bicyling
                            <Checkbox />
                        </Item>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}