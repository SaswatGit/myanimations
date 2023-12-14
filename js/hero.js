gsap.from("#hero h1 span", 1, {yPercent: 100, stagger: 0.1, ease: "back", scrollTrigger: {
    trigger: "#hero",
    start: "top 10%",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
}});