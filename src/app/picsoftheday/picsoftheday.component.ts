import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-picsoftheday',
  templateUrl: './picsoftheday.component.html',
  styleUrls: ['./picsoftheday.component.scss']
})
export class PicsofthedayComponent implements OnInit {

  image: string;
  date: string;

  constructor(public nasaApi: NasaApiService) { }



  ngOnInit() {
    this.nasaApi.pics().subscribe(result => {
      this.image = result.hdurl
      this.date = result.date
    })
  }

}
