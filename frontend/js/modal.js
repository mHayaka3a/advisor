import $ from "../npm/node_modules/jquery";

export function open() {
    const text =
        "パンツはスタイルが良く見えるハイウエストで細身のシルエットです。それぞれセットで着ても別で着ても可愛いです。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";

    const clickedSrc = $(this).find(".js_source_img").attr("src");
    $(".js_modal_img").attr("src", clickedSrc);
    $(".js_modal_text").text(text);
    $(".js_overlay").css("display", "unset");
}

export function close(e) {
    if ($(e.target).closest(".js_modal").length === 0) {
        $(".js_overlay").css("display", "none");
    }
}
