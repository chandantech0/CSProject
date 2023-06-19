gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
});


gsap.timeline()
.from("#section1", {duration: 2, opacity: 0})
.from("#t1", {y: 200, stagger: 0.1, duration: 1, ease: "expo", delay: -2})  
.from("#guide", {yPercent: -200, duration: 0.5}) 
// .from("#t1", {opacity: 0, duration: 0.5, delay: 0}) //wait 2 seconds

document.querySelector("#works").addEventListener("mouseenter", doCoolStuff);
document.querySelector("#works").addEventListener("mouseleave", doCoolStuff);
const tl = new TimelineMax();
tl.to(document.querySelector("#works").children[0], 0.4, {attr:{width:160, fill:"#5143d9"}, 
autoAlpha: 0.8, ease: Elastic.easeOut.config(1, 1)});
tl.to(document.querySelector("#worktext"), 0.2, {fill:"#fff", ease:Linear.easeNone}, 0);
tl.reversed(true);

function doCoolStuff() {
    console.log('log')
  tl.reversed(!tl.reversed());
}

document.querySelector("#submitForm").addEventListener("mouseenter", submitTextFun);
document.querySelector("#submitForm").addEventListener("mouseleave", submitTextFun);
const submitTl = new TimelineMax();
submitTl.to(document.querySelector("#submitForm").children[0], 0.4, {attr:{width:160, fill:"#5143d9"}, 
autoAlpha: 1, ease: Elastic.easeOut.config(1, 1)});
submitTl.to(document.querySelector("#submitText"), 0.2, {fill:"#fff", ease:Linear.easeNone}, 0);
submitTl.reversed(true);

function submitTextFun() {
  submitTl.reversed(!submitTl.reversed());
}


