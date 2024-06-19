document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const promptInput = document.getElementById('prompt');
    const responseElement = document.getElementById('response');

    if (submitButton && promptInput && responseElement) {
        submitButton.addEventListener('click', () => {
            const prompt = promptInput.value;
            fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer KEYHERE`
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 150
                })
            })
                .then(response => response.json())
                .then(data => {
                    responseElement.innerText = data.choices[0].text.trim();
                })
                .catch(error => console.error('Error:', error));
        });
    } else {
        console.error('One or more elements not found in the DOM');
    }
});
