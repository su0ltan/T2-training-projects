import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userData!: User[];
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}
  onSort(ev: any) {}

  ngOnInit(): void {
    // this.http.get<User[]>('https://fakestoreapi.com/users').subscribe((res) => {
    //   this.userData = res;
    // });
    this.userData = this.activeRoute.snapshot.data['users'];
  }
}
