function BSTNode(value){
    this.value = value
    this.left = null
    this.right = null
    this.add = function(node){
        if (node.value >= this.value){
            if (this.right){
                this.right.add(node);
            }else{
                this.right = node
            }
        }else{
            if (this.left){
                this.left.add(node);
            }else{
                this.left = node
            }
        }
    }
}
function BST(){
    this.root = null
    this.add = function(value){
        var newNode = new BSTNode(value);
        if (!this.root){
            this.root = newNode
        }else{
            // left side is less than
            // right side is greater than or equal
            // var current = this.root;
            // =========node handles logic==========
            this.root.add(newNode)
            // =========traversing through tree=========
            // while (current){
            //     if(newNode.value >= current.value){
            //         if (current.right){
            //             current = current.right;
            //         }else{
            //             current.right = newNode;
            //             break;
            //         }
            //     }else{
            //         if (current.left){
            //             current = current.left;
            //         }else{
            //             current.left = newNode;
            //             break;
            //         }
            //     }
            // }
        }
        return this
    }
    // return true or false if tree is empty
    this.isEmpty = function(){
        return this.root === null
    }
    this.contains = function(value){
        if(this.isEmpty()) return false;
        let current = this.root;
        while(current) {
            if(value === current.value) return true;
            current = value < current.value ?current.left : current.right;
        }
        return false;
    }
    this.height = function(node){
        if(!this.root) return 0
        return heightHelper(this.root)
    }
    function heightHelper(node){
        if(!node){
            return 0
        }else if(!node.left && !node.right){
            return 1
        }else{
            var left = heightHelper(node.left)
            var right = heightHelper(node.right)
            return 1 + Math.max(left, right)
        }
    }
    this.best2Arr = function(){
        var ouput = []
    }
    function bst2ArrHelper(node, output){
        if(!node.left){
            output.push(node.value)
        }
        best2Arry(node.right)
    }
    // lowest first or left side first, then node, then right
    this.traverseInOrder = function(node){
        if(!node){
            node = this.root
        }
        if(node.left)this.traverseInOrder(node.left)
        console.log(node.value)
        if(node.right)this.traverseInOrder(node.right)        
    }
    this.traversePostOrder = function(node){
        if(!node){
            node = this.root
        }
        if(node.left)this.traverseInOrder(node.left)
        console.log(node.value)
        if(node.right)this.traverseInOrder(node.right)        
    }
}

var myNode = new BSTNode(6)
var myBST = new BST()
console.log(myBST.isEmpty())
myBST.add(17).add(10).add(25).add(15).add(16)
console.log(myBST.height())
// console.log(myBST.isEmpty())
// myBST = [null, 17, 10, 25, , 15, , , , , , 16]
myBST.traverseInOrder()
