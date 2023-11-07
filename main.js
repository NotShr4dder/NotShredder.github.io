document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var feedback = document.getElementById('feedback').value;
    fetch('DISCORD_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: feedback })
    });
});
