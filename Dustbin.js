class Dustbin extends BaseClass{
constructor(x,y,width,height){
super(x,y,width,height);

this.image=loadImage("dustbingreen.png");



}
display(){
   // var pos=this.body.position;

    image(this.image,1000,1000,this.width,this.height);

    super.display();
}







}