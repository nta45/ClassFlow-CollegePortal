const darkMode = document.querySelector('.dark-mode');
const iframes = document.querySelectorAll('iframe');


darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    iframes.forEach(iframe => {
        if (iframe.contentDocument) {
                iframe.contentDocument.body.classList.toggle('dark-mode-variables');
            }
        });
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

document.querySelectorAll('.sidebar a').forEach(btn => {
    btn.addEventListener('click', () =>  {
        const iframeID = btn.getAttribute('data-iframe');
        if(iframeID === 'logoutiframe') {
            alert("Work in progress. LogOut will be implemented soon.");
            
        }

        document.querySelectorAll('iframe').forEach(iframe => {
              iframe.style.display = 'none';
        });
        document.querySelectorAll('.sidebar a').forEach(iframe => {
            iframe.className = '';
        });

        btn.className = 'active';
            
        document.getElementById(iframeID).style.display = 'block';

        
    });
});

