import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {heroHome} from '@ng-icons/heroicons/outline';
import {ionLogInOutline,ionInformationCircle,ionPeople} from "@ng-icons/ionicons"
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIcon,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ heroHome,ionLogInOutline,ionPeople,ionInformationCircle})],
})
export class HeaderComponent {
  @Input()title: string | undefined;
}
