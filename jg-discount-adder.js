    require(['jquery', 'domReady!'], function ($) {

        let oldPrice; // Variable to hold the old price
        let specialPrice; // Variable to hold special price
        let discountValue; // Variable for holding total discount amount


        // Function to populate the the content in right language
        function labelCreator(v) {
            if ($('html').attr('lang') == 'de') { // Pages in German
                return '<b>' + v + ',-' + '</b>' + ' Rabatt';
            } else if ($('html').attr('lang') == 'nl') { // Pages in Dutch
                return '<b>' + v + ',-' + '</b>' + ' Korting';
            } else if ($('html').attr('lang') == 'fr') { // Pages in French
                return '<b>' + v + ',-' + '</b>' + ' Remise';
            } else if ($('html').attr('lang') == 'es') { // Pages in Spanish
                return '<b>' + v + ',-' + '</b>' + ' Descuento';
            } else if ($('html').attr('lang') == 'et') { // Pages in Estonian
                return '<b>' + v + ',-' + '</b>' + ' Soodustus';
            } else if ($('html').attr('lang') == 'lv') { // Pages in Lithuanian
                return '<b>' + v + ',-' + '</b>' + ' Nuolaida';
            } else if ($('html').attr('lang') == 'pl') { // Pages in Polish
                return '<b>' + v + ',-' + '</b>' + ' Zniżka';
            } else { // For all other languages 
                return '<b>' + v + ',-' + '</b>' + ' Discount';
            }

            return false;

        };


        if ($('body').hasClass('page-with-filter')) { // if category page loads

            $('.item.product.product-item .product-item-info').each(function () { // Following script is run for each product card on category pages
                oldPrice = $(this).find('.price-box span[data-price-type="oldPrice"]').attr('data-price-amount'); // Old price is saved
                specialPrice = $(this).find('.product-item-details .price-box span[data-price-type="finalPrice"]').attr('data-price-amount'); // Special price is saved
                discountValue = oldPrice - specialPrice; // Discount amount calculated

                // Discount label created with the correct discount amount and saved in a variable.
                let labelElement = `<div class="discount-label-container"
                                    style="background-color: #fe2727; width: max-content; padding: 7px 10px; color: white; font-size: 14px; display: inline-block; margin-left: 2px; z-index: 999999; position: absolute; bottom: 0; left: 0;">
                                    <span class="discount-label-content"> 
                                        ${labelCreator(discountValue)}
                                    </span>
                                </div>
                                `;
                // The label is placed inside image wrapper of the product card and displayed
                if (!isNaN(oldPrice)) {
                    $(labelElement).prependTo($(this).find('.product-image-wrapper'));
                }
            });
        }


        if ($('body').hasClass('catalog-product-view')) { // if product page loads
            oldPrice = $('.price-box span[data-price-type="oldPrice"]').attr('data-price-amount'); // For all other languages
            specialPrice = $('.price-box span[data-price-type="finalPrice"]').attr('data-price-amount'); // Special price is saved
            discountValue = oldPrice - specialPrice; // Discount amount calculated

            // Discount label created with the correct discount amount and saved in a variable.
            let labelElement = `<div class="discount-label-container"
                                style="background-color: #fe2727; width: max-content; padding: 7px 10px; color: white; font-size: 14px; display: inline-block; margin-left: 15px;">
                                <span class="discount-label-content"> 
                                    ${labelCreator(discountValue)}
                                </span>
                            </div>
                            `;
            // The label is placed and showed next to the special price
            if (!isNaN(oldPrice)) {
                $(labelElement).insertAfter('span[data-price-type="finalPrice"]:first');
            }
        }

    });
