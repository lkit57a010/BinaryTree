function Tree(){
	this.root = null;
}
Tree.prototype.treverse = function(){
    this.root.visit();    
}
Tree.prototype.search = function(val){
    this.root.search(val);
}
Tree.prototype.addValue = function(val){
	var n = new Node(val);
	if (this.root === null){
		this.root = n;
	} else {
		this.root.addNode(n);
	}
}