import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from "@ionic/angular";
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public searchTerm: string = "";
  public items: any;
  constructor(public navCtrl: NavController,public platform: Platform,private nativeAudio: NativeAudio, private dataService: DataService) {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('uniqueId1', 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/65/a0/84/65a084ac-bae3-5880-f9a4-32314568916c/mzaf_416028643252077482.plus.aac.p.m4a').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
    });
  }
  ngOnInit() {
    this.setFilteredItems();
  }
  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  play(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
  }
}
