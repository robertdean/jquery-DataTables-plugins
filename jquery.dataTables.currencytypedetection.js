jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {
        var sValidChars = "0123456789.-,";
        var Char;

        /* Check the numeric part */
        for (i = 1; i < sData.length; i++) {
            Char = sData.charAt(i);
            if (sValidChars.indexOf(Char) == -1) {
                return null;
            }
        }

        /* Check prefixed by currency */
        if (sData.charAt(0) == '$') {
            return 'currency';
        }
        return null;
    }
);

    jQuery.fn.dataTableExt.oSort['currency-asc'] = function (a, b) {
        /* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
        var x = a == "-" ? 0 : a.replace(/,/g, "");
        var y = b == "-" ? 0 : b.replace(/,/g, "");

        /* Remove the currency sign */
        x = x.substring(1);
        y = y.substring(1);

        /* Parse and return */
        x = parseFloat(x);
        y = parseFloat(y);
        return x - y;
    };

    jQuery.fn.dataTableExt.oSort['currency-desc'] = function (a, b) {
        /* Remove any commas (assumes that if present all strings will have a fixed number of d.p) */
        var x = a == "-" ? 0 : a.replace(/,/g, "");
        var y = b == "-" ? 0 : b.replace(/,/g, "");

        /* Remove the currency sign */
        x = x.substring(1);
        y = y.substring(1);

        /* Parse and return */
        x = parseFloat(x);
        y = parseFloat(y);
        return y - x;
    };