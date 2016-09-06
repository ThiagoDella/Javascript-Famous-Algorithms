//Create node
function createNode(nodeArray){
	var node = new Object();
	node.conn = nodeArray;
	return node;
};

//Creating the Graph
function makeGraph (){
	var graphArray = new Array();
	
	graphArray.push(createNode([2,3,4]));
	graphArray.push(createNode([1,3,4]));
	graphArray.push(createNode([1,2]));
	graphArray.push(createNode([1,2,5]));
	graphArray.push(createNode([4]));
	
	return graphArray;
};




//BFS
function BFS (graph){
	var Queue = [];
	var visitados =[false,false,false,false,false] ;
	var pai = [0,0,0,0,0];
	var i = 0;
	for(i ; i < graph.length ; i++){
		Queue.push(graph[i].conn);
		visitados[i] = true;
		while(Queue.length != 0){
			var u = Queue.shift();
			for(v = 0; v < u.length; v++ ){
				if(visitados[u[v]-1] == false || visitados[u[v]-1] == undefined){
					pai[u[v]-1] = i+1;
					visitados[u[v]-1] = true;
					Queue.push(u);
				}
			}
		}

	} 

	console.log(pai);
	console.log(visitados);
};

BFS(makeGraph());