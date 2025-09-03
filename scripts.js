// Cerrar el menu burger al pulsar en un enlace
    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
      });
    });


// Marcar menú activo
    function actualizarActiveLink() {
      const links = document.querySelectorAll(".menu .links a");
      const currentHash = window.location.hash;

      links.forEach(link => link.classList.remove("active"));

      if (currentHash) {
        links.forEach(link => {
          if (link.getAttribute("href") === currentHash) {
            link.classList.add("active");
          }
        });
      }
    }

    // Ejecutar al cargar la página
    actualizarActiveLink();

    // Ejecutar cada vez que cambie el hash (clic o scroll con hash)
    window.addEventListener("hashchange", actualizarActiveLink);
