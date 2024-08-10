// Example JavaScript code for the about page
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        { name: 'John Doe', role: 'Chef', img: 'images/team1.jpg' },
        { name: 'Jane Smith', role: 'Nutritionist', img: 'images/team2.jpg' },
        { name: 'Emily Johnson', role: 'Food Critic', img: 'images/team3.jpg' }
    ];

    const teamContainer = document.getElementById('team');

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
    });
});
