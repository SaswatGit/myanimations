gsap.registerPlugin(ScrollTrigger);
gsap.from("#pin-element .pin", {opacity:0, x: "-100%", ease: "back", scrollTrigger: {
    trigger: "#pin-element",
    start: "top 70%",
    end: "bottom bottom",
    toggleActions: "play reverse play reverse",
}});
gsap.from("#pin-element .scroll", {opacity:0, y: "100%", stagger:"0.5", ease: "back", scrollTrigger: {
    trigger: "#pin-element",
    start: "top 50%",
    end: "bottom bottom",
    toggleActions: "play reverse play reverse",
}});

gsap.to("#pin-element .pin", {scrollTrigger: {
    trigger: "#pin-element",
    pin: "#pin-element .pin",
    start: "top top",
    end: "bottom bottom",
}});