var tl=gsap.timeline({scrollTrigger:{
trigger:".two",
start:"0% 90%",
end:"50% 50%",
scrub:"true",
markers:true,
}})

tl.to(
    "#fanta-bhai",{
        top:"130%",
        right:"50%"
},'or')
tl.to("#orange2",{
    top:"170%",
    left:"35%"
},'or')
tl.to("#orange",{
    width:"15%",
    top:"180%",
    right:"50%"
},'or')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:"70% 50%",
    scrub:"true",
    markers:true,
    }})

    tl2.to("#fanta-bhai",{
          top:"220%",
          left:"33%",
          width:"35%"
    },'ca')
    tl2.to("#orange2",{
        top:"207%",
        left:"36%"
  },'ca')