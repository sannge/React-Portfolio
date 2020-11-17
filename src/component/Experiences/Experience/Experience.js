import React,{useState,useEffect} from 'react'
import classes from './Experience.module.css'
import moment from 'moment'

function Experience({exp: {at,title,from,to,location,desc,image}}) {
    const [duration,setDuration] = useState("");
    const monthDiff = (d1,d2) => {
        let t = null;
        if(to == 'Present') {
            t = new Date();
        }else {
            t = to;
        }
        let months = 0;
        let year = 0;
        let total = "";
       if(from.getFullYear() !== t.getFullYear()) {
           year = Math.abs(t.getFullYear() - from.getFullYear())
       }
       if(from.getMonth() - t.getMonth() === 0) {
           months = 1
       }else {
        //    if(t.getMonth() - from.getMonth() <0) {
        //     months = Math.abs(t.getMonth() - from.getMonth())
        //     year = year - 1;
        //    }else {
        //     months = Math.abs(t.getMonth() - from.getMonth())
        //    }
        if(from.getMonth() - t.getMonth() > 0 ) {
            months = 12 - from.getMonth() + to.getMonth()
            year = year - 1;
        }
        else {
            months = months = t.getMonth() - from.getMonth()
        }
           
       }

       if(year == 0) {
           if(months > 1) {
            total = `${months+1} months`
           }else {
            total = `${months} month`
           }
           
       }
       else {
           if(year > 1) {
               if(months > 1) {
                total = `${year} years, ${months} months`
               }else {
                total = `${year} years, ${months} month`
               }
           }else {
               if(months > 1) {
                total = `${year} year, ${months} months`
               }else {
                total = `${year} year, ${months} month`
               }
           }
           
       }
       setDuration(total);


    }
    useEffect(() => {
        monthDiff(from,to)
        
    }, []);

    return (
        <div className={classes.Experience}>
        <div className={classes.innerContainer}>
         <div className={classes.imageDiv}>
           <img src={image} alt=""/>
        </div>
        <div className={classes.bodyDiv}>
          <h3>{at}</h3>
          <h4>{title}</h4>
          <small>{moment(from).format('MMMM YYYY')} - {to === 'Present' ? <>Present</> : moment(to).format('MMMM YYYY')} <span className={classes.duration}>({duration})</span></small>
          <div className={classes.location}><small>{location}</small></div>
          <ul>
              {desc.map((d,index) => (
                  <li key={index}>{d}</li>
              ))}
          </ul>

        </div>
        </div>
        </div>
    )
}

export default Experience
