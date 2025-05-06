// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function(history){
  var pushState = history.pushState;
  var replaceState = history.replaceState;

  function triggerPageView() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title
    });
  }

  history.pushState = function() {
    pushState.apply(history, arguments);
    triggerPageView();
  };

  history.replaceState = function() {
    replaceState.apply(history, arguments);
    triggerPageView();
  };

  window.addEventListener('popstate', triggerPageView);
  window.addEventListener('hashchange', triggerPageView);
})(window.history);



document.querySelectorAll('.card-montadoras').forEach(card => {
    card.addEventListener('click', function () {
      const name = this.dataset.name || 'indefinido';
      dataLayer.push({
        event: 'click',
        page_location: window.location.href,
        element_name: name,
        element_group: 'ver_mais'
      });
    });
  });

document.querySelector('#nome')?.addEventListener('input', function startFormOnce() {
dataLayer.push({
    event: 'form_start',
    page_location: window.location.href,
    form_id: 'formContato',
    form_name: 'contato',
    form_destination: window.location.origin + '/sobre.html'
});
this.removeEventListener('input', startFormOnce);
});

document.querySelector('#formContato')?.addEventListener('submit', function () {
    dataLayer.push({
      event: 'form_submit',
      page_location: window.location.href,
      form_id: 'formContato',
      form_name: 'contato',
      form_destination: window.location.origin + '/sobre.html',
      form_submit_text: this.querySelector('button[type="submit"]').innerText
    });
  });
  