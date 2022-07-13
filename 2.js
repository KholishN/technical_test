let dumbways = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m"," " ," "]

const sortDumbways = () => {
    [dumbways[0], dumbways[1]] = [dumbways[1], dumbways[0]],
    [dumbways[4], dumbways[3]] = [dumbways[3], dumbways[4]]






    for (let i = 8; i < dumbways.length; i++) {
        let lowest = i
        for (let j = i  ; j < dumbways.length; j++) {

          if (dumbways[j] < dumbways[i]) {
            lowest = j

          }
        }


        if (lowest !== i) {
          [dumbways[14], dumbways[15]] = [dumbways[15], dumbways[14]],
          [dumbways[i], dumbways[lowest]] = [dumbways[lowest], dumbways[i]]


        }else{
          
          [dumbways[i], dumbways[13]] = [dumbways[13], dumbways[i]],
          [dumbways[i], dumbways[14]] = [dumbways[14], dumbways[i]],
          [dumbways[i], dumbways[16]] = [dumbways[16], dumbways[i]]


        }
        
    }
    console.log(dumbways.join(""))
console.log(dumbways)

  }
  

sortDumbways()