function DoubleListNode(value){
    this.value = value
    this.next = null
    this.prev = null
}

function DLL(){
    this.head = null
    this.tail = null

    this.append = function(value){
        var newNode = new DoubleListNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }
    this.prepend = function(value){
        var newNode = new DoubleListNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }
    this.remove = function(value){
        if(this.head.value == value){
            this.head = this.head.next
            this.head.prev = null
            if( this.tail.value == value){
                this.tail = this.tail.next                
            }
            return this
        }
        if(this.tail.value == value){
            this.tail = this.tail.prev
            this.tail.next = null
            return this
        }
        var curr = this.head
        while(curr && curr.value != value){
            curr = curr.next
        }
        if(curr.value == value){
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
        return this
    }
}

var list = new DLL()
list.append(10)
list.append(5)
list.prepend(25)
list.remove(5)
console.log(list)
