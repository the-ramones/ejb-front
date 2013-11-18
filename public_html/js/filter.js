/* 
 * Support Page filter
 */

(function($) {
    jQuery.expr[':'].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    function filterList(header, slist) {
    /* refactor for eeasy-to-boot-use style */
    /*  var form = $("<form>").attr({"class": "filterform form-search", "action": "#"}),
        input = $("<input>").attr({"class": "filterinput", "placeholder": "Type to Filter", "type": "text"});
        $(form).append(input).appendTo(header); */
        var form = $('form[name="filterinput-form"]'),
        input = $("#filterinput");

        $(input)
                .change(function() {
            var filter = $(this).val();
            if (filter) {

                $matches = $(slist).find('a:Contains(' + filter + ')').parent();
                $('li', slist).not($matches).slideUp();
                $matches.slideDown();

            } else {
                $(slist).find("li").slideDown();
            }
            return false;
        })
                .keyup(function() {
            $(this).change();
        });
    }

    $(function() {
        filterList($("#form"), $("#slist"));
    });
}(jQuery));


