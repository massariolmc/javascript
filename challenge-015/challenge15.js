(function(){
    function Person(name, lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        
        console.log(this.name);

        this.getFullName = function getFullName(){
            
            return this.name +'-'+ this.lastName
        };
        this.getAge = function getAge(){
            return this.age;
        };
        this.addAge = function addAge(){
            this.age += arguments[0];
            return this;
        };
    }
    var person1 = new Person('Maximiano', 'Massariol', 32);
    console.log(person1);
    console.log(person1.getFullName());    
    console.log(person1.getFullName() + ' tem' + person1.getAge() + ' anos');
    person1.addAge(30);
    console.log(person1.getFullName() + ' agora tem' + person1.getAge() + ' anos');
    console.log(person1.getAge());

})();