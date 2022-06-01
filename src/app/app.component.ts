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
    console.log(3);
    this.anotherEgForCallbackFn(()=>{console.log('cb fn is called')})
  }

  displayValue(a: number, b: number,callbackfn:any){
    setTimeout(() =>{
      callbackfn (a + b);
      },1000
    );
  }

  anotherEgForCallbackFn(cb:any){
    setTimeout(()=>{
      console.log('Asunc task');
      cb();
    },5000);
  //  this cd() fn is called after 5sec asynchronously
  }
}
