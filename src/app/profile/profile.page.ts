import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  profileid:any ;
  character:any ;
  constructor(
    private activatedroute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.profileid= this.activatedroute.snapshot.paramMap.get('id')

    this.http.get<any>('https://rickandmortyapi.com/api/character/'+this.profileid)
      .subscribe(res => this.character= res);
  }

}
