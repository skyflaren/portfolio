// // let slider = document.getElementById("slider");
// let topicsel = document.getElementById("topicsel");
// // let sw = 8;

// topicsel.addEventListener("mouseenter",function (evt) {
//      slider.style.display="block";
//      slider.style.left = evt.clientX - (sw/2) + "px";
//      slider.style.right = "auto";
//  });

// topicsel.addEventListener("mouseleave",function () {
//      slider.style.display="none";
//  });

let para1 = document.getElementById("topic-para1"), para2 = document.getElementById("topic-para2"), para3 = document.getElementById("topic-para3"), para4 = document.getElementById("topic-para4"), para5 = document.getElementById("topic-para5"), para6 = document.getElementById("topic-para6");

let code1 = document.getElementById("code1"), code2 = document.getElementById("code2"), code3 = document.getElementById("code3"), code4 = document.getElementById("code4"), code5 = document.getElementById("code5"), code6 = document.getElementById("code6");

let codep1 = document.getElementById("codep1"), codep2 = document.getElementById("codep2"), codep3 = document.getElementById("codep3"), codep4 = document.getElementById("codep4"), codep5 = document.getElementById("codep5"), codep6 = document.getElementById("codep6");

let name = document.getElementById("topic-name");

for (let topic of document.getElementsByClassName("topic-item")){
    topic.addEventListener('click', function(){
        for(let ttopic of document.getElementsByClassName("topic-item")){
            ttopic.style.fontWeight = "400";
        }

        if(this.innerHTML == "OOP"){
            this.style.fontWeight = "700";
            base();
            oop();
        }
        // else if(this.innerHTML == "Recursion"){
        //     this.style.fontWeight = "700";
        //     base();
        //     rec();
        // }
        else if(this.innerHTML == "Searching &amp; Sorting"){
            this.style.fontWeight = "700";
            base();
            searchSort();
        }
        else if(this.innerHTML == "Arrays &amp; Arraylists"){
            this.style.fontWeight = "700";
            base();
            arrLists();
        }
    })

    // topic.addEventListener("mouseenter", function(){
    //     this.style.backgroundColor = "#cfcbcb";
    // })

    // topic.addEventListener("mouseleave", function(){
    //     this.style.backgroundColor = "inherit";
    // })
}

function base(){
    for(let topic of document.getElementsByClassName("top-line")){
        topic.style.display="none";
    }
}

function oop(){
    name.innerHTML = "Object Oriented Programming (OOP)";
    para1.innerHTML = 'OOP is a style of programming that revolves around the concept of objects. Different class files are made, each of which is a blueprint/template for creating objects. These objects are then used in tandem to interact with each other. Every object can store data, and then perform actions using the data it stores. \n\nFor this example, let’s say we want to increase the temperature in a house, where every “thing” is a java object instantiated by a Java class. \n\nFirst, we must understand that objects have properties and methods. A property would be a variable that it stores (eg. color, name, age), while a method would be an action it does with the properties (eg. output the name, add one to the age). \n\nJava classes are like a set of instructions on how to create a Java object. A common example would be making an instance (object) of a String. When you add the code “String str = new String ("Hello, world!");”, it uses the preexisting “String” class to create the instance of the class, labelled “str”. We can later then call “str.toLowerCase()” in order to use the preexisting String method “toLowerCase()”, which performs an action (making all letters lowercase) on our property (the text “Hello, world”).\n\nAll of our properties are generally stored globally in the class (outside of any method, inside one pair of curly braces). They normally consist of three parts, the access keyword private, the data type, and the name of the variable. Optionally you may add the keyword final, which only allows the variable to be read/accessed, and not changed; makes the variable a constant. Another keyword you could add would be static, where the access would normally change from private to public. This makes a variable no longer tied to an instance of a class, (eg. the instance of String labelled str), but rather the class itself (the class of String). This means, you do not need to create an object of the class in order to access it (to access it, use Classname.variableName, eg. if there was a “public static double ROOM_TEMP = 21.0” inside the class Thermometer, you would type “Thermometer.ROOM_TEMP” to get the value of 21.0).\n\nAccessor and mutator methods are another staple of OOP. Essentially, these methods allow you to obtain and change the properties of a class instance, respectively. These values generally are tied to the instance of the class, (eg. str), rather than the class itself (eg. ROOM_TEMP). A standard for naming accessor methods would be “get” + nameOfVariable, so for our temperature class where we wish to get the location returned, we would use “getLocation()”. Accessor methods generally are public, and have a return type that matches the datatype of the variable being returned, [eg. public String getLocation()]. Mutator methods follow a similar convention, but with the prefix “set” rather than “get”. They typically are also public, but with a void return type. Instead, they normally accept a parameter of the same datatype as to be changed, [eg. public void setLocation(String newLocation)].\n\nConstructors are the methods that run right after an instance of the class is made. These methods are used to set up the properties for the first time, (eg. setting the initial location of a thermometer, setting the owner of a pet). They typically have the keyword “public” followed by the name of the class, and then other parameters it accepts (eg. public Thermometer(String loc, double temp). There could be overloads of the constructor, to allow for more specific instances of the base class.\n\nAn optional addition would be a toString() method. By nature, a toString() method will be called when our class instance is used in the context of a String/primitive data type [eg. Thermometer tm = new Thermometer; System.out.println(tm); ]. Typically, our method header would look like “public String toString()”, where we return a String representing this instance of the class, (eg. return “This thermometer is located at “ + location + “, where the temperature reads “ + temperature”).\n\nRecapping off the general anatomy of a class, we have the class header, which normally contains the keyword “class”, followed by the name of the class (eg. class Thermometer). We next have two curly braces to set the scope, and then the declaration of our PIVs. After this, we will have our constructor, and potential overloaded constructors, which set up our class instance and run right after it’s made. Following the constructor(s), we could have our accessor and mutator methods which return and change our properties respectively. Finally we could have a toString method, which will be automatically called if our class instance is converted into the context of a string. Near the end, we would have any other case-by-case methods specific to the use case, (eg. replaceBatteries(), changeLanguage(), etc. for our Thermometer class).\n\nGoing back to our example, let us create our “Thermometer” class. Inside of its constructor, we could have it accept two variables, a String loc, and an double temp. Declared as private instance variables, we could have also String location and double temperature, and then assign the value of loc to location, and temp to temperature. We could next create “getTemperature()” and “setTemperature()” methods, the first returning an double, but not requiring any parameters, and the second not returning anything, but requiring an double temp parameter (representing the temperature to set the Thermometer object to). \n\To achieve our goal, we can create our instance of the Thermometer class, and then call the instance method getTemperature, adding 5 and then passing that value to setTemperature.';

    code1.innerHTML = 'public class Thermometer{\n\tprivate String location;\n\tprivate double temperature;\n\tpublic Thermometer(String loc, double temp){\n\t\tthis.location = location;	//Use the keyword “this” to distinguish between variables of the same name, where this indicates the current class’ properties/methods\n\t\ttemperature = temp;\n\t}\n\n\tpublic void getTemperature(){ return temperature; }\n\tpublic double setTemperature(double temp){ temperature = temp; }\n\n\tpublic static void main(String [] args){\n\t\tTemperature tp = new Temperature(“Hallway”, “21.0”);\n\t\ttp.setTemperature(tp.getTemperature()+5);\n\t}\n}';

    para2.innerHTML = 'Speedround:\n\nInheritance: a subclass (extends the parent) obtains a property or action of a parent\n\nAbstract: a keyword that allows you to define a method header, without writing out the actual code, and leaving that to subclasses to flush out (if there is one abstract method, the entire class is an abstract class, and the keyword abstract should be added to the class header)\n\nInterfaces: A class consisting only of abstract methods, where all methods are to be implemented in subclasses\n\nPolymorphism: Allows a parent class to take on the value of a child class, where if a parent class is assigned the value of a child class and an overridden method in the child class is called, even though the original datatype was the parent class, the child class’ method will be used.\n\nOverriding methods: Allows for the same method to be in a child and parent class, where the most specific/recently overridden method will be used, or where the same method has different parameters in the method header.';

    para1.style.display = "inherit";
    para2.style.display = "inherit";

    codep1.style.display = "inherit";
    code1.style.display = "inherit";
}


function searchSort(){
    name.innerHTML = "Searching &amp; Sorting";
    para1.innerHTML = "Since computer science often deals with vast amounts of data, it’s beneficial to be able to sort data efficiently, in order to later find it quicker. The simplest way would be to iterate over every pair of adjacent elements in the list, placing the larger one behind the smaller one. This algorithm, known as Bubble sort, “bubbles” the largest element each time to the back, eventually sorting all elements in ascending order. It has a time complexity of O(N2), meaning given a list of 20 elements, at worst, it will take 400 operations.\n\nThere are many sorting algorithms that exist, a more efficient one being Merge sort, which sorts in O(NlogN). The concept of merge sort is that after an array is divided into its individual elements, every partition is sorted. When merging two partitions together, it will repeatedly take the smaller of the two, to end up with a merged partition in sorted order. It will then repeat the process with adjacent partitions until the entire array has been merged back again.\n\nFor example, with the list {89, 8, 5, 42, 1, 38, 12, 57}, we recursively break the list down, until it consists of {89}, {8}, {5}, {42}, {1}, {38}, {12}, {57}. We start off the merging by comparing the smallest element in {89} with the smallest element in {8}, and insert that into our merged list. 8 < 89, so we put 8 into our merged list, resulting in left:{89}, right{}, combined{8}. Since our right list is empty, we can put the rest of our left list into our combined list. Once we do this for every other adjacent pair of elements, we end up with {8, 89}, {5, 42}, {1, 38}, {12, 57}. \n\nWe can then go through the process of merging {8, 89} and {5, 42}, where we first add 5 to the combined list, resulting in left:{8, 89}, right:{42}, and combined:{5}. We compare 8 with 42, where we insert 8 into our combined list, and then compare 89 and 42, to add 42 to the combined list. Left with left:{89}, right:{}, and combined:{5, 8, 42}, we concatenate the rest of the left list to our combined list, as the right list is empty. \n\nImagine now we are looking through tax file returns. For the purposes of our example, our files will contain the list { Cohen, Smith, Martin, Wang, Zimmerman }, where we wish to find the specific file of “Smith”. Doing it one at a time in order, we would have a Big O notation time complexity of O(N). This may not be a problem for our case of 5 files, but when dealing with large databases, things will really slow down. Instead of just looping through our data set, we can use the search algorithm, binary search, which has a time complexity of o(logN). Just comparing the time complexities for context, at one million files (1 000 000), looping through will take 1 000 000 checks, where binary search takes just under 20 [log2(1 000 000)].\n\nThe idea of binary search is to constantly maintain a range where our searched value could be. We then continuously halve the list, until we are left with one value. Given a sorted list of data, binary search dictates that we create three markers: a left, or low marker, a right, or high marker, and a middle marker, where all markers are numerical indices. We start with our low marker set to the first, or smallest, value in our list, our high marker set to the last, or largest, value in our list, and calculate the middle marker with (lo+hi)/2. \n\nWhile our low value is less than our high value, we then repeatedly compare the value at the middle index with the value we are looking for. If the middle value is greater than the value we are looking for, we know intuitively that our searched value will not have an index greater than the middle index. We then set our high marker to our previous middle marker, and repeat. If the middle value is lower than the value we are looking for, we know inversely that our searched value will not have an index smaller than the middle index. When our searched value is our middle value, then we can keep track of the index and break from the loop. If our loop ends without us finding the value, we know the value was not in the list. ";

    code1.innerHTML = 'import java.util.List;\nimport java.util.ArrayList;\n\npublic class Main {\n\n\tpublic static List < Integer > arr;\n\n\tpublic static List< Integer > mergeSort(List < Integer > arr){\n\t\tint n = arr.size();\n\t\tif(n == 1) return arr;\n\t\treturn merge( mergeSort(arr.subList(0, n/2)),  mergeSort(arr.subList(n/2, n)) );\n\t}\n\n\tpublic static List< Integer > merge(List< Integer > a, List< Integer > b){\n\t\tList< Integer > ret = new ArrayList< Integer >();\n\t\tint indA = 0, indB = 0; \n\n\t\twhile(indA < a.size() || indB < b.size()){\n\t\t\tif(indA >= a.size()) ret.add(b.get(indB++));\n\t\t\telse if(indB >= b.size()) ret.add(a.get(indA++));\n\t\t\telse{\n\t\t\t\tret.add(Math.min(a.get(indA), b.get(indB)));\n\t\t\t\tif (a.get(indA) < b.get(indB)) indA++;\n\t\t\t\telse indB++;\n\t\t\t}\n\t\t}\n\t\treturn ret;\n\t}\n\n\n\tpublic static void main(String[] args) {\n\t\tarr = new ArrayList< Integer >(20);\n\t\tfor(int i = 0; i < 20; i++) arr.add((int) (Math.random()*21));\n\n\t\tfor(int v: arr) System.out.print(v + " "); System.out.println();\n\t\tarr = mergeSort(arr);\n\t\tfor(int v: arr) System.out.print(v + " ");\n\t}\n}';

    para1.style.display = "inherit";

    code1.style.display = "inherit";
    codep1.style.display = "inherit";
}

// function rec(){
//     name.innerHTML = "Recursion";
//     para1.innerHTML = "To be added in the very near future";

//     para2.innerHTML = "";

//     para3.innerHTML = "";

//     para4.innerHTML = "";

//     para5.innerHTML = "";

//     para6.innerHTML = "";

//     para7.innerHTML = "";

//     para8.innerHTML = "";

//     para9.innerHTML = "";

//     para10.innerHTML = "";
    
//     para11.innerHTML = "";
    
//     para12.innerHTML = "";

//     para1.style.display = "inherit";
//     para2.style.display = "inherit";
//     para3.style.display = "inherit";
//     para4.style.display = "inherit";
//     para5.style.display = "inherit";
//     para6.style.display = "inherit";
//     para7.style.display = "inherit";
//     para8.style.display = "inherit";
//     para9.style.display = "inherit";
//     para10.style.display = "inherit";
//     para11.style.display = "inherit";
//     para12.style.display = "inherit";

//     para2.style.display = "none";
//     para3.style.display = "none";
//     para4.style.display = "none";
//     para5.style.display = "none";
//     para6.style.display = "none";
//     para7.style.display = "none";
//     para8.style.display = "none";
//     para9.style.display = "none";
//     para10.style.display = "none";
//     para11.style.display = "none";
//     para12.style.display = "none";

//     code1.style.display = "none";
//     codep1.style.display = "none";
// }

function arrLists(){
    name.innerHTML = "Arrays &amp; Arraylists";
    para1.innerHTML = "An array is like a numbered group of values that all are the same datatype (with exceptions), which can be treated like a single variable. Arrays are a very useful part of Java, allowing you to group up items, and then iterate through them using indexes, significantly reducing the code needed. \n\nIn order to declare an array, you must provide it with the data type, followed by the name. After either of those two, you must put the amount of pairs of square brackets, symbolizing the number of dimensions. To initialize an array, you can either use the keyword “new”, followed by the data type, followed by the amount of pairs of square brackets used for the declaration, where each square bracket pair has an integral number for the amount of indices in that dimension. Another way to initialize an array is to directly use curly braces as dimensions, where you comma separate values. You can also use classes as a data type, making arrays flexible. \n\nHowever, an important thing to note about arrays, is that their size is immutable, meaning you cannot change it after it has been initialized. In order to access an element at a given index, you can use “variablename[index]”, where variablename is the name of the array, and index is the index number. In order to check the length of an array, you can use the property variablename.length. Note that since the length cannot change, it is considered a property, and not a method.";

    code1.innerHTML = "int [] arrA = new int[5];\ndouble arrB [][] = { {0.5, 0.3, 0.2}, {1.2, 1.1, 1.6}, {2.4, 2.4, 2.6} };\narrA[3] = 45;\narrA[5] = 0;	//Will cause an out of bounds error, as although arrA’s size is 5, the indexing starts from 0 (indices 0, 1, 2, 3, 4)\nSystem.out.println(arrA.length);	//Will print 5\n\nfor(int i = 0; i < arrA.length; i++) System.out.println(arrA[i]);\n//One big use case of an array is to group items to be able to iterate through them, saving code. Note that the array will be filled with the default value for the datatype, eg. 0 for integers, false for booleans, null for objects\n"
    
    para2.innerHTML = 'Arraylists are similar to arrays in theory, where you are able to access elements based on indices. However, they are a bit more flexible than arrays, where their size is not limited, and their ordering is fluid. For example, if we wished to insert an element at the beginning of an array, while shifting the other elements by 1 index, we would have to write a for loop, and manually shift them (if the array size is large enough). Using an arraylist, we can call the add() function, which by default, given only one object to insert, will add the element to the end of the arraylist. However, given a second integer value, add() will insert the given element at that index, and shift all elements originally at that index and beyond, by one. \n\nIn order to retrieve a value from an arraylist, you can call get() function, which takes in one integer parameter as the index. \n\nIn order to check if an arraylist is empty, you can either call size(), which returns the amount of elements in the arraylist, or isEmpty(), which returns a boolean true for empty, false for not empty. You can also use indexOf to return the index of the first instance of an element, similar to in a String. When using ArrayLists, remember to import them, using "import java.util.ArrayList;"';

    code2.innerHTML = 'import java.util.ArrayList;\n...\nArrayList < Integer > arrList = new ArrayList < Integer >();\nArrayList < Integer > arrList2 = new ArrayList < >();   //You can also declare an arraylist like this\n\nfor(int i = 0; i < 20; i++) arrList.add((int) (Math.random()*21));  //Adds 20 random numbers into the arraylist\narrList.remove(2);  //Removes the 2nd element of the arraylist\narrList.add(45, 0); //Adds 45 to index 0, shifting all other elements over by one\narrList.add(45);    //Adds 45 to end of the list\nSystem.out.println(arrList.size());'

    para1.style.display = "inherit";
    para2.style.display = "inherit";

    code1.style.display = "inherit";
    codep1.style.display = "inherit";
    code2.style.display = "inherit";
    codep2.style.display = "inherit";
}