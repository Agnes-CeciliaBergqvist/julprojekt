//Load more product cards//
$(function(){
        $(".index-article-card").slice(0, 6).show(6); // select the first 6 product cards
        $(".index-loadMoreBtn").on("click", function(e){ // click event for load more products
            e.preventDefault();
            $(".index-article-card:hidden").slice(0, 6).show(); // select next 6 hidden articles and show them
            if($(".index-article-card:hidden").length == 0){ // check if any hidden divs still exist
                alert("No More Products!"); // alert if there are none left
            }
        });
    });