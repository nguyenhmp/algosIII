function BSTNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
function BST(){
    this.root = null;
    this.add = function(value){
        let addNode = new BSTNode(value)
        if(!this.root){
            this.root = addNode
            return this;
        }
        let curr = this.root
        while(curr){
            if(value < curr.value){
                if(curr.left){
                    curr = curr.left
                }else{
                    curr.left = addNode
                    return this;
                }
            }else{
                if(curr.right){
                    curr = curr.right
                }else{
                    curr.right = addNode
                    return this;
                }
            }
        }
    }
    this.contains = function(value){
        if(this.isEmpty()){
            return false
        }
        let curr = this.root
        while(curr){
            if(value < curr.value){
                if(curr.left){
                    curr = curr.left
                }else{
                    return false
                }
            }else if(value > curr.value){
                if(curr.right){
                    curr = curr.right
                }else{
                    return false
                }
            }else if(value == curr.value){
                return true
            }
        }
    }
    this.isEmpty = function(){
        return this.root === null
    }
}

var myBST = new BST()
myBST.add(5).add(10).add(4).add(15)
// console.log(myBST.root)
console.log(myBST.contains(15))