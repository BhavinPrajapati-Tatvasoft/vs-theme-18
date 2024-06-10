$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Sidebar
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("toggle-menu");
  });
  $(".sidebar-overlay").on("click", function (e) {
    $("body").removeClass("toggle-menu");
  });

  // Search
  $(".search-btn").on("click", function (e) {
    $("body").toggleClass("open-search");
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("open-search");
  });

  // Sales Chart
  let dataChartCanvas = document.getElementById("dataChart");
  if (dataChartCanvas) {
    var ctx = dataChartCanvas.getContext("2d");
    var data = {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "My First Dataset",
          data: [20, 55, 75, 35, 78],
          borderColor: "#48A846",
          pointBorderColor: "#48A846",
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#48A846",
        },
        {
          label: "My First Dataset",
          data: [77, 19, 65, 85, 65],
          borderColor: "#2B9EB3",
          tension: 0.4,
          pointRadius: 4,
          pointBorderColor: "#2B9EB3",
          pointBackgroundColor: "#2B9EB3",
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#666666",
            font: {
              size: 12,
              lineHeight: "18px",
            },
            padding: 8,
          },
          grid: {
            drawTicks: false,
            color: "#E6E6E6",
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#666666",
            font: {
              size: 12,
              lineHeight: "18px",
            },
            padding: 8,
            stepSize: 20,
          },
          grid: {
            drawTicks: false,
            color: "#E6E6E6",
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var dataChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }

  // Device Chart
  let deviceChartCanvas = document.getElementById("deviceChart");
  if (deviceChartCanvas) {
    var ctx = deviceChartCanvas.getContext("2d");
    var data = {
      labels: ["35%", "15%", "50%"],
      datasets: [
        {
          label: "My First Dataset",
          data: [35, 15, 50],
          backgroundColor: ["#0C4FFA", "#48A846", "#F03B3D"],
          hoverOffset: 4,
          borderWidth: 0,
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      cutout: 88,
      offset: 6,
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var deviceChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  }

  // Select2
  $(".custom-select").select2({
    width: "100%",
    dropdownCssClass: "custom-select-menu",
  });
  // CountUp
  $(".numbers").counterUp();

  // Password Toggle
  $(".password-btn").click(function () {
    var passwordInput = $(this).siblings(".password-input");
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("show-password");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("show-password");
    }
  });

  $("#datatable1").DataTable({
    sort: false,
    filter: false,
    info: false,
    autoWidth: false,
    dom: '<"top">rt<"bottom"flip><"clear">',
    paging: false,
  });

  // AOS Initialize
  AOS.init({
    once: true,
    duration: 600,
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
