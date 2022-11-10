import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
export default function Card_pokedex({name, img, types}) {

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }
      return types[0].type.name
  }
  return (
    <Card sx={{ maxWidth: 345, m: 1.5}}>
      <Paper id='paper' sx={{ height: 150}}>
        <img className='poke_img' src={img} alt="" />
        </Paper>
      <CardContent sx={{ maxHeight: 45 }}>
        <Typography sx={{ fontWeight: 'bold' }}  
        gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography 
        gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}