import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy } from '../policy';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  policies:  Policy[];
  selectedPolicy:  Policy  = { id :  null , usuario:null, senha:  null};
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
    //   this.apiService.readPolicies().subscribe((policies: Policy[])=>{
    //   this.policies = policies;
    //   console.log(this.policies);
    //   console.log("aki");
    //  });    
  }

  createOrUpdatePolicy(form){
    if(this.selectedPolicy && this.selectedPolicy.id){
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy updated" , policy);
      });
    }
    else{

      this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy created, ", policy);
      });
    }

  }

  selectPolicy(policy: Policy){
    this.selectedPolicy = policy;
  }

  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Policy)=>{
      console.log("Policy deleted, ", policy);
    });
  }

  confereLogin(form){
    // this.apiService.readPolicies().subscribe((policies: Policy[])=>{
    //   this.policies = policies;
    //   this.router.navigate(['laboratorio']);
    //  });
    this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
      console.log("Policy created, ", policy);
    });
    
  }
  
}
