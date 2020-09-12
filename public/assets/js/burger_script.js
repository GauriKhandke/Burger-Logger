$(function(){
    
    $(".add-burger").on("submit", function(event){

        event.preventDefault();

        let newBurger = {
            name : $("#burgerName").val().trim(),
            devoured : false
        };

         // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
        function() {
            console.log("Added new burger!");
            // Reload the page to get the updated list
            location.reload();
        });

    });

    $(".devour").on("click",function(event){
        let id = $(this).data("id");

        let devouredBurger = {
            devoured : true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function() {
            console.log("Burger Devoured : "+id);
            // Reload the page to get the updated list
            location.reload();
        });
    });
});