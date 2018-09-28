(function($){
    $.fn.smpPagination = function(perPage) {

        // No need to pagination if number of items does not exceed perPage
        if($(this).length > perPage) {
            var page = pagination($(this), perPage),
                $next = $('.smpPagination--pagination.next'),
                $prev = $('.smpPagination--pagination.prev') ;
            $prev.addClass('disable') ;

            $('.smpPagination--pagination').click(function () {
                if (!$(this).hasClass('disable')) {
                    if ($(this).hasClass('next')) page.next() ;
                    else page.prev() ;
                    page.updateCounter() ;
                    $next.removeClass('disable') ;
                    $prev.removeClass('disable') ;
                    if (page.min()) {
                        $prev.addClass('disable') ;
                    } else if (page.max()) {
                        $next.addClass('disable') ;
                    }
                }
            });
        }

        function pagination($blocks, perPage) {
            // Default to 10 results per page
            perPage = typeof perPage === 'undefined' ? 10 : perPage ;

            if($blocks.length > perPage) {
                // If more blocks than perPage, hide the extra and append some buttons
                for (var i = perPage; i < $blocks.length; i++) {
                    $($blocks[i]).hide();
                    if(i === $blocks.length-1) {
                        $($blocks[i]).after($('<div>').addClass('smpPagination--pagination-nav')) ;
                        $('.smpPagination--pagination-nav')
                            .append($('<button>').text('Previous').addClass('smpPagination--pagination prev'))
                            .append($('<span>').text('1 - ' + perPage + ' / ' + $blocks.length).addClass('smpPagination--pagination-counter'))
                            .append($('<button>').text('Next').addClass('smpPagination--pagination next')) ;
                    }
                }

                // Determine number of pages
                var page = 0,
                    maxPage = Math.floor(($blocks.length-1) / perPage) ;

                // Return next, previous, and update counter functions
                return {
                    next: function () {
                        if (page < maxPage) page++ ;
                        var min = page * perPage,
                            max = (page+1) * perPage ;
                        for (var i = 0; i < $blocks.length; i++) {
                            if(i >= min && i < max) $($blocks[i]).show() ;
                            else $($blocks[i]).hide() ;
                        }
                    },
                    prev: function () {
                        if (page > 0) page-- ;
                        var min = page * perPage,
                            max = (page+1) * perPage ;
                        for (var i = 0; i < $blocks.length; i++) {
                            if(i >= min && i < max) $($blocks[i]).show() ;
                            else $($blocks[i]).hide() ;
                        }
                    },
                    updateCounter: function() {
                        var min = page * perPage,
                            max = Math.min((page+1) * perPage, $blocks.length) ;
                        $('.smpPagination--pagination-counter').text((min+1) +' - ' + max + ' / ' + $blocks.length) ;
                    },
                    max: function(){
                        return ((page+1) * perPage > $blocks.length) ;
                    },
                    min: function(){
                        return page === 0 ;
                    }
                };
            }
        }

    } ;
})(jQuery) ;