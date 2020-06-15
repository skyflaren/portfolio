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

let para1 = document.getElementById("topic-para1"), para2 = document.getElementById("topic-para2"), para3 = document.getElementById("topic-para3"), para4 = document.getElementById("topic-para4"), para5 = document.getElementById("topic-para5"), para6 = document.getElementById("topic-para6"), para7 = document.getElementById("topic-para7"), para8 = document.getElementById("topic-para8"), para9 = document.getElementById("topic-para9"), para10 = document.getElementById("topic-para10"), para11 = document.getElementById("topic-para11"), para12 = document.getElementById("topic-para12");
let name = document.getElementById("topic-name");

for (let topic of document.getElementsByClassName("topic-item")){
    topic.addEventListener('click', function(){
        for(let ttopic of document.getElementsByClassName("topic-item")){
            ttopic.style.fontWeight = "400";
        }

        if(this.innerHTML == "OOP"){
            this.style.fontWeight = "700";
            oop();
        }
        else if(this.innerHTML == "Recursion"){
            this.style.fontWeight = "700";
            name.innerHTML = "Recursion";
            para1.innerHTML = "Incursion";
            para2.style.display = "none";
            para3.style.display = "none";
            para4.style.display = "none";
            para5.style.display = "none";
            para6.style.display = "none";
            para7.style.display = "none";
            para8.style.display = "none";
            para9.style.display = "none";
            para10.style.display = "none";
            para11.style.display = "none";
            para12.style.display = "none";
        }
        else if(this.innerHTML == "Searching &amp; Sorting"){
            this.style.fontWeight = "700";
            name.innerHTML = "Searching &amp; Sorting";
            para1.innerHTML = "Merchant &amp Boring";
            para2.style.display = "none";
            para3.style.display = "none";
            para4.style.display = "none";
            para5.style.display = "none";
            para6.style.display = "none";
            para7.style.display = "none";
            para8.style.display = "none";
            para9.style.display = "none";
            para10.style.display = "none";
            para11.style.display = "none";
            para12.style.display = "none";
        }
        else if(this.innerHTML == "Arrays &amp; Arraylists"){
            this.style.fontWeight = "700";
            name.innerHTML = "Arrays &amp; Arraylists";
            para1.innerHTML = "Allies &amp Armenia";
            para2.style.display = "none";
            para3.style.display = "none";
            para4.style.display = "none";
            para5.style.display = "none";
            para6.style.display = "none";
            para7.style.display = "none";
            para8.style.display = "none";
            para9.style.display = "none";
            para10.style.display = "none";
            para11.style.display = "none";
            para12.style.display = "none";
        }
    })

    // topic.addEventListener("mouseenter", function(){
    //     this.style.backgroundColor = "#cfcbcb";
    // })

    // topic.addEventListener("mouseleave", function(){
    //     this.style.backgroundColor = "inherit";
    // })
}

function oop(){
    name.innerHTML = "Object Oriented Programming (OOP)";
            para1.innerHTML = 'OOP is a style of programming that revolves around the concept of objects. Different class files are made, each of which is a blueprint/template for creating objects. These objects are then used in tandem to interact with each other. Every object can store data, and then perform actions using the data it stores.';

            para2.innerHTML = 'For this example, let’s say we want to increase the temperature in a house, where every “thing” is a java object instantiated by a Java class. ';
            para3.innerHTML = 'First, we must understand that objects have properties and methods. A property would be a variable that it stores (eg. color, name, age), while a method would be an action it does with the properties (eg. output the name, add one to the age). ';
            para4.innerHTML = 'Java classes are like a set of instructions on how to create a Java object. A common example would be making an instance (object) of a String. When you add the code “String str = new String ("Hello, world!");”, it uses the preexisting “String” class to create the instance of the class, labelled “str”. We can later then call “str.toLowerCase()” in order to use the preexisting String method “toLowerCase()”, which performs an action (making all letters lowercase) on our property (the text “Hello, world”).';
            para5.innerHTML = 'All of our properties are generally stored globally in the class (outside of any method, inside one pair of curly braces). They normally consist of three parts, the access keyword private, the data type, and the name of the variable. Optionally you may add the keyword final, which only allows the variable to be read/accessed, and not changed; makes the variable a constant. Another keyword you could add would be static, where the access would normally change from private to public. This makes a variable no longer tied to an instance of a class, (eg. the instance of String labelled str), but rather the class itself (the class of String). This means, you do not need to create an object of the class in order to access it (to access it, use Classname.variableName, eg. if there was a “public static int ROOM_TEMP = 21” inside the class Thermometer, you would type “Thermometer.ROOM_TEMP” to get the value of 21).';
            para6.innerHTML = 'Accessor and mutator methods are another staple of OOP. Essentially, these methods allow you to obtain and change the properties of a class instance, respectively. These values generally are tied to the instance of the class, (eg. str), rather than the class itself (eg. ROOM_TEMP). A standard for naming accessor methods would be “get” + nameOfVariable, so for our temperature class where we wish to get the location returned, we would use “getLocation()”. Accessor methods generally are public, and have a return type that matches the datatype of the variable being returned, [eg. public String getLocation()]. Mutator methods follow a similar convention, but with the prefix “set” rather than “get”. They typically are also public, but with a void return type. Instead, they normally accept a parameter of the same datatype as to be changed, [eg. public void setLocation(String newLocation)].';
            para7.innerHTML = 'Constructors are the methods that run right after an instance of the class is made. These methods are used to set up the properties for the first time, (eg. setting the initial location of a thermometer, setting the owner of a pet). They typically have the keyword “public” followed by the name of the class, and then other parameters it accepts (eg. public Thermometer(String loc, int temp). There could be overloads of the constructor, to allow for more specific instances of the base class.';
            para8.innerHTML = 'An optional addition would be a toString() method. By nature, a toString() method will be called when our class instance is used in the context of a String/primitive data type [eg. Thermometer tm = new Thermometer; System.out.println(tm); ]. Typically, our method header would look like “public String toString()”, where we return a String representing this instance of the class, (eg. return “This thermometer is located at “ + location + “, where the temperature reads “ + temperature”).';
            para9.innerHTML = 'Recapping off the general anatomy of a class, we have the class header, which normally contains the keyword “class”, followed by the name of the class (eg. class Thermometer). We next have two curly braces to set the scope, and then the declaration of our PIVs. After this, we will have our constructor, and potential overloaded constructors, which set up our class instance and run right after it’s made. Following the constructor(s), we could have our accessor and mutator methods which return and change our properties respectively. Finally we could have a toString method, which will be automatically called if our class instance is converted into the context of a string. Near the end, we would have any other case-by-case methods specific to the use case, (eg. replaceBatteries(), changeLanguage(), etc. for our Thermometer class).';
            para10.innerHTML = 'Going back to our example, let us create our “Thermometer” class. Inside of its constructor, we could have it accept two variables, a String loc, and an int temp. Declared as private instance variables, we could have also String location and int temperature, and then assign the value of loc to location, and temp to temperature. We could next create “getTemperature()” and “setTemperature()” methods, the first returning an integer, but not requiring any parameters, and the second not returning anything, but requiring an int temp parameter (representing the temperature to set the Thermometer object to). ';
            para11.innerHTML = 'To achieve our goal, we can create our instance of the Thermometer class, and then call the instance method getTemperature, adding 5 and then passing that value to setTemperature.';
            para12.innerHTML = "Speedround - Inheritance: a subclass (extends the parent) obtains a property or action of a parent. Abstract: a keyword that allows you to define a method header, without writing out the actual code, and leaving that to subclasses to flush out (if there is one abstract method, the entire class is an abstract class, and the keyword abstract should be added to the class header). Interfaces: A class consisting only of abstract methods, where all methods are to be implemented in subclasses. Polymorphism: Allows a parent class to take on the value of a child class, where if a parent class is assigned the value of a child class and an overridden method in the child class is called, even though the original datatype was the parent class, the child class’ method will be used. Overriding methods: Allows for the same method to be in a child and parent class, where the most specific/recently overridden method will be used, or where the same method has different parameters in the method header.";

            para1.style.display = "inherit";
            para2.style.display = "inherit";
            para3.style.display = "inherit";
            para4.style.display = "inherit";
            para5.style.display = "inherit";
            para6.style.display = "inherit";
            para7.style.display = "inherit";
            para8.style.display = "inherit";
            para9.style.display = "inherit";
            para10.style.display = "inherit";
            para11.style.display = "inherit";
            para12.style.display = "inherit";
}