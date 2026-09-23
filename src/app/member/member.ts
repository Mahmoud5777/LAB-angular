import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../Models/MemberModel';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemeberService } from '../../services/memeber-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [CommonModule, MatTableModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  
  dataSource:MemberModel[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'created', 'actions'];

  constructor(private memberService: MemeberService) { }
  
  ngOnInit() {
    this.memberService.getAllMembers().subscribe((members) => {
      this.dataSource = members;
    });
  }

}
