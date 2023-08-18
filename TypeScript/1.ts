interface a{
 age:number,
 address:string
}
type t=keyof a;
let c:t="address";
let d={age:123}
function en(n: typeof d.age){

}
en(123)
