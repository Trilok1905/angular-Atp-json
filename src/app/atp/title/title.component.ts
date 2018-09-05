import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtpServiceService } from '../../atp-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  category:any;
  titles:any;
  constructor(private route:ActivatedRoute,private router:Router, private atpService:AtpServiceService,private location:Location) { }

  ngOnInit() {
    this.getAtpByCategory();
  }
  getAtpByCategory()
  {
    this.route.params.subscribe(params=>{this.category=params['category']});
    //console.log(this.category);
    this.atpService.getTitleBycategory(this.category).subscribe(data=>{this.titles=data});
  }
  goBack()
  {
    this.location.back();
  }
  addTitle()
  {
    this.router.navigate(['add']);
  }
  deleteTitle(id)
  {
    console.log(id);
    this.atpService.deleteTitle(id).subscribe(()=>this.getAtpByCategory());
  }

}
