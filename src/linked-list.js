const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
      }
  
      append(data) {
        let node = new Node(data);
        if(!this._head) {
          this._head = node;
          this._tail = node;
        }
        else {
          node.prev = this._tail;
          this._tail.next = node;
          this._tail = node;  
        }
        this.length++;
        return this;
      }
       
      head() {
        return this._head.data;
      }
  
      tail() {
        return this._tail.data;
      }
  
      at(index) {
        let actual = this._head;
        for(var i = 0; i<=index; i++){
          if(i == index){
            return actual.data;
          }
          actual = actual.next;
        }
      }
  
      insertAt(index, data) {
        let actual = this._head;
        let node = new Node(data);
        if(index == 0){
           this._head.prev = node; 
           node.next = this._head;
           this._head = node; }
        else {
          actual = actual.next;
          for(var i = 1; i<=index; i++){
            if(i == index){
              node.prev = actual.prev;
              actual.prev.next = node;
              node.next = actual;
              actual.prev = node;
              }
            actual = actual.next;
            } 
        }  
        this.length++;
        return this;
        }
      
  
      isEmpty() {
        if(this._head == null){ return true;}
        else return false;
      }
  
      clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
      }
  
      deleteAt(index) {
        let actual = this._head;
        if(index == 0){
           this._head = this._head.next; 
           this._head.prev = null;
           this.length--; }
        else {
          actual = actual.next;
          for(var i = 1; i<=index; i++){
            if(actual == this._tail){
              this._tail = this._tail.prev
              this._tail.next = null;
              this.length--;
            }
            else if(i == index){
              actual.prev.next = actual.next;
              actual.next.prev = actual.prev;
              this.length--;
              }
            actual = actual.next;
            } 
        }  
        return this; 
        
      }
  
      reverse() {
        let actual = this._head;
        let a = [];
        for(let i = 0 ; i<this.length; i++){
            a[i] = actual.data;
            actual = actual.next;
        }
        actual = this._head;
        for(let i = this.length-1 ; i>=0; i--){
            actual.data = a[i];
            actual = actual.next;
        }
        return this;
      }
  
      indexOf(data) {
        let actual = this._head;
        let counter = 0;
        do  {
            if(!actual) {
                return -1;
            } else if(data === actual.data) {
                return counter;
            } 
            actual = actual.next;
            counter++;
        } while(true);
      }
  }
  
  
 const list1 = new LinkedList();
 // list1.append(1);
 // list1.append(2);
 // list1.append(3);
 // list1.append(4);
  //list1.insertAt(2,0);
  //list1.deleteAt(4);
 console.log(list1.append(4).reverse().deleteAt(0).clear().insertAt(0, 3));
 // for (let j = 0; j<list1.length; j++){console.log(list1.at(j));};
 // list1.reverse();
 // for (let j = 0; j<list1.length; j++){console.log(list1.at(j));};
  //console.log("index of 2 is "+list1.indexOf(6));
  
  //console.log("list is empty ?  "+list1.isEmpty());
  


module.exports = LinkedList;
