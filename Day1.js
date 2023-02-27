{   
    // let can not redeclare
    // must be declare before use
    // have Block Scope
    let x = 5;
    // print x = 5
    console.log(x);
}

{   // const cannot be redeclare
    // cannot be Reassign
    // have Block Scope
    //Use const when you declare: A new Array, A new Object, A new Function, A new RegExp
    
    //object
    const person = {
        firstName: "Anh",
        lastName: "Tran",
        hobbies: "playing soccer"
    };
    let fullName =  person.lastName + " " + person.firstName;
    console.log(fullName);

    //Array
    const name = ["Anh", "Hoang", "Dong"];

    //Accessing Array Elements
    let name1 = name[0];
    console.log(name);

    //Changing an Array Element
    name[1] = "Dinh";
    console.log(name);

    //Object Array
    const person1 = [
        "Nhat",
        "19",
        "Listen to music"
    ];
    showMe = person1.join(" ");
    console.log(showMe);

    //push method
    person1.push("Male");
    console.log(person1);
}