class Circle {
  constructor(radius){
    this.radius = radius
  }
  
  get diameter() {
    return this.radius*2
  }
  
  set diameter(diameter) {
    this.radius = diameter / 2
  }
  
  get circumference() {
    return this.radius*2*Math.PI
  }
  
  get area() {
    return ((this.radius)**2)*Math.PI
  }
  
  set diameter(6){
    
  }
}