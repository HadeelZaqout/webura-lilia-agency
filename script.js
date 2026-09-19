 // 1) Navbar background on scroll + show/hide scroll-to-top button
    const navbar = document.querySelector(".navbar");
    const scrollTopBtn = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
        scrollTopBtn.style.display = "flex";
      } else {
        navbar.classList.remove("scrolled");
        scrollTopBtn.style.display = "none";
      }
    });

    // 2) Animated counters
    let countersDone = false;
    function runCounters() {
      document.querySelectorAll(".counter-number").forEach(counter => {
        const target = +counter.getAttribute("data-to");
        let count = 0;
        const step = target / 100;
        const timer = setInterval(() => {
          count += step;
          if (count >= target) { counter.textContent = target; clearInterval(timer); }
          else { counter.textContent = Math.floor(count); }
        }, 20);
      });
    }
    window.addEventListener("scroll", () => {
      const section = document.querySelector(".counters");
      if (!countersDone && window.scrollY + window.innerHeight > section.offsetTop) {
        runCounters();
        countersDone = true;
      }
    });

    // 3) Portfolio filter
    const filterBtns = document.querySelectorAll("#filter li");
    const items = document.querySelectorAll(".filtr-item");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelector("#filter li.active").classList.remove("active");
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        items.forEach(item => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    // 4) Contact form (demo only)
    function sendMessage(e) {
      e.preventDefault();
      document.getElementById("formMsg").innerHTML =
        '<span style="color:green;">Thanks! Your message has been sent.</span>';
      e.target.reset();
      return false;
    }