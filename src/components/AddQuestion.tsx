import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Autocomplete, Box, Stack, TextField } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const top100Films = [
  { label: 'Multi Choise', id: 1994 },
  { label: 'Singel Choise', id: 1972 },
  { label: 'descriptive', id: 1974 }
]

const choices = [
  { label: 'Correct', id: 1994 },
  { label: 'Incorrect', id: 1972 },
]

type Props = {
  open: boolean;
  onClose: (val:boolean) => void;
}

const AddQuestion:React.FC<Props> = (props) => {
  const { onClose, open } = props;

  return (
    <Dialog sx ={{borderRadius:'10px'}} onClose={() => onClose(false)} open={open}>
      <Box sx={{bgcolor:'#DEDEDE', width:'600px'}}>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300, m:'13px'}}
          renderInput={(params) => <TextField {...params} label="Question Type" size='small'/>}
        />
      </Box>
      <Box sx={{m:'10px', mt:"20px"}}>
        <Typography variant='body2' sx={{mb:'5px'}}>Question</Typography>
        <TextField
          fullWidth
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="what is the capital of india?"
          variant="filled"
          size="small"
          InputProps={{ disableUnderline: true }}
        />
      </Box>
      <Stack sx={{m:'10px', mt:"20px"}} spacing={2}>
        <Typography variant='body2' sx={{mb:'5px'}}>Answers</Typography>
        <Box sx={{display:'flex', gap:'10px'}}>
          <TextField
            fullWidth
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Delhi"
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
          />
          <Autocomplete
            disablePortal
            options={choices}
            sx={{ width: 200}}
            renderInput={(params) => <TextField {...params} label="answer" size='small'/>}
        />
        </Box>
        <Box sx={{display:'flex', gap:'10px'}}>
          <TextField
            fullWidth
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Hyderabad"
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
          />
          <Autocomplete
            disablePortal
            options={choices}
            sx={{ width: 200}}
            renderInput={(params) => <TextField {...params} label="answer" size='small'/>}
        />
        </Box>
        <Box sx={{display:'flex', gap:'10px'}}>
          <TextField
            fullWidth
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Mumbai"
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
          />
          <Autocomplete
            disablePortal
            options={choices}
            sx={{ width: 200}}
            renderInput={(params) => <TextField {...params} label="answer" size='small'/>}
        />
        </Box>
      </Stack>
      <Box sx={{display:'flex', justifyContent:'flex-end'}}>
        <Box sx={{display:'flex', gap:'10px', m:'10px'}}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default AddQuestion