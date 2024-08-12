document.addEventListener('DOMContentLoaded', () => {
    // Gallery images data
    const galleryImages = [
        { img: 'images/Beef-Stroganoff.jpg', alt: 'Beef Stroganoff' },
        { img: 'images/stirfried-vegetables.jpg', alt: 'Stirfried Vegetables' },
        { img: 'images/garlic-Shrimp.jpg', alt: 'Garlic Shrimp' },
        { img: 'images/mango-smoothie.jpg', alt: 'Mango Smoothie' }
    ];

    // Gallery container
    const galleryContainer = document.getElementById('gallery-images');

    galleryImages.forEach(image => {
        // Create image div
        const imgDiv = document.createElement('div');
        imgDiv.className = 'gallery-item';

        // Create img element
        const img = document.createElement('img');
        img.src = image.img;
        img.alt = image.alt;
        img.className = 'gallery-thumbnail';

        imgDiv.appendChild(img);
        galleryContainer.appendChild(imgDiv);

        // Modal trigger
        img.addEventListener('click', () => {
            showModal(image.img, image.alt);
        });
    });

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    // Close button
    const close = document.createElement('span');
    close.className = 'close';
    close.innerHTML = '&times;';
    modalContent.appendChild(close);

    // Modal image
    const modalImg = document.createElement('img');
    modalContent.appendChild(modalImg);

    // Show modal function
    function showModal(src, alt) {
        modalImg.src = src;
        modalImg.alt = alt;
        modal.style.display = 'block';
    }

    // Close modal on click
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Hide modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle Explore Recipes button click
    const exploreButton = document.getElementById('explore');
    
    exploreButton.addEventListener('click', () => {
        window.location.href = 'recipes.html';
    });
});
