let DIFF = 1;

BLACKLIST = [
];

let LOWER = "lower";
let HIGHER = "higher";
let SUBMIT_BUTTON = $("input:submit");
let SEARCH_RESULTS = $("#content > div > div > div.live-search-box.alert-box");

window.changeStandards = function(method) {
    $.each($('input.num'),
        function () {
            elem = $(this);
            let val = parseInt(elem.val());

            if (!val) {
                return;
            }

            if (method == LOWER) {
                val -= DIFF;
            }
            else {
                val += DIFF;
            }

            elem.val(val);

        }
    );

    SUBMIT_BUTTON.click();
}

SEARCH_RESULTS.before('<a id="standards-lower-btn" class="button secondary">Lower my standards</a>');
SEARCH_RESULTS.before('<a id="standards-up-btn" class="button secondary">Up my standards</a>');

$("#standards-lower-btn").click(function () { changeStandards(LOWER); });
$("#standards-up-btn").click(function () { changeStandards(HIGHER); });