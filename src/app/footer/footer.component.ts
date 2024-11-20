import { Component } from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import {bootstrapFacebook,bootstrapTwitterX,bootstrapInstagram} from "@ng-icons/bootstrap-icons";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [provideIcons({ heroUsers,bootstrapFacebook,bootstrapTwitterX,bootstrapInstagram })],
})
export class FooterComponent {

}
