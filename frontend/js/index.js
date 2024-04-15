import "../scss/style.scss";
import $ from "../npm/node_modules/jquery";

import * as modal from "./modal.js";
import * as scroll from "./scroll.js";


$(function () {
    //scroll
    $(window).scroll(scroll.header_display);

    //modal
    $(".js_open").on("click", modal.open);
    $(".js_overlay").on("click", modal.close);
});
