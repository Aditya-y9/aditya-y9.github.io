function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-260,

},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 h3",{
    x:-250
},"anim")


tl.to(".page1 video",{
    width:"100%"
},"anim" )


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top -115%",
        end:"top 120%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})


const blob = document.getElementById("blob");
window.onpointermove = event => {
    const {clientX, clientY} = event;

    blob.animate({
        left : `${clientX}px`,
        top: `${clientY}px`
    },{duration: 1000, fill: "forwards"})
}