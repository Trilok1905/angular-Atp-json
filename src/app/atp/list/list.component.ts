import { Component, OnInit } from '@angular/core';
import { AtpServiceService } from '../../atp-service.service';
import { Titles } from '../titles';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  titles:any=[];
  categories: any=[];
  titlesList:any=[];
  constructor(private atpService:AtpServiceService) { 
    
  }

  ngOnInit() {
    this.getCategory();
    this.getAllTitle();
  }
  getCategory()
  {
    this.atpService.getAtp().subscribe(res=>this.categories=res);
  }
  getTitlesByCategory(category)
  {
    let category1={"category":category};
    this.atpService.getTitleBycategory(category1).subscribe(res=>this.titles=res);
  }
  getAllTitle()
  {
    this.atpService.getTitles().subscribe(res=>this.titlesList=res);
  }

}
