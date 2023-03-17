import { Component, OnInit } from '@angular/core';
import { count, fromEvent, scan } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RxJS_Practice';
  ngOnInit(): void {
    fromEvent(document, 'click')
.pipe(scan((count)=> count +1 ,0))
    .subscribe((count)=>{
      console.log(`clicked ${count}`);
    });
  }
}
