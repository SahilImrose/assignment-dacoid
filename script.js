const nextBtn = () => {
  if (document.getElementById("next-btn").classList.contains("next-btn")) {
    document
      .getElementById("imgSteps")
      .setAttribute("src", "./lib/images/second.png");
    document.getElementById("headlineSteps").innerHTML = "Get Burn";
    document.getElementById(
      "describeSteps"
    ).innerHTML = `Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever.`;
    document.getElementById("next-btn").classList.remove("next-btn");
    document.getElementById("next-btn").classList.add("last-step");
} 
else if(document.getElementById("next-btn").classList.contains("last-step")) {
      document.getElementById("next-btn").setAttribute("href","#signup")
      document.getElementById("step").innerHTML=""
  }
};
