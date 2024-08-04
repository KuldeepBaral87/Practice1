document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".resultFetch", // Trigger animation when .content comes into view
            start: "top 100%", // Adjust start point as needed
            end: "bottom 0%",
            toggleActions: "play none none none", // Play the animation when triggered
            markers:true
        }
    });
    tl.from(".resultFetch", {
        opacity: 0,
        y: -100,
        stagger: 0.1,
        color: "red"
    });
    tl.from("p", {
        opacity: 0,
        y: -100,
        stagger: 0.1,
        color: "red"
    });
});