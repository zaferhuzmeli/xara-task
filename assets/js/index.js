(() => {
  const footerSocialLinks = document.querySelector(".footer-social-links");

  // insert images from assets/img files to footerSocialLinks element wrapped with <a> tags
  const socialLinks = [
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      img: "../assets/img/social-icons/facebook.webp",
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      img: "../assets/img/social-icons/twitter.webp",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
      img: "../assets/img/social-icons/instagram.webp",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      img: "../assets/img/social-icons/linkedin.webp",
    },
  ];

  socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.classList.add("footer-social-link");
    const img = document.createElement("img");
    img.src = link.img;
    img.alt = link.name;
    a.appendChild(img);
    footerSocialLinks.appendChild(a);
  });

  const accordions = [
    {
      title: "What you’ll learn",
      content:
        "In this webinar, you will learn How to create a marketing plan that drives consistent growth by reflecting the overall strategy, encompassing business goals with tasks and actions needed to reach them, creating compounding growth through organized, predictable efforts, that also add adaptability.",
    },
    {
      title: "Meet the speakers",
      content:
        "Alfonso Sica, Product Marketing Manager, Xara <br> Matt Bolton, CEO, Xara",
    },
    {
      title: "Who this webinar is best for",
      content:
        "Marketing managers, Heads of sales, Business founders, Real Estate Marketeers, Community Managers",
    },
  ];

  accordions.forEach((accordion) => {
    const accordionsContainer = document.querySelector(".accordions");
    accordionsContainer.innerHTML += `
    <button class="accordion">${accordion.title}</button>
    <div class="panel">
      <p>${accordion.content}</p>
    </div>`;
  });

  // when clicking on an accordion, it will open or close the panel with display: block or none
  var accordionButtons = document.querySelectorAll(".accordion");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      button.classList.toggle("active");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
})();
