$("button").click(function() {

    let Name = $(".Name").val();
    console.log(Name);

    let favNumber = $(".favNumber").val();
    console.log(favNumber);

    let Day = $(".Day").val();
    console.log(Day);
    let prediction = Name + " today is " + Day + " you have " + favNumber + "% chance of winning the lottery today" ;
    $ (".fortune-display").append(prediction);
});