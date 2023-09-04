import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor( private service :SellerService , private router : Router) { }

  ngOnInit(): void {
  }

  singUp(data:signUp):void{

    this.service.signUpSeller(data).subscribe((result) => {
      // console.log(result);
       if(result){
        this.router.navigate(['seller-home'])
       }
      
    });

  }

}
