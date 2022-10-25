import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType, Position } from './services/admin/alertify.service';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(private toastr: CustomToastrService) {
    toastr.message('Merhaba', 'Bilal', {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomFullWidth,
    });
    toastr.message('Merhaba', 'Bilal', {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopLeft,
    });
    toastr.message('Merhaba', 'Bilal', {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopRight,
    });
    toastr.message('Merhaba', 'Bilal', {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopFullWidth,
    });
  }
}
