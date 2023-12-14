gsap.registerPlugin(ScrollTrigger);

gsap.to("#text-split h1 span:nth-child(1)", {y: 100, scrollTrigger: {
    trigger: "#text-split",
    pin: "#text-split",
    start: "top top",
    end: ()=> "+="+ document.querySelector("#text-split").offsetHeight,
    scrub: 1,
}});
gsap.to("#text-split h1 span:nth-child(2)", {y: 50, scrollTrigger: {
    trigger: "#text-split",
    start: "top top",
    end: ()=> "+="+ document.querySelector("#text-split").offsetHeight,
    scrub: 1,
}});
gsap.to("#text-split h1 span:nth-child(4)", {y: -50, scrollTrigger: {
    trigger: "#text-split",
    start: "top top",
    end: ()=> "+="+ document.querySelector("#text-split").offsetHeight,
    scrub: 1,
}});
gsap.to("#text-split h1 span:nth-child(5)", {y: -100, scrollTrigger: {
    trigger: "#text-split",
    start: "top top",
    end: ()=> "+="+ document.querySelector("#text-split").offsetHeight,
    scrub: 1,
}});
