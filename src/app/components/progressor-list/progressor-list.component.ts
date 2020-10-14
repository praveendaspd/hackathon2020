import { Component, OnInit } from '@angular/core';
import { ProgressorService } from 'src/app/services/progressor.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './progressor-list.component.html',
  styleUrls: ['./progressor-list.component.css']
})
export class ProgressorListComponent implements OnInit {

  progresses: any;
  constructor(private tutorialService: ProgressorService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.progresses = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
