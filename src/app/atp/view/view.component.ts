import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtpServiceService } from '../../atp-service.service';
import { UserResponse } from '../user-response';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  atp: UserResponse ;
  id:UserResponse;
  form:FormGroup;
  view:boolean;
  title:any;
  constructor(private route:ActivatedRoute,private router:Router, private atpService:AtpServiceService) { }

  ngOnInit() {
    this.getAtpById();
    this.createCategoryForm();
    //console.log(this.atp);
  }
  // create category form
  createCategoryForm()
  {
    this.form=this.atpService.createCategoryForm();

  }
  getAtpById()
  {
    this.route.params.subscribe(params=>{this.id=params['id']});
    this.atpService.getAtpBYId(this.id).subscribe(data=>{this.form.patchValue(data[0])});
   this.view=true;
   this.title='view';

  }
  onSubmitForm(form)
  {
    console.log(form.value);
  }
  editCategory()
  {
    this.view=false;
    this.title='edit';
  }
  goBack()
  {
    this.router.navigate(['atp']);
  }

}
