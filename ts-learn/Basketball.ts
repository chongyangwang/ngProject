import {Ball} from './Ball'

export class Basketball extends Ball{
    constructor(){
      super()
    }
    public information():void{
      console.log('篮球是球类运动之一')
    }
    public class():void{
      console.log('篮球使我快乐')
    }
    public time():void{
      console.log('我打篮球6年了')
    }
}