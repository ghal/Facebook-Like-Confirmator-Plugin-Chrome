$(".UFILikeLink").click(function (event) {
    var res = confirm("Like?");
    if (!res) {
        event.stopPropagation();
    }
});
