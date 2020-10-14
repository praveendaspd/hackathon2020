import { Component, OnInit } from '@angular/core';
import { ProgressorService } from 'src/app/services/progressor.service';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.html'
})
export class BannerDetailsComponent implements OnInit {

  tutorials: any;
  currentTutorial = this.tutorials;

  constructor(private tutorialService: ProgressorService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
