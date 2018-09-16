$(function () {
    let liebiao=$(".list");
    let son=$(".list-box");
    liebiao.click(function () {
        liebiao.toggleClass("icon-pingguo");
        son.clearQueue().slideToggle("slow");

        liebiao.click(function () {
            $(document).unbind("scroll.unable");
        })
        let top = $(document).scrollTop();
        $(document).on('scroll.unable',function (e) {
            $(document).scrollTop(top);
        })
    })


    // let jia=$("footer .content dl dt .icon-iconjia");
    // let slide=$("footer .content dl .slide");
    // let li=$("footer .content dl dt");
    // console.log(jia, slide,li);
    // li.click(function () {
    //     let i=$(this).index();
    //     slide.slideToggle("slow");
    //
    // })

    let add=$(".add");
    let down=$(".content-down");
    let both=$(".footer2 ul li");
    console.log(add, down, both);
    both.click(function(){
        let i=$(this).index();
        down.eq(i).slideToggle("slow");

        add.eq(i).toggleClass('hot');
    });
})