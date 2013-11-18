/* 
 * Custom JS, Retail Store
 */

/* Support */
$("#slist a").click(function(e) {
   e.preventDefault(); 
   $(this).next("p").toggle(200);
   return false;
});


