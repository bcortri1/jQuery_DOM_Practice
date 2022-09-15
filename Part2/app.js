
$("#sBtn").on("click", function(evt){
    evt.preventDefault()
    const title = $("#title").val();
    const rating = $("#rating").val();
    if(!title || !rating || title.length < 2 ||rating > 10){
        return;
    }
    const $rBttn = $("<button class='rBtn'>Remove</button>")
    const $newMov = $(`<tr><td class="title">${title}</td> <td class="rating">${rating}</td></tr>`).append($rBttn);
    $("#movie-container").append($newMov);
});

//Gives button ability to remove entries
$("#movie-container").on("click", ".rBtn", function(){
    $(this).parent().remove();
});

//Triggers sort table when either header is clicked
$("#header th").on("click", function(){
    sortTable($(this).text());
});



//Accepts string which should be the td class name
function sortTable(sortBy){
    sortBy = sortBy.toLowerCase();
    let sorted = false;
    let table = $("td."+sortBy);
    if (table.parent().length < 2 ){
        return;
    }

    while(sorted == false){
        let changes = false;
        table.each(function(index){
            
            let left = table.eq(index);
            let right = table.eq(index+1);

            if(left.text() < right.text()){
                left.parent().before(right.parent())
                changes = true;
            }
            console.log(changes);
        })
        table = $("td."+sortBy);
        if(changes == false){
            sorted = true;
        }
    }
}