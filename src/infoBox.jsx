import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZSUyMHdlYXRoZXIlMjBpbWd8ZW58MHx8MHx8fDA%3D";
    let COLD_URL= "https://images.unsplash.com/photo-1613845482849-d063a0862792?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjBjb3VudHJ5fGVufDB8fDB8fHww";
     let COOL_URL ="https://images.unsplash.com/photo-1570460250556-7d36d18ea0c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2wlMjB3ZWF0aGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
     let RAIN_URL="https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
     let WARM_URL="https://images.unsplash.com/photo-1717784374573-96dbf7f4d1e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhcm0lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     let HOT_URL="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     
     let FOG_URL ="https://unsplash.com/photos/a-foggy-field-with-trees-and-a-hill-in-the-background-H9N2Oov3XRA";
    return(
        <div className="InfoBox">
            <h3>Weather Information</h3>
            <div className='card'>
            <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={
          info.humidity>80 ? RAIN_URL
          : info.temp>=30 ? HOT_URL
          :info.temp>=20 ? WARM_URL
          :info.temp>= 10? COOL_URL
          :info.temp>=0 ? FOG_URL 
          :info.humidity>80 ? RAIN_URL
          :COLD_URL

        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
          info.humidity>80 ? <ThunderstormIcon/>
            :info.temp>15 ?<WbSunnyIcon/>
            :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>The weather can be described as <b>{info.weather}</b> and feelslike {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}