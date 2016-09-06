



//Cria as listas 
function CriaListas(x){
	var i;
	var list = [];
	for(i = 0; i < x; i++){
		var num = Math.random().toFixed(4);
		num *= 10000;
		num = Math.floor(num);
		list[i] = num;
	};
	return list;
};


//Ordenação
function BubbleSort(callback){
	console.log("\n\n=============================================== BUBBLESORT ===============================================\n\n")
	//Variáveis do Bubble
	var aux;
		
	var i;
	var j;

	
	var time;

	//Começa a lista
	var list = callback(10);
	var length = Object.keys(list).length;
	console.log(list);

	//Inicia o Cronômetro
	var time = new Date();
	time = "START: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds() + "\n \n ";
	console.log(time);

	//A ordenação começa aqui
	//========================
	for(i = 0; i < length; i++){
		for(j = 0; j < length; j++){
			if(list[j] > list[j+1]){

				//console.log(list[j] +" "+ list[j+1] +" "+ aux );
				aux = list[j];
				list[j] = list[j+1];
				list[j+1] = aux;
			}
		}
	}
	
	//A ordenação termina aqui
	//========================

	//Para o Cronômetro
	time = new Date();
	time = " \n \n END: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds();
	console.log(time);

	console.log(list);
	
};




function QuickSort(callback){
	console.log("\n\n=============================================== QUICKSORT ===============================================\n\n")
	//Variáveis do Bubble
	
	
	var time;

	//Começa a lista
	var list = callback(1000);
	var length = Object.keys(list).length;
	var pivot = Math.floor(Object.keys(list).length/2);
	var i = 0; //Ponteiro lado esquerdo
	var j = Object.keys(list).length; //Ponteiro lado Direito
	

	

	/*console.log(list);*/
	//console.log(Ordena(list));
	//Inicia o Cronômetro
	time = new Date();
	time = "START: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds() + "\n \n ";
	console.log(time);


	//Troca valores
	function troca(list,i,j){
		var aux = list[i];
		list[i] = list[j];
		list[j] = aux;
	}


	//A Partição começa aqui
	//========================
	function particionar(items, esq, dir) {

	    var pivot   = items[Math.floor((dir + esq) / 2)],
	        i       = esq,
	        j       = dir;


	    while (i <= j) {

	        while (items[i] < pivot) {
	            i++;
	        }

	        while (items[j] > pivot) {
	            j--;
	        }

	        if (i <= j) {
	            troca(items, i, j);
	            i++;
	            j--;
	        }
	    }

	    return i;
	}

	function quickSort(items, esq, dir) {

	    var index;

	    if (items.length > 1) {

	        esq = typeof esq != "number" ? 0 : esq;
	        dir = typeof dir != "number" ? items.length - 1 : dir;

	        index = particionar(items, esq, dir);

	        if (esq < index - 1) {
	            quickSort(items, esq, index - 1);
	        }

	        if (index < dir) {
	            quickSort(items, index, dir);
	        }

	    }

	    return items;
	}

	// Chamada
	quickSort(list);
	
	
	//A ordenação termina aqui
	//========================

	//Para o Cronômetro
	time = new Date();
	time = " \n \n END: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds();
	console.log(time);

	/*console.log(list);*/
	
};




BubbleSort(CriaListas);
QuickSort(CriaListas);