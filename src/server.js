
const express=require('express');
const cors=require('cors')
const db=require('./APIs/firebase_config')
const app=express();
app.use(cors());

app.use(express.json());

app.listen(8000,()=>{
    console.log("Server is listening")
});

app.get('/data',async (req,res)=>{
    try {
        console.log("Requesting data");
        const schedule=db.collection("Schedules").doc("Raveen").collection("Schedule");
        const response=await schedule.get();
        let responsearr=[];
        response.forEach(element => {

            let temparr={id:element.id,...element.data()};
            
            //temparr.push({id:element.id,...element.data()})
            responsearr.push(temparr);
            
        });
        res.send(responsearr);
        console.log("Sending data");

    } catch (error) {
        res.send("error",error);
    }
});



app.post('/update',async (req,res)=>{
    try {
        console.log("Update data")
        const req_data=req.body;
        const day_count=req_data.day;
        const time_count=req_data.time;
        const new_task=req_data.task;

        let update_day,update_time;

        

        switch (day_count) {
            case '0':
                update_day="Sun"
                
                break;

            case '1':
                update_day="Monday"
                break;

            case '2':
                update_day="Tue"
                break

            case '3':
                update_day="Wen"
                break

            case '4':
                update_day="Thu"
                break

            case '5':
                update_day="Fri"
                break

            case '6':
                update_day="Sat"
                break
        
            default:
                break;
        }

        let obj={}

        switch (time_count) {
            case '7':
            case '8':
                obj={"eightten":new_task}
                
                break;

            case '9':
            case '10':
                obj={"tentwel":new_task}
                break;

            case '13':
            case '12':
                obj={"onethree":new_task}
                
                break

            case '14':
            case '15':
                obj={"threefive":new_task}
                
                break
        
            default:
                break;
        }
        
        
        
        console.log(obj,update_time);
        const schedule=await db.collection("Schedules").doc("Raveen").collection("Schedule").doc(update_day).update(obj);
        
        
        
    } catch (error) {
        
    }
})

app.get('/name',(req,res)=>{
    res.json({message:"Name is sahas"});
    console.log("recieved get");
});