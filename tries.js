function Node(letter){
    this.letter = letter;
    this.isWord = false;
    this.children = {}
    this.hasChildren = function(){
        return Object.keys(this.children).length != 0
    }
    this.childCount = function(){
        return Object.keys(this.children).length
    } 
}

function Trie(){
    this.root = new Node("")

    this.add = function(word){
        _add(word, 0, this.root)
    }
    function _add(word, index, node){
        if(word[index] && !node.children[word[index]]){
            node.children[word[index]] = new Node(word[index])
        }
        if(word.length > index){
            _add(word, index+1, node.children[word[index]])
        }else{
            node.isWord = true
            return this
        }
    }
    this.contains = function(word){
        var index = 0;
        var letter = word[index]
        var curr = this.root.children[letter]
        index++;
        while(curr && index < word.length){
            letter = word[index]
            if(curr.children[letter]){
                curr = curr.children[letter]
                index++
            }else{
                return false
            }
        }
        return (!!curr && curr.isWord)
    }
    //word.length = 4
    //index = 4
    //letter = s
    //removeChildren = s
    this.remove = function(word){
        var index = 0;
        var letter = word[index]
        var curr = this.root.children[letter]
        var removePoint = this.root
        var removeChildren = letter
        index++
        while(curr && index < word.length){
            letter = word[index]
            if(curr.children[letter]){
                if(curr.childCount() > 1 || curr.isWord){
                    removePoint = curr
                    removeChildren = letter
                }
                curr = curr.children[letter]
                index++
            }else if(index != word.length){
                return false
            }
        }
        if(curr.hasChildren()){
            curr.isWord = false
        }else{
            delete removePoint.children[removeChildren]
        }
        return true
    }
    this.next = function(word){
        var index = 0;
        var letter = word[index]
        var curr = this.root.children[letter]
        index++;
        if (!curr){
            var data = [] //r, t
            for (var key in this.root.children){
                data.push({node:this.root.children[key], currString:""})
            }
            return _next(data)
        }
        while(curr && index < word.length){
            console.log(index)
            letter = word[index]
            if(curr.children[letter]){
                curr = curr.children[letter]
                index++
            }else{
                break
            }
        }
        if(curr.isWord){
            return word
        }
        var data = [] //r, t
        for (var key in curr.children){
            data.push({node:curr.children[key], currString:word.substring(0, index)})
        }
        return _next(data)
        
    }
    function _next(data){
        console.log(data)
        var currData = data.shift()
        var node = currData.node
        var currString = currData.currString
        if(node.isWord){
            return currString + node.letter
        }else{
            for (var key in node.children){
                data.push({node:node.children[key], currString:currString+node.letter})
            }
            return _next(data)
        }
    }
}

var myTrie = new Trie()
myTrie.add("bats")
myTrie.add("bars")
myTrie.add("bar")
// console.log(myTrie.contains("bars")) //return true
// console.log(myTrie.remove("bars"))
// console.log(myTrie.contains("bars"))
console.log(myTrie.next("apple"))