import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  private media: Media,
  private file: File,
  public platform: Platform) {

  }

    audioFunc() {

    console.log('in audioFunc');
    }

    audioFunc1() {

    console.log('in audioFunc');

    // Create a Media instance.  Expects path to file or url as argument
    // We can optionally pass a second argument to track the status of the media
/*
    const file: MediaObject = this.media.create('assets/snd/hello.mp3');

    // to listen to plugin events:

    file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    
    file.onSuccess.subscribe(() => console.log('Action is successful'));

    file.onError.subscribe(error => console.log('Error!', error));

    // play the file
    file.play();

    // pause the file
    //file.pause();

    // get current playback position
    //file.getCurrentPosition().then((position) => {
    //  console.log('Current Position : ' + position);
    //});

    // get file duration
    let duration = file.getDuration();
    //console.log('File Duration : ' + duration);

    // skip to 10 seconds (expects int value in ms)
    //file.seekTo(10000);

    // stop playing the file
    //file.stop();

    // release the native audio resource
    // Platform Quirks:
    // iOS simply create a new instance and the old one will be overwritten
    // Android you must call release() to destroy instances of media when you are done
    //file.release();
    */


    /* Recording to a file
    const file: MediaObject = this.media.create('path/to/file.mp3');

    file.startRecord();

    file.stopRecord();
    */
  }
}
