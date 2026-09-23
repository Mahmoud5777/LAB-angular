import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../Models/MemberModel';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemeberService } from '../../services/memeber-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  imports: [CommonModule, MatTableModule, MatIconModule, RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {
  
  dataSource:MemberModel[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'created', 'actions'];

  constructor(private memberService: MemeberService, private dialog: MatDialog) { }
  
  ngOnInit() {
    this.memberService.getAllMembers().subscribe((members) => {
      this.dataSource = members;
    });
  }

  deleteMember(id: String) {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '250px',
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.memberService.deleteMember(id).subscribe(() => {
          this.ngOnInit();
        });
      }
    });
  }

}
