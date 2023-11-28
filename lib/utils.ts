export const isInViewport = (ele: HTMLElement, container: HTMLElement) => {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  // The element is fully visible in the container
  return eleTop >= containerTop && eleBottom <= containerBottom;
};
