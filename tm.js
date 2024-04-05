// Animate the header text on page load
window.addEventListener('load', function() {
    const headerText = document.querySelector('header h1');
    headerText.style.opacity = 0;
    headerText.style.transform = 'translateY(-50px)';
    
    setTimeout(function() {
      headerText.style.transition = 'opacity 1s ease, transform 1s ease';
      headerText.style.opacity = 1;
      headerText.style.transform = 'translateY(0)';
    }, 500);
  });
  
  // Animate the list items on scroll
  window.addEventListener('scroll', function() {
    const governmentListItems = document.querySelectorAll('#government li');
    const privateListItems = document.querySelectorAll('#private li');
  
    animateListItems(governmentListItems);
    animateListItems(privateListItems);
  });
  
  function animateListItems(items) {
    items.forEach(function(item, index) {
      if (isItemVisible(item)) {
        item.style.transitionDelay = index * 0.2 + 's';
        item.classList.add('visible');
      }
    });
  }
  
  function isItemVisible(item) {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    return itemTop < windowHeight;
  }
  