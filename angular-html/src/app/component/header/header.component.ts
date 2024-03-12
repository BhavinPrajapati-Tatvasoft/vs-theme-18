import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mobileDevice: boolean = window.innerWidth < 576;
  tabletDevice: boolean = window.innerWidth < 1200;
  desktopDevice: boolean = window.innerWidth >= 1200;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.mobileDevice = window.innerWidth < 576;
    this.tabletDevice = window.innerWidth < 1200;
    this.desktopDevice = window.innerWidth >= 1200;
  }
  toggleMenu() {
    document.body.classList.toggle('open-menu');
  }
  toggleSearch() {
    document.body.classList.toggle('open-search');
  }
  removeSearchbar() {
    document.body.classList.remove('open-search');
  }

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
