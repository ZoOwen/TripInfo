import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="100%"
                  image="https://media.cntraveler.com/photos/58acbfbe4caece30d0855696/master/w_820,c_limit/Bathsheba-barbados-GettyImages-158546414.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Beach
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A beach is a landform alongside a body of water which
                    consists of loose particles. The particles composing a beach
                    are typically made from rock, such as sand, gravel, shingle,
                    pebbles. The particles can also be biological in origin,
                    such as mollusc shells or coralline algae. Some beaches have
                    man-made infrastructure, such as lifeguard posts, changing
                    rooms, showers, shacks and bars. They may also have
                    hospitality venues (such as resorts, camps, hotels, and
                    restaurants) nearby. Wild beaches, also known as undeveloped
                    or undiscovered beaches, are not developed in this manner.
                    Wild beaches can be appreciated for their untouched beauty
                    and preserved nature.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
              <br/>

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="100%"
                  image="https://www.un.org/sites/un2.un.org/files/styles/banner-image-style-27-10/public/mountain_cover.jpg?itok=65lHzr0g"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mountain / village
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A beach is a landform alongside a body of water which
                    consists of loose particles. The particles composing a beach
                    are typically made from rock, such as sand, gravel, shingle,
                    pebbles. The particles can also be biological in origin,
                    such as mollusc shells or coralline algae. Some beaches have
                    man-made infrastructure, such as lifeguard posts, changing
                    rooms, showers, shacks and bars. They may also have
                    hospitality venues (such as resorts, camps, hotels, and
                    restaurants) nearby. Wild beaches, also known as undeveloped
                    or undiscovered beaches, are not developed in this manner.
                    Wild beaches can be appreciated for their untouched beauty
                    and preserved nature.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Hotel"
                  height="100%"
                  image="http://hotelmalioboro.web.id/wp-content/uploads/2019/11/hotel.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hotel
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality mattress in a small room to large suites with
                    bigger, higher-quality beds, a dresser, a refrigerator and
                    other kitchen facilities, upholstered chairs, a flat screen
                    television, and en-suite bathrooms. Small, lower-priced
                    hotels may offer only the most basic guest services and
                    facilities. Larger, higher-priced hotels may provide
                    additional guest facilities such as a swimming pool,
                    business centre (with computers, printers, and other office
                    equipment), childcare, conference and event facilities,
                    tennis or basketball courts, gymnasium, restaurants, day
                    spa, and social function services. Hotel rooms are usually
                    numbered. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
              <br />

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Hotel"
                  height="100%"
                  image="https://bendedreality.com/wp-content/uploads/2016/12/moon_vacation-1-585x306.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hotel
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    other way, if you already bored with this world you can go to moon to spend your time with alien or.... another alien.
                    you can make barbeque party with alien, playing foot ball with alien, make an apple phone or anything else.
                    oke?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
