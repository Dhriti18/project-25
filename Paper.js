class Paper extends BaseClass{
    constructor(x,y,width,height,options){
       var options={
        isStatic:false,
}
    super(x,y,width,height);
    this.image=loadImage("paper.png");
    
    
    }
    display(){
         /*var pos=this.body.position;
         pos.x=mouseX;
         pos.y=mouseY;*/
         image(this.image,100,440,this.width,this.height);
push ();
       imageMode (CENTER);
     translate (100,400);
         super.display();
         pop (); 
     }
     
}