
        // Get the logout button
        const logoutBtn = document.querySelector('#logout-btn');

        // Add an event listener to the logout button
        logoutBtn.addEventListener('click', () => {
            // Sign out of Firebase
            firebase.auth().signOut()
                .then(() => {
                    // Signed out successfully, redirect to login page
                    window.location.href = 'login.html';
                })
                .catch((error) => {
                    console.error('Error signing out:', error);
                });
        });
  