var tree = ["green", true, 40, "coniferous pine"]
function SLNode(data){
  this.data = data
  this.next = null
}
// function hashEntry(key, value){
//   this.key = key
//   this.value = value
// }
var object = {"name":"Minh"}
object["name"]
Object.keys(object)

function Hash(size){
    var data = []
    var size = size
    var start_size = size
    this.addKey = function (key, value) { 
      var hashCode = hash(key); 
      //console.log(hashCode)
      var idx = mod(hashCode, size); 
      //console.log(idx); 
      if (data[idx]) { 
        var curr = data[idx] 
        while (curr) { 
          if (curr.data[0] === key) { 
            curr.data[1] = value 
            return 
          } 
          if (!curr.next) var temp = curr;
          curr = curr.next 
        } 
        var newNode = new SLNode([key, value]) 
        temp.next = newNode; 
      } else { 
            data[idx] = new SLNode([key, value]) 
      } 
    }
    // this.addKey = function (key, value){
    //     var hashCode = hash(key)
    //     var idx = mod(hashCode, size)
    //     // console.log(idx)
    //     if (data[idx]){
    //       var curr = data[idx]
    //       while(curr){
    //         if(curr.data[0] == key){
    //           curr.data[1] = value
    //           return 
    //         }
    //         curr = curr.next
    //       }
    //       var newNode = new SLNode([key, value])
    //       newNode.next = data[idx]
    //       data[idx] = newNode
    //     }else{
    //       data[idx] = new SLNode([key, value])          
    //     }
    // }
    function hash(key) {
        var hashCode= 0;
        if (key.length == 0) return hashCode;
        for (i = 0; i < key.length; i++) {
            char= key.charCodeAt(i);
            hashCode = ((hashCode<<5)-hashCode)+char;
            hashCode &= hashCode; //Convert-->32b int
        }
        return hashCode;
    }
    function mod(input, div) { return (input % div + div) % div; }
    this.getKey = function(key){
        var hashCode = hash(key)
        var idx = mod(hashCode, size)
        // console.log(idx)
        var curr = data[idx]
        while(curr){
          if(curr.data[0] == key){
            return curr.data[1]
          }
          curr = curr.next
        }
        return undefined
    }
    this.keys = function(){
      var items = data.filter((x) => { return x != undefined})
      var keys = []
      for(var i = 0; i < items.length; i++){
        var curr = items[i]
        while(curr){
          keys.push(curr.data[0])
          curr = curr.next
        }
      }
      return keys
    }
    this.values = function(){
      var items = data.filter((x) => { return x != undefined})
      var values = []
      for(var i = 0; i < items.length; i++){
        var curr = items[i]
        while(curr){
          values.push(curr.data[1])
          curr = curr.next
        }
      }
      return values
    }
    this.items = function(){
      return data.filter((x) => { return x != undefined})
    }
    this.loadFactor = function(){
      return this.keys().length/size
    }
    this.removeKey = function(key){
      var hashCode = hash(key)
      var idx = mod(hashCode, size)
      if( data[idx].data[0] == key){
        data[idx] = data[idx].next
        return this
      }
      var curr = data[idx]
      while(curr.next){
        if(curr.next.data[0] == key){
          curr.next = curr.next.next
          break
        }
        curr = curr.next
      }
      return this
    }
    this.removeValue = function(value){
      for(var i = 0; i < data.length; i++){
        if( data[i] && data[i].data[1] == value){
          data[i] = data[i].next
          return this
        }
        var curr = data[i]
        while(curr && curr.next){
          if(curr.next.data[1] == value){
            curr.next = curr.next.next
            break
          }
          curr = curr.next
        }
      }
      return this
    }
    this.grow = function(){
      size = size + start_size
      var items = this.items()
      data = []
      for(var i = 0; i < items.length; i++){
        var curr = items[i]
        while(curr){
          this.addKey(curr.data[0], curr.data[1])
          curr = curr.next
        }
      }
    }
    this.showData = function(){
      console.log(data)
    }
    this.selectKeys = function(keyArray){
      //forloop through keyArray
      //delete current data and rehash everything
      //work in place, delete items out of list
    }
}

var treeOne = new Hash(15)
// treeOne.addKey("color", 10)
// treeOne.addKey("name", 15)
// treeOne.addKey("name", 15)
// treeOne.addKey("age", 20)
treeOne.addKey("color", "green")
treeOne.addKey("hasTrunk", true)
treeOne.addKey("numBranches", 40)
treeOne.addKey("type", "Coniferous Pine")
treeOne.addKey("type", "type")
treeOne.addKey("t", "t")
treeOne.addKey("a", "a")
treeOne.addKey("b", "b")
treeOne.addKey("c", "c")
treeOne.addKey("d", "d")
treeOne.addKey("net", "net")
treeOne.addKey("ten", "ten")
treeOne.addKey("f", "f")
treeOne.addKey("g", "g")
treeOne.addKey("h", "h")
treeOne.addKey("i", "i")
treeOne.addKey("j", "j")
treeOne.addKey("j", "k")

// console.log(treeOne.items())
// console.log(treeOne.loadFactor())
treeOne.showData()
console.log("=========================================")
treeOne.grow()
treeOne.showData()
// console.log(treeOne.keys())
// console.log(treeOne.values())
// console.log(treeOne.loadFactor())
// console.log(treeOne.getKey("color"))
// treeOne.removeKey("color")
// console.log(treeOne.getKey("color"))
// console.log(treeOne.getKey("hasTrunk"))
// treeOne.removeValue(true)
// console.log(treeOne.getKey("hasTrunk"))





// console.log(treeOne.getKey("color"))
// console.log(treeOne.getKey("hasTrunk"))
// console.log(treeOne.getKey("numBranches"))
// console.log(treeOne.getKey("type"))
// console.log(treeOne.getKey("t"))
// console.log(treeOne.getKey("a"))
// console.log(treeOne.getKey("b"))
// console.log(treeOne.getKey("c"))
// console.log(treeOne.getKey("d"))
// console.log(treeOne.getKey("net"))
// console.log(treeOne.getKey("ten"))
// console.log(treeOne.getKey("f"))
// console.log(treeOne.getKey("g"))
// console.log(treeOne.getKey("h"))
// console.log(treeOne.getKey("i"))
// console.log(treeOne.getKey("j"))





// treeOne.addKey("type", "Coniferous Pine")
// treeOne.addKey("type", "Coniferous Pine")

// console.log(treeOne.getKey("color"))
// console.log(treeOne.getKey("hasTrunk"))
// console.log(treeOne.getKey("numBranches"))
// console.log(treeOne.getKey("type"))

// console.log(treeOne.items())

var obj = {
  "name":"minh"
}
obj["name"] = "steve"
obj["name"] //minh