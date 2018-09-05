import { Component, OnInit } from '@angular/core';
import {  HttpErrorResponse } from '@angular/common/http';
import { AtpServiceService } from '../atp-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atp',
  templateUrl: './atp.component.html',
  styleUrls: ['./atp.component.css']
})
export class AtpComponent implements OnInit {
  atps:any=[];
  constructor(private AtpService:AtpServiceService,private router:Router) { }
  ngOnInit() {
   this.getAtp();
  }
  getAtp()
  {
    this.AtpService.getAtp().subscribe(data=>{this.atps=data},
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }
  addTitle()
  {
    this.router.navigate(['add']);
  }
}
