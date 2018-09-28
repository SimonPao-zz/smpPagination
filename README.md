# smpPagination
smpPagination is a simple pagination jQuery plugin that allows you to paginate an arbitrary number or DOM elements.

Call `smpPagination()` on a jQuery selector to paginate all matched DOM elements.

Pass the number of elements to display on page. This will default to `10` if not provided.

## Usage

```
<div class="pagination-block">
    Lorem ipsum ...
</div>
<div class="pagination-block">
    dolor sit amet ...
</div>
<div class="pagination-block">
    consectetur adipiscing elit ...
</div>
<!-- ... -->

<script type="text/javascript">
    let perPage = 6 ; // Number of .pagination-block elements to show per page
    
    $(".pagination-block").smpPagination(perPage) ;
</script>
```