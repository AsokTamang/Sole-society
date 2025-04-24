import express from 'express';
import cors from 'cors';
const corsOption={
    origin:['http://localhost:5173']    //this is a server where the vite runs
};

const app=express()
app.use(cors(corsOption))    //here our app is using the corsOption using cors so that the react will use axios to fetch the data using the api below.

app.get('/api',(req,res)=>{      //here this is the api provided by our backend.
    res.json({
        "shoes": [
          {
            "id": "1",
            "name": "Fresh Foam 1080v13",
            "price": 160,
            "description": "The Fresh Foam 1080v13 offers luxurious cushioning for long-distance runs. Built with responsive Fresh Foam midsole and a breathable mesh upper, it provides a snug, comfortable fit.",
            "imageUrl": "https://nb.scene7.com/is/image/NB/m1080p13_nb_02_i?$pdpflexf2$&wid=440&hei=440",
            "type": "running"
          },
          {
            "id": "2",
            "name": "574 Core",
            "price": 90,
            "description": "The iconic New Balance 574 Core features a retro silhouette with modern comfort. With its suede/mesh upper and ENCAP midsole cushioning, it blends classic style with all-day support.",
            "imageUrl": "https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440",
            "type": "lifestyle"
          },
          {
            "id": "3",
            "name": "FuelCell Rebel v3",
            "price": 140,
            "description": "Designed for speed and comfort, the FuelCell Rebel v3 uses high-rebound foam and a lightweight build to help you push your pace whether on short runs or long races.",
            "imageUrl": "https://photo2.i-run.fr/new-balance-fresh-foam-x-more-v4-w-chaussures-running-femme-618004-1-z.jpg",
            "type": "running"
          },
          {
            "id": "4",
            "name": "Fresh Foam X Hierro v7",
            "price": 140,
            "description": "Built for the trail, the Fresh Foam X Hierro v7 features a Vibram® outsole and Fresh Foam cushioning. It's your best companion on rugged terrain and uneven paths.",
            "imageUrl": "https://nb.scene7.com/is/image/NB/mthierx7_nb_02_i?$pdpflexf2$&wid=440&hei=440",
            "type": "trail"
          },
          {
            "id": "5",
            "name": "FuelCell Trainer",
            "price": 110,
            "description": "This high-performance training shoe delivers support and flexibility for dynamic workouts. FuelCell cushioning keeps you fast and agile through every move.",
            "imageUrl": "https://sneakernews.com/wp-content/uploads/2023/09/new-balance-fresh-foam-more-trail-v4-permafrost-black-nb-burgundy-MMORWBK-3.jpg",
            "type": "training"
          },
          {
            "id": "6",
            "name": "Made in USA 990v6",
            "price": 200,
            "description": "The 990v6 blends heritage with modern performance. It’s made in the USA and crafted from premium suede and mesh with updated cushioning for everyday comfort.",
            "imageUrl": "https://cdn.shopify.com/s/files/1/1247/6259/files/MTMORLW3-1_1024x.jpg?v=1684257109",
            "type": "lifestyle"
          }
        ]
      }
      )
})

app.listen(5001,()=>console.log('server is running'))   //5001 is the port where our nodemon server is running.