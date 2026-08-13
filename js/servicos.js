document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.servico-toggle').forEach(btn => {
    btn.addEventListener('click', () => toggleServico(btn));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleServico(btn);
      }
    });
  });

  function toggleServico(btn) {
    const targetId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      panel.hidden = true;
    } else {
      panel.hidden = false;
      // Behavior accordion: close others
      document.querySelectorAll('.servico-toggle').forEach(b => {
        if (b !== btn) {
          const other = document.getElementById(b.getAttribute('aria-controls'));
          if (other) other.hidden = true;
          b.setAttribute('aria-expanded','false');
        }
      });
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
});
