import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-CallbackFunction';

  ngOnInit() {
    console.log(1);
    this.displayValue(10,5,function (arg: any){
      console.log('call back function value is '+arg)
    });
    // console.log(result);
    console.log(3);
  }

  displayValue(a: number, b: number,callbackfn:any){
    setTimeout(() =>{
      callbackfn (a + b);
      },1000
    )
  }
}
