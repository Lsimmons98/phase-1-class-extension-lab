class Polygon {
  constructor (array){
    this.sides = array
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total, side) => total + side, 0)
  }
}

class Triangle extends Polygon{
  get isValid(){
    return (this.sides[0] + this.sides[1] >= this.sides[2] && this.sides[0] + this.sides[2] >= this.sides[1] && this.sides[1] + this.sides[2] >= this.sides[0])
  }
}

class Square extends Polygon{
  get isValid(){
    let validity = true
    const value = this.sides[0]
    this.sides.forEach(side => {
      if (side !== value){
        validity = false
      }
    })
    return validity
  }
  get area(){
    return this.sides[0] * this.sides[1]
  }
}
