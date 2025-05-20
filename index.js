document.getElementById('activateButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'activatePremium' }, () => {
        // Rediriger vers la page de l'extension après l'activation
        window.close();
    });
});