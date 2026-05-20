// Jus 9 — scripts consolidados pré-Movimento 2
(function(){
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  document.querySelectorAll('.menu a').forEach((a) => {
    a.addEventListener('click', () => { if (menu) menu.classList.remove('open'); });
  });
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    el.addEventListener('click', () => {
      const msg = encodeURIComponent('Olá, Clovis. Vim pelo site da Jus 9 Tecnologia Jurídica e quero conhecer melhor o MVP.');
      el.href = `https://wa.me/5548999082726?text=${msg}`;
    });
  });
})();

window.jus9CookieChoose = function(choice){
  var banners = document.querySelectorAll('[data-cookie-banner]');
  try {
    localStorage.setItem('jus9CookieChoice', choice);
    localStorage.setItem('jus9CookieChoiceDate', new Date().toISOString());
  } catch(e) {}
  banners.forEach(function(b){ b.hidden = true; b.style.display = 'none'; });
  return false;
};

window.jus9CookiePreferences = function(href){
  window.location.href = href || 'documentos/cookies.html';
  return false;
};

(function(){
  var banners = document.querySelectorAll('[data-cookie-banner]');
  var choice = null;
  try { choice = localStorage.getItem('jus9CookieChoice'); } catch(e) {}
  banners.forEach(function(banner){
    if (!choice) {
      banner.hidden = false;
      banner.style.display = '';
    } else {
      banner.hidden = true;
      banner.style.display = 'none';
    }
  });
})();

window.jus9DemoLogin = function(form){
  var email = ((form.querySelector('[name="email"]') || {}).value || '').trim().toLowerCase();
  var password = ((form.querySelector('[name="password"]') || {}).value || '');
  var msg = document.querySelector('[data-login-message]');
  if(email === 'demo@jus9tecnologia.com.br' && password === 'Jus9MVP#2026'){
    window.location.href = 'https://www.jus9tecnologia.com.br/app-demo-advogar';
    return false;
  }
  if(msg){
    msg.textContent = 'Acesso demonstrativo: use demo@jus9tecnologia.com.br com a senha Jus9MVP#2026.';
    msg.hidden = false;
  } else {
    alert('Acesso demonstrativo: use demo@jus9tecnologia.com.br com a senha Jus9MVP#2026.');
  }
  return false;
};

// Movimento Web Summit / Carta — agradecimento institucional ao Banco Itaú
(function(){
  function createParagraph(html) {
    var p = document.createElement('p');
    p.innerHTML = html;
    return p;
  }

  function injectItauThanks() {
    var article = document.querySelector('.carta-texto');
    if (!article || document.getElementById('agradecimento-banco-itau')) return;

    var anchors = Array.from(article.querySelectorAll('p'));
    var reference = anchors.find(function(p){
      return p.textContent && p.textContent.indexOf('Nesse mesmo caminho de aprendizado') !== -1;
    });

    if (!reference) return;

    var section = document.createElement('section');
    section.id = 'agradecimento-banco-itau';
    section.className = 'agradecimento-institucional agradecimento-banco-itau';
    section.setAttribute('aria-label', 'Agradecimento ao Banco Itaú');

    var title = document.createElement('h2');
    title.textContent = 'Agradecimento ao Banco Itaú';
    section.appendChild(title);

    section.appendChild(createParagraph('A <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a> registra também seu agradecimento institucional ao Banco Itaú.'));
    section.appendChild(createParagraph('Em sua fase inicial, quando ainda caminhava como MEI iniciante e dava seus primeiros passos formais no mundo empresarial, a <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a> encontrou no Banco Itaú uma porta aberta.'));
    section.appendChild(createParagraph('Naquele momento, em que a empresa ainda era pequena, recém-formalizada e buscava estrutura mínima para existir com dignidade administrativa, o Itaú foi o primeiro banco a oferecer uma conta corrente empresarial à <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a>.'));
    section.appendChild(createParagraph('Esse gesto, que no cotidiano bancário pode parecer apenas uma etapa operacional, teve para nós valor muito maior. Para quem começa, uma conta empresarial não é apenas uma conta: é o reconhecimento de que uma ideia pode ganhar forma jurídica, econômica e institucional.'));
    section.appendChild(createParagraph('Antes de uma empresa crescer, apresentar projetos, participar de eventos, buscar investidores, desenvolver tecnologia ou se colocar diante do mundo, ela precisa atravessar os primeiros atos concretos da vida empresarial: abrir conta, organizar pagamentos, receber valores, registrar movimentações, separar a pessoa física da pessoa jurídica e começar a construir sua história com responsabilidade.'));
    section.appendChild(createParagraph('Por isso, ao narrar o nascimento virtual e institucional da <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a>, é justo registrar que o Banco Itaú participou dessa travessia inicial.'));
    section.appendChild(createParagraph('Quando as portas ainda pareciam difíceis, o Itaú foi uma das primeiras instituições a permitir que a <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a> começasse a existir também no plano financeiro e operacional. Esse acolhimento inicial ajudou a empresa a dar seus primeiros passos como organização formal, ainda com poucos recursos, mas já com propósito, coragem e visão de futuro.'));
    section.appendChild(createParagraph('Hoje, ao preparar sua presença no <a href="https://rio.websummit.com/" target="_blank" rel="noopener">Web Summit Rio 2026</a> e ao organizar sua transição para uma fase de MVP, tecnologia jurídica, inteligência artificial assistiva, governança, educação jurídica, documentação e impacto social, a <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a> reconhece com gratidão aqueles que, de algum modo, abriram caminho para que ela pudesse chegar até aqui.'));
    section.appendChild(createParagraph('A <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a> chegou a uma etapa decisiva de sua história. Estamos nos preparando para o <a href="https://rio.websummit.com/" target="_blank" rel="noopener">Web Summit Rio 2026</a>, inseridos em um ambiente internacional de inovação, tecnologia, startups, mentores e investidores. Por isso, buscamos apoio, orientação, divulgação responsável e aproximação institucional de quem, de algum modo, ajudou a tornar essa caminhada possível.'));
    section.appendChild(createParagraph('Ao Banco Itaú, nosso agradecimento.'));
    section.appendChild(createParagraph('Que esta memória fique registrada nesta Carta como parte da história de nascimento, continuidade e amadurecimento da <a href="https://www.jus9tecnologia.com.br" target="_blank" rel="noopener">Jus 9 Tecnologia Jurídica</a>.'));

    reference.parentNode.insertBefore(section, reference);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectItauThanks);
  } else {
    injectItauThanks();
  }
})();
