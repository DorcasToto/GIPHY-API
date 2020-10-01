import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif-service/gif.service';
import { Gif } from '../gif-class/gif'

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gifs: Gif;
  giphies = [];

  constructor(private gifService: GifService) {

  }
  ngOnInit(): void {
    this.gifService.gifTrendingRequest()
      .subscribe((res: Response) => {
        for (let i = 0; i < res['data'].length; i++) {
          let trendingTitle = res['data'][i]['title'];
          let trendingURL = res['data'][i]['images']['original']['url'];
          let trendingUsername = res['data'][i]['username']
          let gif = new Gif(trendingTitle,trendingUsername,trendingURL);
          this.giphies.push(gif);
        }
      });
    //console.log();
    //this.gifs = this.gifService.gif;

  }

  searchGiphy

}
