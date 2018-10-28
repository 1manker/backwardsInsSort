//Lucas Manker
//9/4/18
//Cosc 3020
//Lab 1


//Original sort
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
	var val = arr[i];
	var j;
	for(j=i; j > 0 && arr[j-1] > val; j--){
	    arr[j] = arr[j-1];
	}
	arr[j] = val;
    }
}

//Puts all elements of array into string and prints to console
function print(arr){
    var printout = "";
    arr.forEach(function(element){
	printout += element;
	printout += ",";
    });
    printout = printout.slice(0,-1);
    //cutting of last comma
    console.log(printout);
}

//Tests to make sure array is sorted correctly
function equalTest(arr){
    var correct = true;
    for(var i = 0; i < arr.length; i++){
	if (arr[i] > arr[i+1]){
	    correct = false;
	}
	}
	if(correct){
	    console.log("Array was sorted correctly.");
	}
	else{
	    console.log("Array was sorted incorrectly");
	}
}

//reverse sort function---starts from end of array and sorts backwards through it
function reverseSort(arr){
    for(i = (arr.length-1); i >= 0; i--){
	var val = arr[i];
	var j;
	for(j=i; j >= 0 && arr[j+1] < val; j++){
	    arr[j] = arr[j+1];
	}
	arr[j] = val;
    }
}

//creates a random array to test with
function randomArray(){
    var arr = new Array;
    for(i = 0; i < 30; i++){
	arr[i] = Math.floor((Math.random() * 100) + 1);
    }
    return arr;
}

//create a random array, sorts it, prints it, tests to see if it was sorted correctly
var testArr = randomArray();
var testArrOne = testArr;
insertionSort(testArr);
print(testArr);
equalTest(testArr);

reverseSort(testArrOne);
print(testArrOne);
equalTest(testArrOne);







