"use strict";var gtm4wp_last_selected_product_variation;function gtm4wp_woocommerce_handle_cart_qty_change(){document.querySelectorAll(".product-quantity input.qty").forEach(function(t){var e=t.defaultValue,o=parseInt(t.value);if(e!=(o=isNaN(o)?e:o)){var t=t.closest(".cart_item"),t=t&&t.querySelector(".remove");if(t)return!(t=gtm4wp_read_json_from_node(t,"gtm4wp_product_data"))||void(e<o?(t.quantity=o-e,t.price=t.price,gtm4wp_push_ecommerce("add_to_cart",[t],{currency:gtm4wp_currency,value:t.price*t.quantity})):(t.quantity=e-o,t.price=t.price,gtm4wp_push_ecommerce("remove_from_cart",[t],{currency:gtm4wp_currency,value:t.price*t.quantity})))}})}function gtm4wp_woocommerce_handle_payment_method_change(){var t,e;-1<gtm4wp_checkout_step_fired.indexOf("payment_method")||"complete"==document.readyState&&(t="(payment type not found)",(e=(e=document.querySelector(".payment_methods input:checked"))||document.querySelector("input[name^=payment_method]"))&&(t=e.value),gtm4wp_push_ecommerce("add_payment_info",window.gtm4wp_checkout_products,{currency:gtm4wp_currency,payment_type:t,value:window.gtm4wp_checkout_value}),gtm4wp_checkout_step_fired.push("payment_method"))}function gtm4wp_woocommerce_handle_shipping_method_change(){var t,e;-1<gtm4wp_checkout_step_fired.indexOf("shipping_method")||"complete"==document.readyState&&(t="(shipping tier not found)",(e=(e=document.querySelector("input[name^=shipping_method]:checked"))||document.querySelector("input[name^=shipping_method]"))&&(t=e.value),gtm4wp_push_ecommerce("add_shipping_info",window.gtm4wp_checkout_products,{currency:gtm4wp_currency,shipping_tier:t,value:window.gtm4wp_checkout_value}),gtm4wp_checkout_step_fired.push("shipping_method"))}function gtm4wp_woocommerce_process_pages(){var n={"wp-block-handpicked-products":{displayname:"Handpicked Products",counter:1},"wp-block-product-best-sellers":{displayname:"Best Selling Products",counter:1},"wp-block-product-category":{displayname:"Product Category List",counter:1},"wp-block-product-new":{displayname:"New Products",counter:1},"wp-block-product-on-sale":{displayname:"Sale Products",counter:1},"wp-block-products-by-attribute":{displayname:"Products By Attribute",counter:1},"wp-block-product-tag":{displayname:"Products By Tag",counter:1},"wp-block-product-top-rated":{displayname:"Top Rated Products",counter:1}};if(document.querySelectorAll(".wc-block-grid .wc-block-grid__product").forEach(function(t){var e=t.closest(".wc-block-grid"),o=t.querySelector(".gtm4wp_productdata");if(e&&o){var r=e.classList;if(r)for(var c in n)r.contains(c)&&(gtm4wp_update_json_in_node(o,"gtm4wp_product_data","item_list_name",n[c].displayname),gtm4wp_update_json_in_node(o,"gtm4wp_product_data","index",n[c].counter),n[c].counter++)}}),0<document.querySelectorAll(".gtm4wp_productdata,.widget-product-item").length){var t,e=[];if(document.querySelectorAll(".gtm4wp_productdata,.widget-product-item").forEach(function(t){t=gtm4wp_read_json_from_node(t,"gtm4wp_product_data");if(!t)return!0;e.push(t)}),0<gtm4wp_product_per_impression)for(;e.length;)t=e.splice(0,gtm4wp_product_per_impression),gtm4wp_push_ecommerce("view_item_list",t,{currency:gtm4wp_currency});else gtm4wp_push_ecommerce("view_item_list",e,{currency:gtm4wp_currency})}document.addEventListener("click",function(t){var e=t.target;if(!e)return!0;if(e.closest(".add_to_cart_button:not(.product_type_variable, .product_type_grouped, .single_add_to_cart_button)")){var o=e.closest(".product,.wc-block-grid__product"),o=o&&o.querySelector(".gtm4wp_productdata");if(!o)return!0;o=gtm4wp_read_json_from_node(o,"gtm4wp_product_data");if(!o)return!0;if("variable"===o.product_type||"grouped"===o.product_type)return!0;o.productlink&&delete o.productlink,delete o.product_type,o.quantity=1,gtm4wp_push_ecommerce("add_to_cart",[o],{currency:gtm4wp_currency,value:o.price})}if(e.closest(".single_add_to_cart_button:not(.disabled)")){o=e.closest("form.cart");if(!o)return!0;var r=o.querySelectorAll("[name=variation_id]"),c=o.classList&&o.classList.contains("grouped_form");if(0<r.length)gtm4wp_last_selected_product_variation&&(r=o.querySelector("[name=quantity]"),gtm4wp_last_selected_product_variation.quantity=r&&r.value||1,gtm4wp_push_ecommerce("add_to_cart",[gtm4wp_last_selected_product_variation],{currency:gtm4wp_currency,value:(gtm4wp_last_selected_product_variation.price*gtm4wp_last_selected_product_variation.quantity).toFixed(2)}));else if(c){var r=document.querySelectorAll(".grouped_form .gtm4wp_productdata"),n=[],a=0;if(r.forEach(function(t){var e,t=gtm4wp_read_json_from_node(t,"gtm4wp_product_data",["productlink"]);return!(t&&0<(e=document.querySelectorAll("input[name=quantity\\["+t.internal_id+"\\]]")).length&&0!=(product_qty=e[0]&&e[0].value||1))||(t.quantity=product_qty,delete t.internal_id,n.push(t),void(a+=t.price*t.quantity))}),0==n.length)return!0;gtm4wp_push_ecommerce("add_to_cart",n,{currency:gtm4wp_currency,value:a.toFixed(2)})}else{c=o.querySelector("[name=gtm4wp_product_data]");if(!c)return!0;r=gtm4wp_read_from_json(c.value);r.quantity=o.querySelector("[name=quantity]")&&o.querySelector("[name=quantity]").value,isNaN(r.quantity)&&(r.quantity=1),gtm4wp_push_ecommerce("add_to_cart",[r],{currency:gtm4wp_currency,value:r.price*r.quantity})}}if(e.closest(".mini_cart_item a.remove,.product-remove a.remove")){c=e&&e.closest(".mini_cart_item a.remove,.product-remove a.remove");if(!c)return!0;o=gtm4wp_read_json_from_node(c,"gtm4wp_product_data");if(!o)return!0;var r=0,_=c.closest(".cart_item"),_=_&&_.querySelectorAll(".product-quantity input.qty");if(_&&0!==_.length?r=_[0].value:(_=(c=c.closest(".mini_cart_item"))&&c.querySelectorAll(".quantity"))&&0<_.length&&(r=parseInt(_[0].textContent),Number.isNaN(r))&&(r=0),0===r)return!0;o.quantity=r,gtm4wp_push_ecommerce("remove_from_cart",[o],{currency:gtm4wp_currency,value:o.price*o.quantity})}if(e.closest(".products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.wc-block-grid__products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.products>div:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.widget-product-item,.woocommerce-grouped-product-list-item__label a")){if("undefined"==typeof google_tag_manager)return!0;c=t.target,_=c.closest(".products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.wc-block-grid__products li:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.products>div:not(.product-category) a:not(.add_to_cart_button):not(.quick-view-button),.widget-product-item,.woocommerce-grouped-product-list-item__label a");if(!_)return!0;var i,r=c.closest(".product,.wc-block-grid__product"),o=(r=(r=r||((r=c.closest(".products li"))||c.closest(".products>div")))||c.closest(".woocommerce-grouped-product-list-item__label"))?r.querySelector(".gtm4wp_productdata"):c,e=gtm4wp_read_json_from_node(o,"gtm4wp_product_data",["internal_id"]);if(!e)return!0;if(e.productlink!=_.getAttribute("href"))return!0;for(i in window.google_tag_manager)if("gtm-"==i.substring(0,4).toLowerCase()){window.gtm4wp_first_container_id=i;break}if(""===window.gtm4wp_first_container_id)return!0;var d=t.ctrlKey||t.metaKey,u="_blank"===_.target,p=t.defaultPrevented,m=(p||t.preventDefault(),(d||u)&&(window.productpage_window=window.open("about:blank","_blank")),e.productlink);delete e.productlink,gtm4wp_push_ecommerce("select_item",[e],{currency:gtm4wp_currency},function(t){if(void 0!==t&&window.gtm4wp_first_container_id!=t)return!0;p||((u||d)&&productpage_window?productpage_window.location.href=m:document.location.href=m)})}}),jQuery(document).on("found_variation",function(t,e){if(void 0!==e&&("interactive"!==document.readyState||!gtm4wp_view_item_fired_during_pageload)){t=t.target;if(!t)return!0;var o,t=t.querySelector("[name=gtm4wp_product_data]");if(!t)return!0;try{o=JSON.parse(t.value)}catch(t){return console&&console.error&&console.error(t.message),!0}o.price=gtm4wp_make_sure_is_float(o.price),o.id=e.variation_id,o.item_id=e.variation_id,o.sku=e.sku,gtm4wp_use_sku_instead&&e.sku&&""!==e.sku&&(o.id=e.sku,o.item_id=e.sku),o.price=gtm4wp_make_sure_is_float(e.display_price);var r,c=[];for(r in e.attributes)c.push(e.attributes[r]);o.variant=c.join(","),gtm4wp_last_selected_product_variation=o,gtm4wp_push_ecommerce("view_item",[o],{currency:gtm4wp_currency,value:o.price}),"interactive"===document.readyState&&(gtm4wp_view_item_fired_during_pageload=!0)}}),jQuery(".variations select").trigger("change"),jQuery(document).ajaxSuccess(function(t,e,o){void 0!==o&&-1<o.url.indexOf("wc-api=WC_Quick_View")&&setTimeout(function(){var t=document.querySelector("#gtm4wp_quickview_data");if(t&&t.dataset&&t.dataset.gtm4wp_datalayer)try{var e=JSON.parse(t.dataset.gtm4wp_datalayer);e&&window.dataLayer&&window.dataLayer.push(e)}catch(t){console&&console.error&&console.error(t.message)}},500)});var o=!1,r=!1,c=document.querySelector("body");c&&(o=c.classList&&c.classList.contains("woocommerce-cart"),r=c.classList&&c.classList.contains("woocommerce-checkout")),o&&(document.addEventListener("click",function(t){t=t.target;return!t||!t.closest("[name=update_cart]")||void gtm4wp_woocommerce_handle_cart_qty_change()}),document.addEventListener("keypress",function(t){t=t.target;return!t||!t.closest(".woocommerce-cart-form input[type=number]")||void gtm4wp_woocommerce_handle_cart_qty_change()})),r&&(window.gtm4wp_checkout_value=window.gtm4wp_checkout_value||0,window.gtm4wp_checkout_products=window.gtm4wp_checkout_products||[],window.gtm4wp_checkout_products_ga4=window.gtm4wp_checkout_products_ga4||[],document.addEventListener("change",function(t){t=t.target;return!t||!t.closest("input[name^=shipping_method]")||void gtm4wp_woocommerce_handle_shipping_method_change()}),document.addEventListener("change",function(t){t=t.target;return!t||!t.closest("input[name=payment_method]")||void gtm4wp_woocommerce_handle_payment_method_change()}),jQuery("form.checkout").on("checkout_place_order",function(){-1==gtm4wp_checkout_step_fired.indexOf("shipping_method")&&gtm4wp_woocommerce_handle_shipping_method_change(),-1==gtm4wp_checkout_step_fired.indexOf("payment_method")&&gtm4wp_woocommerce_handle_payment_method_change()}))}function gtm4wp_woocommerce_page_loading_completed(){document.removeEventListener("DOMContentLoaded",gtm4wp_woocommerce_page_loading_completed),window.removeEventListener("load",gtm4wp_woocommerce_page_loading_completed),gtm4wp_woocommerce_process_pages()}window.gtm4wp_view_item_fired_during_pageload=!1,window.gtm4wp_checkout_step_fired=[],window.gtm4wp_first_container_id="","loading"!==document.readyState?window.setTimeout(gtm4wp_woocommerce_process_pages):(document.addEventListener("DOMContentLoaded",gtm4wp_woocommerce_page_loading_completed),window.addEventListener("load",gtm4wp_woocommerce_page_loading_completed))