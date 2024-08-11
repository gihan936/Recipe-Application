// Rajni 8996051
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        { name: 'John Doe', role: 'Chef', img: 'images/team1.jpg', bio: 'John is a master chef with over 20 years of experience.' },
        { name: 'Jane Smith', role: 'Nutritionist', img: 'images/team2.jpg', bio: 'Jane is a certified nutritionist with a passion for healthy eating.' },
        { name: 'Emily Johnson', role: 'Food Critic', img: 'images/team3.jpg', bio: 'Emily is a well-known food critic and author.' }
    ];

    const teamContainer = document.getElementById('team');
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    modalContent.appendChild(closeBtn);

    const modalImg = document.createElement('img');
    modalContent.appendChild(modalImg);

    const modalName = document.createElement('h3');
    modalContent.appendChild(modalName);

    const modalBio = document.createElement('p');
    modalContent.appendChild(modalBio);

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';

        const memberImg = document.createElement('img');
        memberImg.src = member.img;
        memberImg.alt = member.name;

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const memberRole = document.createElement('p');
        memberRole.textContent = member.role;

        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);
        memberDiv.appendChild(memberRole);
        teamContainer.appendChild(memberDiv);

        // Modal Pop-up functionality
        memberImg.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = member.img;
            modalName.textContent = member.name;
            modalBio.textContent = member.bio;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Theme Switcher functionality
    const themeSwitcher = document.createElement('button');
    themeSwitcher.textContent = 'Change Theme';
    themeSwitcher.style.position = 'fixed';
    themeSwitcher.style.top = '10px';
    themeSwitcher.style.right = '20px';
    themeSwitcher.style.padding = '10px';
    themeSwitcher.style.background = '#ff6600';
    themeSwitcher.style.color = '#fff';
    themeSwitcher.style.border = 'none';
    themeSwitcher.style.cursor = 'pointer';
    document.body.appendChild(themeSwitcher);

    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
