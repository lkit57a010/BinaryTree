var tree;
function setup() {
	createCanvas(600, 400);
	background(51);
	tree = new Tree();
	for(var i=0;i<10;i++){
		tree.addValue(Math.floor(Math.random()*100));
	}
	console.log(tree);
	tree.treverse();
	
}
function draw() {

}






























