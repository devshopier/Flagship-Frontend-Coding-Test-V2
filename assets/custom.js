$(document).ready(function(){
    $('.btn-add-cart:not(".disabled")').on('click', function(){
        var selected_quantity = 0;
        var items = [];
        flag = 0;
        $('.not-enough-stock p').remove();
        $('.td-quantity input').each(function(){
            var quantity_item = $(this).val();
            var available_stock = $(this).attr('available-quantity');
            if(quantity_item > 0) {
                if(parseInt(quantity_item) > parseInt(available_stock)){
                    var enough_title = $(this).attr('title');
                    $('.not-enough-stock').append(`<p>Not enough stock of ${enough_title}</p>`)
                    selected_quantity ++;
                    flag = 1;
                } else {
                    var variantId = $(this).attr('data-id');
                    var quantity = $(this).val();
                    items.push({ id: variantId, quantity: quantity });
                    selected_quantity ++;
                }
            }
        })
        if(selected_quantity == 0) {
            $('.not-enough-stock').append('<p>Please select quantity!</p>')
        } else {
            if(flag != 1){
                $.ajax({
                    url: '/cart/add.js',
                    type: 'POST',
                    data: {
                        items: items
                    },
                    dataType: 'json',
                    success: function(){
                        console.log('success')
                        window.location.href = '/cart';
                    },
                    error: function(jqXHR) {
                        // Check status code
                        if (jqXHR.status === 422) {
                            // display error wherever you want to  
                            $('.not-enough-stock').append(`<p>${JSON.parse(jqXHR.responseText)}</p>`)
                        } else {
                            $('.not-enough-stock').append(`<p>Not enough stock</p>`)
                        }
                    }
                })
            }
        }
    })
})