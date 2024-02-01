export const showElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = 'flex';
  }
};

export const hideElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = 'none';
  }
};

export function showDetail(malId) {
  const showDetailEvent = new CustomEvent('showDetail', {
    detail: {
      malId,
    },
  });

  // Mengirim event showDetail
  document.dispatchEvent(showDetailEvent);
}
