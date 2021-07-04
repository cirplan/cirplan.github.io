window.onload = function () {
  const FIX_CLASS = 'fixed-open';
  const SLIDEOUT_OPEN = 'slideout-open';
  const ICON_OPEN = 'icon-click';
  const $icon = document.querySelector('#mobile-navbar-icon');
  $icon.addEventListener('click', (e) => {
    const $header = document.querySelector('#mobile-navbar');
    const $content = document.querySelector('#mobile-panel');
    if ($header.classList.contains(FIX_CLASS)) {
      $header.classList.remove(FIX_CLASS);
      $content.classList.remove(FIX_CLASS);
      $icon.classList.remove(ICON_OPEN);
      document.documentElement.classList.remove(SLIDEOUT_OPEN);
    } else {
      $header.classList.add(FIX_CLASS);
      $content.classList.add(FIX_CLASS);
      $icon.classList.add(ICON_OPEN);
      document.documentElement.classList.add(SLIDEOUT_OPEN);
    }
  });
};
