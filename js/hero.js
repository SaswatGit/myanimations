gsap.from("#hero h1 span", 1, {yPercent: 100, stagger: 0.1, ease: "back", scrollTrigger: {
    trigger: "#hero",
    start: "top 10%",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
}});
gsap.to("#hero h1 .ani", 1, {rotationX: 360, stagger: 1, yoyo: true, repeat: -1, repeatDelay: 1});