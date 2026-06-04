        // esta parte es para el filtro de la galeria
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryCols = document.querySelectorAll('.gallery-col');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryCols.forEach(col => {
                    if (filterValue === 'todas' || col.getAttribute('data-category') === filterValue) {
                        col.style.display = 'block';
                        setTimeout(() => { col.style.opacity = '1'; }, 50);
                    } else {
                        col.style.display = 'none';
                        col.style.opacity = '0';
                    }
                });
            });
        });

        // Este cacho se encarga de aumentar la imagen
        function openModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            const modalElement = document.getElementById('imageModal');
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
            modalInstance.show();
        }