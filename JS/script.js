const bodyElement = document.body;

bodyElement.addEventListener('mousemove',(event)=>{
  const xCordinate = event.offsetX;
  const yCordinate = event.offsetY;

  const spanElement = document.createElement('span');
 

  spanElement.style.left = `${xCordinate}px`;
  spanElement.style.top = `${yCordinate}px`;

  const size = 5+Math.random()*70;

  spanElement.style.width = `${size}px`;
  spanElement.style.height = `${size}px`;

  bodyElement.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 2000);
});