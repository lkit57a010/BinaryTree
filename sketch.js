var tree;
function setup() {
	noCanvas();
	tree = new Tree();
	// tree.addValue(5);
	// tree.addValue(3);
	// tree.addValue(7);
	// tree.addValue(6);
	for(var i=0;i<10;i++){
		tree.addValue(Math.floor(Math.random()*100));
	}
	console.log(tree);
	tree.treverse();
	
}

function draw() {

}






























