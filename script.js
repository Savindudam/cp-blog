(function() {
    const mainContent = document.getElementById('mainContent');
    const themeIndicator = document.getElementById('themeIndicator');
    const themeCurrentLabel = document.getElementById('themeCurrentLabel');
    const darkModeToggle = document.getElementById('darkModeToggle');

    const tutorials = window.TUTORIALS || [];
    let currentTutorialIndex = null;

    const mainNavItems = [
        { name: 'Home',       key: 'home',      badge: false },
        { name: 'Tutorials',  key: 'tutorials', badge: true  },
        { name: 'Problems',   key: 'problems',  badge: 'soon' },
        { name: 'Profile',    key: 'profile',   badge: 'soon' }
    ];
    const secondaryNavItems = [
        { name: 'Settings', key: 'settings' },
        { name: 'About',    key: 'about'    }
    ];

    let tutorialCountElements = [];

    function buildNav() {
        const sidebarMain = document.getElementById('sidebarMainNav');
        const sidebarMore = document.getElementById('sidebarMoreNav');
        sidebarMain.innerHTML = '';
        sidebarMore.innerHTML = '';

        function createNavItem(item) {
            const el = document.createElement('div');
            el.className = 'nav-item';
            el.setAttribute('data-nav', item.key);
            let html = `<span>${item.name}</span>`;
            if (item.badge) {
                const badgeText = item.badge === true ? '0' : item.badge;
                html += `<span class="nav-badge" data-badge="${item.key}">${badgeText}</span>`;
            }
            el.innerHTML = html;
            return el;
        }

        mainNavItems.forEach(item => sidebarMain.appendChild(createNavItem(item)));
        secondaryNavItems.forEach(item => sidebarMore.appendChild(createNavItem(item)));

        tutorialCountElements = document.querySelectorAll('.nav-badge[data-badge="tutorials"]');
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            updateThemeUI(false);
        } else {
            updateThemeUI(true);
        }
    }

    function toggleTheme() {
        const isDark = !document.body.classList.contains('light-theme');
        if (isDark) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateThemeUI(false);
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeUI(true);
        }
    }

    function updateThemeUI(isDark) {
        if (themeCurrentLabel) {
            themeCurrentLabel.textContent = isDark ? 'Dark' : 'Light';
        }
        if (darkModeToggle) {
            darkModeToggle.checked = isDark;
        }
    }

    if (themeIndicator) themeIndicator.addEventListener('click', toggleTheme);
    if (darkModeToggle) darkModeToggle.addEventListener('change', toggleTheme);

    function hideAllPages() {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    }

    function setActiveNav(navValue) {
        document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-nav') === navValue);
        });
    }

    function navigateTo(pageName) {
        hideAllPages();
        const targetPage = document.getElementById('page-' + pageName);
        if (targetPage) targetPage.classList.add('active-page');
        setActiveNav(pageName);
        if (mainContent) mainContent.scrollTop = 0;

        if (pageName === 'tutorials') renderTutorialList();
        if (pageName === 'home') renderRecentTutorials();
        if (pageName === 'tutorial-detail') renderTutorialDetailPage();
    }

    document.querySelector('.sidebar').addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item[data-nav]');
        if (navItem) navigateTo(navItem.getAttribute('data-nav'));
    });

    function escapeHtml(text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(text).replace(/[&<>"']/g, m => map[m]);
    }

    function getDifficultyClass(difficulty) {
        if (!difficulty) return '';
        const lower = difficulty.toLowerCase();
        if (lower === 'easy') return 'difficulty-easy';
        if (lower === 'medium') return 'difficulty-medium';
        if (lower === 'hard') return 'difficulty-hard';
        return '';
    }

    function renderTutorialList() {
        const container = document.getElementById('tutorialListContainer');
        if (!container) return;
        container.innerHTML = '';
        if (tutorials.length === 0) {
            container.innerHTML = `<div class="empty-state"><span>No tutorials yet. Add them in tutorials.js</span></div>`;
            return;
        }
        tutorials.forEach((tutorial, index) => {
            const card = document.createElement('div');
            card.className = 'tutorial-list-item ' + getDifficultyClass(tutorial.difficulty);
            card.innerHTML = `
                <span class="tutorial-number">${String(index + 1).padStart(2, '0')}</span>
                <div style="flex: 1;">
                    <h3>${escapeHtml(tutorial.title)}</h3>
                    <div class="detail-meta">
                        <span>${escapeHtml(tutorial.topic || '')} · <span class="difficulty-text ${getDifficultyClass(tutorial.difficulty)}">${escapeHtml(tutorial.difficulty || '')}</span></span>
                        <span>${tutorial.readMinutes ? tutorial.readMinutes + ' min read' : ''} · ${tutorial.date || ''}</span>
                    </div>
                    <p class="tutorial-excerpt">${escapeHtml(tutorial.excerpt || '')}</p>
                    <div class="tutorial-tags">
                        ${(tutorial.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                    </div>
                </div>
            `;
            card.addEventListener('click', () => {
                currentTutorialIndex = index;
                navigateTo('tutorial-detail');
            });
            container.appendChild(card);
        });
        updateTutorialBadge(tutorials.length);
    }

    function renderTutorialDetailPage() {
        const container = document.getElementById('tutorialDetailContent');
        if (!container || currentTutorialIndex === null || !tutorials[currentTutorialIndex]) return;
        const t = tutorials[currentTutorialIndex];
        container.innerHTML = `
            <button class="back-to-list-btn" id="backToListBtn">← Back to tutorials</button>
            <div class="tutorial-detail-card">
                <h2>${escapeHtml(t.title)}</h2>
                <div class="detail-meta">
                    <span>${escapeHtml(t.topic || '')} · <span class="difficulty-text ${getDifficultyClass(t.difficulty)}">${escapeHtml(t.difficulty || '')}</span></span>
                    <span>${t.readMinutes ? t.readMinutes + ' min read' : ''} · ${t.date || ''}</span>
                </div>
                <div class="detail-content">${t.html || ''}</div>
            </div>
        `;
        document.getElementById('backToListBtn').addEventListener('click', () => navigateTo('tutorials'));
    }

    function updateTutorialBadge(count) {
        tutorialCountElements.forEach(badge => badge.textContent = count);
    }

    function renderRecentTutorials() {
        const container = document.querySelector('#page-home .recent-tutorials-section');
        if (!container) return;
        container.innerHTML = '<h2>Recent Tutorials</h2>';

        if (tutorials.length === 0) {
            container.innerHTML += `<div class="empty-state"><span>No tutorials published yet.</span></div>`;
            return;
        }

        const recent = tutorials.slice(-5).reverse();

        const list = document.createElement('div');
        list.style.display = 'flex';
        list.style.flexDirection = 'column';
        list.style.gap = '12px';

        recent.forEach((t) => {
            const realIndex = tutorials.indexOf(t);
            const globalNumber = realIndex + 1;
            const item = document.createElement('div');
            item.className = 'tutorial-list-item ' + getDifficultyClass(t.difficulty);
            item.style.cursor = 'pointer';
            item.innerHTML = `
                <span class="tutorial-number">${String(globalNumber).padStart(2, '0')}</span>
                <div style="flex: 1;">
                    <h3 style="font-size:15px;margin:0;">${escapeHtml(t.title)}</h3>
                    <span style="font-size:12px;color:var(--text-muted);">${t.date || ''} · <span class="difficulty-text ${getDifficultyClass(t.difficulty)}">${t.difficulty || ''}</span></span>
                </div>
            `;
            item.addEventListener('click', () => {
                currentTutorialIndex = realIndex;
                navigateTo('tutorial-detail');
            });
            list.appendChild(item);
        });

        container.appendChild(list);

        if (tutorials.length > 5) {
            const more = document.createElement('a');
            more.href = '#';
            more.textContent = 'View all tutorials →';
            more.className = 'action-link';
            more.setAttribute('data-navigate', 'tutorials');
            more.style.marginTop = '16px';
            more.style.display = 'inline-block';
            more.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('tutorials');
            });
            container.appendChild(more);
        }
    }

    initTheme();
    buildNav();
    updateTutorialBadge(tutorials.length);
    renderRecentTutorials();
    renderTutorialList();
})();
