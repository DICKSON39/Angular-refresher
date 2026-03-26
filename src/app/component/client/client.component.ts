import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponse } from '../../model/interface/user';


@Component({
  selector: 'app-client',
  imports: [FormsModule,],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: IUser = new IUser();
  clientList: IUser[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.GetAllUsers().subscribe((res: ApiResponse) => {
      this.clientList = res.data;
    });
  }
 onSaveClient() {
  if (this.clientObj._id) {
    
    this.clientService.edit(this.clientObj._id, this.clientObj)
      .subscribe((res: ApiResponse) => {
        if (res.result) {
          alert('Updated Successfully');
          this.loadClient();
          this.clientObj = new IUser();
        } else {
          alert(res.message);
        }
      });
  } else {
    
    this.clientService.addUser(this.clientObj)
      .subscribe((res: ApiResponse) => {
        if (res.result) {
          alert('Created Successfully');
          this.loadClient();
          this.clientObj = new IUser();
        } else {
          alert(res.message);
        }
      });
  }
}

  onDelete(_id: number) {
    const isDelete = confirm('Are you sure You want to delete');
    if (isDelete) {
      this.clientService.delete(_id).subscribe((res: ApiResponse) => {
        if (res.result) {
          alert('Client deleted');
          this.loadClient();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onEdit(data: IUser) {
    this.clientObj = {...data};
  }
}
