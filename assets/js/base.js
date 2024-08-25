

///CIRCLE ANIMATION

document.addEventListener('DOMContentLoaded', function () {
  const circle = document.querySelector('.gradient-circle');
  const colors = ['#7089bc', '#c67c78', '#ad689b', '#9d5cb1', '#4e6674', '#364750', '#e67e22', '#95a5a6', '#9484e4', '#34495e', '#6f89bb', '#adcdcd'];
  const colorCount = colors.length;

  let animationStarted = false;
  let scrollTimeout;

  // Variables for resizing and repositioning the circle
  const maxScroll = 300; // Maximum scroll range for full size and position change
  const maxSize = 400; // Initial circle size
  const minSize = 100; // Final circle size
  const initialTop = 50; // Initial position from the top
  const finalTop = 200; // Final position from the top after scrolling

  window.addEventListener('scroll', function () {
      const windowHeight = window.innerHeight;
      const circleTop = circle.getBoundingClientRect().top;
      const circleBottom = circleTop + circle.offsetHeight;
      const maxScrollPosition = document.documentElement.scrollHeight - windowHeight;
      let scrollPosition = window.scrollY;

      // Limit scrollPosition to maximum value
      scrollPosition = Math.min(scrollPosition, maxScrollPosition);

      // Start the floating animation when the circle comes into view
      if (!animationStarted && circleTop < windowHeight && circleBottom > 0) {
          circle.style.animationPlayState = 'running';
          animationStarted = true;
      }

      // Change colors based on scroll position
      const index = Math.floor(scrollPosition / (windowHeight / colorCount)) % colorCount;
      const color1 = colors[index];
      const color2 = colors[(index + 1) % colorCount];
      const color3 = colors[(index + 2) % colorCount];

      // Apply the new colors
      circle.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;

      // Adjust floating animation based on screen size
      let translateYFactor;
      if (window.innerWidth <= 480) {
          translateYFactor = 5; // For screens with width less than or equal to 480px
      } else if (window.innerWidth <= 768) {
          translateYFactor = 5; // For screens with width less than or equal to 768px
      } else {
          translateYFactor = 2; // Default for larger screens
      }

      circle.style.transform = `translateY(${Math.min(scrollPosition, windowHeight) / translateYFactor}px)`;

      // Calculate the new size and position based on scroll position
      const newSize = maxSize - (scrollPosition / maxScroll) * (maxSize - minSize);
      const newTop = initialTop + (scrollPosition / maxScroll) * (finalTop - initialTop);

      // Apply the new size and position to the circle
      circle.style.width = `${newSize}px`;
      circle.style.height = `${newSize}px`;
      circle.style.top = `${newTop}px`;

      // Clear any previous timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to check if scrolling has stopped after 100 milliseconds
      scrollTimeout = setTimeout(() => {
          // If no scroll events occur within 200 milliseconds, pause the animation
          circle.style.animationPlayState = 'paused';
          animationStarted = false;
      }, 100);
  });
});



  //Adding background gradient

  document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.gradient-bg');
    const colors2 = ['#7089bc', '#c67c78', '#ad689b', '#9d5cb1', '#4e6674', '#364750', '##9484e4', '#34495e', '#6f89bb', '##adcdcd', '#986432', '#95a5a6',];
    const colorCount2 = colors2.length;

    window.addEventListener('scroll', function () {
      const scrollPosition2 = window.scrollY;

      // Change colors based on scroll position
      const index2 = Math.floor(scrollPosition2 / (window.innerHeight / colorCount2)) % colorCount2;
      const color1 = colors2[index2];
      const color2 = colors2[(index2 + 1) % colorCount2];
      const color3 = colors2[(index2 + 2) % colorCount2];

      // Apply the new colors
      intro.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
      
    });
  });