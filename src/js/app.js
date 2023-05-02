const $ = require("jquery");
import moment from "moment";
import * as timeago from "timeago.js";
import * as TomSelect from "tom-select/dist/js/tom-select.complete";
import Inputmask from "inputmask";

// create global $ and jQuery variables
global.$ = global.jQuery = $;
window.jQuery = $;

// timeago
$(".time-ago").each(function () {
  timeago.render(document.querySelectorAll(".time-ago"));
});

// Money input mask
$(document).ready(function () {
  Inputmask({
    alias: "numeric",
    groupSeparator: " ",
    digits: 2,
    digitsOptional: false,
    suffix: " €",
    placeholder: "0",
    autoUnmask: true,
  }).mask(document.querySelectorAll("input[type='money']"));

  Inputmask({
    alias: "numeric",
    groupSeparator: " ",
    digits: 2,
    digitsOptional: false,
    suffix: " €",
    placeholder: "0",
    autoUnmask: true,
  }).mask(document.querySelectorAll(".money-mask"));
});
