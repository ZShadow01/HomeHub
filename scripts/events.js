window.hub.register('app-open', (args) => {
    const iframe = document.getElementById('currentApp');
    iframe.src = args.html;
});