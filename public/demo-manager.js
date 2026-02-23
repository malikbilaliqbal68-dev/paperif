// Demo and Auth Management Script
(function () {
    let currentUser = null;
    let auth = null;

    async function initAuth() {
        try {
            const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
            auth = getAuth();
            auth.onAuthStateChanged((user) => {
                currentUser = user;
                updateUI();
            });
        } catch (e) {
            console.error('Auth init failed:', e);
        }
    }

    function updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');

        if (currentUser) {
            if (loginBtn) {
                loginBtn.className = 'fa-solid fa-right-from-bracket text-xl text-red-500 cursor-pointer hover:text-red-700';
                loginBtn.title = 'Logout';
                loginBtn.onclick = logout;
            }
            if (mobileLoginBtn) {
                mobileLoginBtn.className = 'fa-solid fa-right-from-bracket text-xl text-red-500 cursor-pointer hover:text-red-700';
                mobileLoginBtn.title = 'Logout';
                mobileLoginBtn.onclick = logout;
            }
        } else {
            if (loginBtn) {
                loginBtn.className = 'fa-regular fa-user-circle text-xl text-gray-400 cursor-pointer hover:text-[#19c880]';
                loginBtn.title = 'Login';
                loginBtn.onclick = () => window.toggleModal && window.toggleModal('loginModal');
            }
            if (mobileLoginBtn) {
                mobileLoginBtn.className = 'fa-regular fa-user-circle text-xl text-gray-400 cursor-pointer hover:text-[#19c880]';
                mobileLoginBtn.title = 'Login';
                mobileLoginBtn.onclick = () => window.toggleModal && window.toggleModal('loginModal');
            }
        }
    }

    async function logout() {
        if (auth && currentUser) {
            await auth.signOut();
            currentUser = null;
            window.location.href = '/';
        }
    }

    // Hard-disable all generation blocking in frontend.
    window.checkBeforeGenerate = async function () {
        return true;
    };

    window.showPricingIfNeeded = async function () {
        return false;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAuth);
    } else {
        initAuth();
    }

    window.logout = logout;
})();
