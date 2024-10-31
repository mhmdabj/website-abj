const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');
const activeIndicator = document.querySelector('.active-tab-indicator');

function setActiveTab(tab) {
  // Remove active class from all buttons
  tabButtons.forEach(btn => btn.classList.remove('text-orange'));
  
  // Add active class to the clicked button
  tab.classList.add('text-orange');

  // Set active indicator position and width
  const tabRect = tab.getBoundingClientRect();
  const containerRect = tab.parentElement.getBoundingClientRect();
  activeIndicator.style.width = `${tabRect.width}px`;
  activeIndicator.style.left = `${tabRect.left - containerRect.left}px`;

  // Show the related tab content
  const tabName = tab.getAttribute('data-tab');
  tabPanels.forEach(panel => {
    panel.classList.add('hidden');
    panel.style.opacity = 0;
  });
  const activeTab = document.getElementById(tabName);
  activeTab.classList.remove('hidden');
  setTimeout(() => {
    activeTab.style.opacity = 1;
  }, 10);
}

// Initial setup for the first tab
setActiveTab(tabButtons[0]);

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    setActiveTab(button);
  });
});
