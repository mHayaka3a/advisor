import $ from "../npm/node_modules/jquery";

export function header_display(e) {
    const headerHeight = $(".header").height();
    const header = $(".header");

    const currentPosition = $(this).scrollTop();

    if (currentPosition > headerHeight) {
        header.css("opacity", "0");
    } else {
        header.css("opacity", "1");
    }
}
