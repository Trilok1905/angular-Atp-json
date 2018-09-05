import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AtpServiceService } from '../../atp-service.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form:FormGroup;
  constructor(private router:Router,private atpService:AtpServiceService,private route:ActivatedRoute) {
    
   }
   atps:any=[];
  ngOnInit() {
    this.getAtps();
    this.createForm();
    this. getAtp();
  }
  // create Form 
  createForm()
  {
    this.form=this.atpService.createTitleForm();
  }
  // get atps
  getAtps()
  {
    this.atpService.getAtp().subscribe(
      res=>{this.atps=res},
      err=>{console.log(err)}
    );
  }
  //get atp bi id
  getAtp()
  {
   let  id;
   this.route.params.subscribe(params=>{id=params['id']});
   this.atpService.getTitleById(id).subscribe(data=>{this.form.patchValue(data[0])});
  }
  onSubmit(form)
  {
    this.atpService.createTitle(form.value).subscribe(()=>{this.goBack();},
  err=>{console.log(err)});
  }
  goBack()
  {
    this.router.navigate(['atp']);
  }

}
