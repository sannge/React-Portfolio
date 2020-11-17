import React,{useEffect} from 'react'
import classes from './Noti.module.css'
import {Howl,Howler} from 'howler';
import NotiSound from '../../assets/notiSound.mp3'

function Noti({notiCount}) {

    const soundPlay = (src) => {
        const sound = new Howl({
          src
        })
        sound.play();
      }
    useEffect(() => {
        soundPlay(NotiSound)
    },[notiCount])

    Howler.volume(1.0)
    return (
        <div className={classes.noti}><p>{notiCount}</p></div>
    )
}

export default Noti
