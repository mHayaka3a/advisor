import "../scss/style.scss";
import $ from "../npm/node_modules/jquery";

const text =
    "パンツはスタイルが良く見えるハイウエストで細身のシルエットです。それぞれセットで着ても別で着ても可愛いです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";

$(function () {
    $(".js_open").on("click", function () {
        const clickedSrc = $(this).find(".styling_list_card_img").attr("src");
        $(".js_modal_img").attr("src", clickedSrc);
        $(".js_modal_text").text(text);
        $(".js_modal").css("display", "unset");
    });
    // モーダルを閉じる
    $(".js_modal").on("click", function (e) {
        if ($(e.target).closest(".styling_list_modal").length === 0) {
            $(".js_modal").css("display", "none");
        }
    });
});
