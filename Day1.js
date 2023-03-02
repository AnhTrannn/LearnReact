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

    //pop method
    const animals = ["Dragon", "Phoenix", "Tiger", "Turtle", "Cat"];
    animals.pop();
    console.log(animals);

    //push method
    const animals1 = ["Dragon", "Phoenix", "Tiger"];
    animals1.push("Turtle");
    console.log(animals1);

    //shift method, unshift
    animals.shift();
    console.log(animals);
    animals.unshift("Dog");
    console.log(animals);

    //concat, splice, slice method
    const arr1 = ["Hello"];
    const arr2 = ["World!"];
    const mergingArr = arr1.concat(arr2);
    console.log(mergingArr);

    mergingArr.splice(3, 0, "<3");
    console.log(mergingArr);

    let remove = animals.splice(1, 1, "Lion");
    console.log(animals);
    console.log(remove);

    let cut = animals.slice(1);
    console.log(cut);

    //Sort method
    const number = ["9", "3", "6"];
    const char = ["A", "N", "H"];
    number.sort();
    console.log(number);
    char.sort();
    console.log(char);

    //Reverse method
    char.reverse();
    console.log(char);
 
    //Fisher Yates Method (To sort the array in random order)
    const score = ["100","50", "80", "1", "3"];
    for (let i = score.length - 1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = score[i];
        score[i] = score[j];
        score[j] = k;
    }
    console.log(score);
}