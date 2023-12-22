$.getScript(
  "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js",
  function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 500,
          },
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "star",
          stroke: {
            width: 6,
            color: "#2d5d70",
          },
          polygon: {
            nb_sides: 13,
          },
          image: {
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.9,
          random: false,
          anim: {
            enable: false,
            speed: 20,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.5,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#888bc3",
          opacity: 0.5,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 500,
            line_linked: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 150,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#fff",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }
);
