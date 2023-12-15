
gsap.to("#letter-rotation h1 span", {rotationX: 360, yoyo: true, stagger: 0.3, repeat: -1});
gsap.from("#letter-rotation h1", {scale: 0.1, opacity: 0, scrollTrigger: {
    trigger:"#letter-rotation",
    start: "top 30%",
    toggleActions: "play reverse play reverse",
}});
