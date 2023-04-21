/**
 * Adapted from https://mui.com/material-ui/react-card/
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardStyles from './card.module.css';

export default function MediaCard({title, description, github, img, width}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: width, minWidth: width }} className={cardStyles.card} style={{backgroundColor: "rgba(18, 18, 18, 0.6)"}}>
      <CardMedia
        component="img"
        sx={{ height: 240 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {github ? 
          <Button size="small" href={github} target="_blank" variant="contained">See on GitHub</Button>
          : <></>
        }
        
      </CardActions>
    </Card>
  );
}