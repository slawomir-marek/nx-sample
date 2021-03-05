import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { ListItem } from '@nx-sample/share';

@Component({
  selector: 'nx-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items$: Observable<ListItem[]>;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.items$ = this.service.getData();
  }
}
