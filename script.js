gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

// Desktop فقط
mm.add("(min-width: 769px)", () => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".features",
            start: "top top",
            end: "+=200",
            scrub: true,
        }
    });

    tl.from(".features__column--left .features__item", {
        x: -30,
        opacity: 0,
        stagger: 0.15
    })
    .from(".features__column--right .features__item", {
        x: 30,
        opacity: 0,
        stagger: 0.15
    }, "<");

});

// المشاريع على جميع الأجهزة
gsap.utils.toArray(".project").forEach((project) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start: "top 75%",
            end: "top 35%",
            scrub: true
        }
    });

    tl.from(project.querySelector(".project__number"), {
        x: -30,
        opacity: 0
    })
    .from(project.querySelector(".project__content"), {
        y: 20,
        opacity: 0
    }, "<0.1")
    .from(project.querySelector(".project__image"), {
        x: 30,
        opacity: 0
    }, "<");

});