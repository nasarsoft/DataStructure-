class ListNode{
    public data : number;
    public next :ListNode | null;

    constructor(data:number){
        this.data =data;
        this.next =null;
    }



}



class LinkedList{
    
    public head:ListNode | null;

    constructor(head:ListNode){
        this.head=head;
    }

    public print():void{
        let temp = this.head;
        while(temp!==null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}


let nodeOne =new ListNode(5);
let nodeTwo=new ListNode(25);
let nodeThree = new ListNode(30);


nodeOne.next=nodeTwo;
nodeTwo.next=nodeThree;

let linkedList =new LinkedList(nodeOne);

linkedList.print();